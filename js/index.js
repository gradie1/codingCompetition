var database = firebase.database();

function onCreate(){

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			
			$('.login').hide();
			$('.logout').show();

		} else {
			
		}
});
}onCreate();

function logout(){
	firebase.auth().signOut().then(function() {
		
		redirect("index.html");

	}, function(error) {
		alert(error);
	});
}