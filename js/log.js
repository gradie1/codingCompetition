var database = firebase.database();

function onCreate(){

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			document.location.assign('dashboard.html');
		} else {
    // User is signed out.
    // ...
}
});

}onCreate();


function signup(){

	var user = {
		username:$('#username').val(),
		email: $('#email').val(),
		univ: $('#univ').val(),
		phone: $('#phone').val(),
		password: $('#password').val(),
		password2: $('#password2').val()
	}

	if(true){

		load();

		//FIREBASE CREATE USER
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.then(function(response){

			//regester in db

			database.ref('users/'+firebase.auth().currentUser.uid)
			.set(user).then(function(snapshot){

				document.location.assign('dashboard.html');

			}).catch(function(err){
				alert(err.message);
				stopLoading();
			});




		})
		.catch(function(error) {
			alert(error.message);
		});

	}

}

function login(){


	var email = $('#logEmail').val();
	var password = $('#logPassword').val();

	if(email == ""){
		error("Email is empty");
		return;
	}

	if(password == ""){
		error("Password is empty");
		return;
	}

	try{load();

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(user){

			document.location.assign('dashboard.html');

		})
		.catch(function(error) {
			alert(error);
			stopLoading();
		});

	}catch(e){
		alert(e.message);
		stopLoading();
	}

}









