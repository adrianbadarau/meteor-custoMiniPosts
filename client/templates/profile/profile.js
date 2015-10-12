Template.profile.events({
	'submit .editProfile': function (event) {
		event.preventDefault();
		var file = $('#profileImage').get(0).files[0];

		if(file){
			var fsFile = new FS.File(file);
			ProfileImages.insert(fsFile, function( err, result ){
				if( err ){
					new Meteor.Error(err);
				}else{
					var imgLoc = "/cfs/files/ProfileImages/"+result._id;
					UserImages.insert({
						userId: Meteor.userId(),
						userName: Meteor.user().username,
						image: imgLoc,
					});
					Router.go('/');
				}
			});
		}
	}
});