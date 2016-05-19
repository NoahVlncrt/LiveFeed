Events = new Mongo.Collection("events");
EventsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title of the event"
  },
  "description":{
    type: String,
    label: "Some more details"
  },
  "status":{
    type: Boolean,
    label: "up or down?",
    autoValue: function(){
      if(this.isInsert){
        return true
      }
    }
  },
  "createdBy":{
    type: String,
    label: "who made this!",
    autoValue: function(){
      if(this.isInsert){
        return Meteor.userId()
      }
    }
  },
  "viewers":{
    type: [String],
    label: "Who the heck is watching this",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "createdAt":{
    type: Date,
    label: "when this was made!",
    autoValue: function(){
      if(this.isInsert){
        return new Date()
      }
    }
  }
})
Events.attachSchema(EventsSchema);

Posts = new Mongo.Collection("posts");
PostsSchema = new SimpleSchema({
  "content": {
    type: String,
    label: "content for post"
  },
  "parentEvent": {
    type: String,
    label: "what event do I belong to?"
  },
  "favorited": {
    type: [String],
    label: "who like this?",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "createdAt": {
    type: Date,
    label: "when was I made?",
    autoValue: function(){
      if(this.isInsert){
        return new Date()
      }
    }
  },
  "createdBy": {
    type: String,
    label: "who made me?",
    autoValue: function(){
      if(this.isInsert){
        return Meteor.userId()
      }
    }
  }
})
Posts.attachSchema(PostsSchema)