var database = firebase.database();

var User;

function onCreate(){load();

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		
			//select user data
			database.ref('users/'+user.uid)
			.on('value',function(snap){


				User = snap.val();
				$('#username').html(User.username);

				stopLoading();

			});
		
		} else {
			document.location.assign('index.html');

		}
	});

}onCreate();





function submitCode(){

	var code = myCodeMirror.getValue();
	load();

	database.ref('users/'+firebase.auth().currentUser.uid+'/code')
	.set({
		language:language,
		code:code
	})
	.then(function(snap){
		$('.notification').show();
		stopLoading();

	})
	.catch(function(err){
		alert(err);
		stopLoading();
	});

}

$('.cancel-notification').click(function(){
	$('.notification').hide();
});
























function logout(){
	firebase.auth().signOut().then(function() {
		
		redirect("index.html");

	}, function(error) {
		alert(error);
	});
}




var tmp = document.getElementById('template');
var myCodeMirror = CodeMirror(tmp, {
	mode:  "javascript",
	lineNumbers : true,
	theme:"monokai"
});

var language = "javascript";

$(".dropdown-item").click(function(){
	language = this.text;
	$('.lng').text(language);
});

