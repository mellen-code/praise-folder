# Praise Folder <a href="https://praisefolder.cyclic.app/" target="_blank">Visit Here</a>
<a href="https://praisefolder.cyclic.app/" target="_blank">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVlMjg2MDAzZjA3N2I2MjdhMWIyMTRiOGQzYThkMjcwZWU5MmMyMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/bASX2PBLf0hYWCF2lS/giphy.gif" width="80%" margin="auto" alt="link to match game"/>
</a>

Full-stack web app where users can store the acknowledgments, positive feedback, and praises from others as well as noteworthy projects, in one place. 

Users can login to their folder of praises/acknowledgments, upload files to their folder, add a title and caption and set the praise as public or private through an input. They can edit or delete their praises, and pin their favorite praises to the top of their folder.
There is also the option to view, like and comment on any users' public praises in the Public Feed.

A great tool for anyone looking to keep track of career accomplishments and/or looking to revisit those moments to give yourself a boost.

Built with Node, Express, MongoDB, JavaScript, Passport, Bootstrap, and EJS.


## Tech used: ![NODE BADGE](https://img.shields.io/static/v1?label=%7C&message=NODE&color=cbb148&style=plastic&logo=node)![MONGODB BADGE](https://img.shields.io/static/v1?label=|&message=MONGO-DB&color=cdd148&style=plastic&logo=mongodb)![EXPRESS BADGE](https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)![PASSPORT BADGE](https://img.shields.io/static/v1?label=|&message=PASSPORT&color=36DF79&style=plastic&logo=passport)![EJS BADGE](https://img.shields.io/static/v1?label=|&message=EJS&color=9bb24e&style=plastic)![BOOTSTRAP BADGE](https://img.shields.io/static/v1?label=|&message=BOOTSTRAP&color=316c5e&style=plastic&logo=bootstrap)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)


## Optimizations
I would like to include a link on each public praise that brings you to a page that displays all the user's public praises. It will also be fun to include an option to react to public praises, as well as further optimize mobile styling.

## Lessons Learned

Utilizing Mongoose Schemas to manipulate the data to send from controller files to views files. For example, to enable users to pin individual praises in their folder, I added a 'pinned' field to the Praise Schema as a boolean. Then I used the findOneAndUpdate method in the controller function, along with Mongo's aggregation pipeline to toggle the praise's pinned field value between true and false.
I also had a lot of fun working with EJS functionality, and creating resuable templates, such as header and footer.


## More Projects

<table bordercolor="#66b2b2">

  <tr>
    <td width="50%"  style="align:center;" valign="top">
<a target="_blank" href="">ConfiDance</a>
        <br />
      <a target="_blank" href="">
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjM4NmJjM2IyMzIxMGNiZWZiMjMzNmI5NWE4OWIwMTE3ZjhjZGZlNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/OXCaDWUVwy5ViA30od/giphy.gif" width="100%"  alt="link to Confidance application"/>
        </a>
    </td>
    <td width="50%" valign="top">
<a target="_blank" href="">The Metropolitan Museum of Art Generator</a>
      <br />
        <a target="_blank" href="">
          <img src="https://media.giphy.com/media/HdH82S9MPWdWmUk6eg/giphy.gif" width="100%" alt="link to Metropolitan Museum of Art Generator"/>
        </a>
    </td>
    
  </tr>
</table>
