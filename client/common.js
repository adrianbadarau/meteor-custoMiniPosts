Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');

Meteor.startup(function () {
  AccountsEntry.config({
    // if set adds link to terms  'you agree to ...' on sign-up page
    homeRoute: '/',                    // mandatory - path to redirect to after sign-out
    dashboardRoute: '/',     // mandatory - path to redirect to after successful sign-in
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
  });
  Accounts.ui.config({
  	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
  });
});

Template.registerHelper('getProfileImg', function( userid ){
  return UserImages.findOne({userId: userid}).image;
})