Template.launchScreen.helpers({
  "topEvents": function(){
    return Events.find({status: true})
  },
  "userInfo": function(){
    return Meteor.users.findOne({_id: this.createdBy}).username
  },
  "postCount": function(){
    posts = Posts.find({parentChannel: this._id})
    postsCount = posts.length()
  }
})