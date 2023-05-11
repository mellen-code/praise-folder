const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        praise: req.params.id,
        createdByUsername: req.user.userName, 
        createdById: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect("/praise/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({_id: req.params.commentid})
      console.log("Comment has been deleted!");
      res.redirect("/praise/" + req.params.postid);
    } catch (err) {
      console.log(err);
    }
  },
};