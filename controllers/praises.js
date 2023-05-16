const cloudinary = require("../middleware/cloudinary");
const Praise = require("../models/Praise");
const Comment = require("../models/Comment");
const User = require("../models/User")

module.exports = {
  getFolder: async (req, res) => {
    try {
      const praises = await Praise.find({ user: req.user.id })
      .sort({ pinned: -1, createdAt: "desc" })
      .lean();
      res.render("folder.ejs", { praises: praises, user: req.user });
    } catch (err) {
      console.log(err);
      return res.render('error/501');
    }
  },

  getFeed: async (req, res) => {
    try {
      const praises = await Praise.find({ status: "public"})
        .sort({ createdAt: "desc" })
        .lean();
      res.render("feed.ejs", { praises: praises });
    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  getPraise: async (req, res) => {
    try {
      const praise = await Praise.findById(req.params.id);
      const comments = await Comment.find({ praise: req.params.id}).sort({ createdAt: "asc" }).lean();
      const userWhoPostedPraise = await praise.user;
      const username = await User.findOne({ _id: userWhoPostedPraise}).lean();

      res.render("praise.ejs", { praise: praise, user: req.user, comments: comments, username: username });
    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  createPraise: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Praise.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        status: req.body.status,
        likes: 0,
        user: req.user.id,
      });
      console.log("Praise has been added!");
      res.redirect("/folder");
    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  getEditPraise: async (req, res) => {
    try {
      const praise = await Praise.findOne({
        _id: req.params.id
      }).lean();
      let otherStatus;

      if (praise.status === 'public') {
        otherStatus = 'private'
      } else {
        otherStatus = 'public'
      }

      res.render('editPraise', {
        praise,
        otherStatus
    });

    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  // @route PUT /:id (method override)
  editPraise: async (req, res) => {
    try {
      console.log('editPraise function starting')
        let praise = await Praise.findById(req.params.id).lean();

        if (!praise) {
          console.log('Praise not found');
            return res.render('error/404');           
        }

        if (praise.user != req.user.id) {
            res.redirect('/folder')
        } else {
            praise = await Praise.findOneAndUpdate({_id: req.params.id}, req.body, {
                new: true,
                runValidators: true
            })
            res.redirect('/folder')
            }
    } catch (error) {
        return res.render('error/500');
    }
  },

  likePraise: async (req, res) => {
    try {
      await Praise.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      res.redirect(`/praise/${req.params.id}`);
    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  pinPraise: async (req, res) => {
    try {
      await Praise.findOneAndUpdate(
        {_id: req.params.id},
        [
          { $set: { pinned: { $not: "$pinned" } } }
        ] 
      ) 
      res.redirect('/folder');
    } catch (err) {
      console.log(err);
      return res.render('error/500');
    }
  },

  deletePraise: async (req, res) => {
    try {
      let praise = await Praise.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(praise.cloudinaryId);
      // Delete post from db
      await Praise.remove({ _id: req.params.id });
      console.log("Deleted Praise");
      res.redirect("/folder");
    } catch (err) {
      console.log(err)
      res.redirect("/folder");
    }
  },
};
