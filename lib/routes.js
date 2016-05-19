FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "launchScreen"});
	}
});
FlowRouter.route('/add', {
	action: function(){
		BlazeLayout.render("mainLayout", {content: "addPage"})
	}
})
FlowRouter.route('/event/:id', {
	action: function(){
		BlazeLayout.render("mainLayout",{content: "eventPage"})
	}
});
//Routes setup for useraccounts:core
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/signup',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});