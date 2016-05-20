Template.eventPage.onRendered(function(){
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
})

Template.eventPage.helpers({
  "eventData": function(){
    currentEvent = FlowRouter.getParam("id")
    return Events.findOne({_id: currentEvent})
  },
  "posts": function(){
    currentEvent = FlowRouter.getParam("id")
    return Posts.find({parentEvent: currentEvent},{sort:{createdAt: -1}})
  },
  "favorited": function(){
    return Posts.findOne({_id: this._id}).favorited.indexOf(Meteor.userId()) > -1
  },
  "favoriteCount": function(){
    return Posts.findOne({_id: this._id}).favorited.length
  },
  "isOwner": function(){
    currentEvent = FlowRouter.getParam("id");
    Data = Events.findOne({_id: currentEvent});
    createdBy = Data.createdBy
    return createdBy === Meteor.userId()
  }
})
Template.eventPage.events({
  'submit .newUpdate': function(){
    currentEvent = FlowRouter.getParam("id")
    event.preventDefault()
    
    content = $("#newPostText").val()
    
    Data = {
      content: content,
      parentEvent: currentEvent
    },
      
    Posts.insert( Data, { validate: true } );
    
    $("#newPostText").val("")
  },
  'click .favorite': function(){
    postId = this._id
    Posts.update({_id: postId},{$addToSet:{favorited: Meteor.userId()}})
  }
})