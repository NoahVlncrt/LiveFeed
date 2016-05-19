// This by default creates an admin user if there is only one user. Every other user after that is assigned to the user group.

var addUsers = function(userId){
  if(Meteor.users.find().count() === 1){
    Roles.addUsersToRoles(userId, ['admin']);    
  } else {
    Roles.addUsersToRoles(userId, ['user']);  
  }
  
};
AccountsTemplates.configure({
  postSignUpHook: addUsers
})

AccountsTemplates.addField({
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
});
AccountsTemplates.addField({
  _id: "bio",
  type: "text",
  displayName: "Bio",
  required: true,
  maxLength: 300
})