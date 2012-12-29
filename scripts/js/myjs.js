 var bool= true;
 var c;
 var interval;
 var array = new Array(new Array(3),new Array(3),new Array(3));
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '238270832935583', // App ID
      channelUrl : '//127.0.0.1/channel.php', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
	  /**FB.api('/me', function(response) {
	  console.log(response);
	}); **/
	
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
	var oauth_url = 'https://www.facebook.com/dialog/oauth/';
  oauth_url += '?client_id=238270832935583';
  oauth_url += '&redirect_uri=' + encodeURIComponent('https://apps.facebook.com/crossandcirle/');
  oauth_url += '&scope=user_birthday,friends_birthday';

  window.top.location = oauth_url;
	
	/**		FB.login(function(response) {
		   if (response.authResponse) {
			 console.log('Welcome!  Fetching your information.... ');
			 FB.api('/me', function(response) {
			   console.log('Good to see you, ' + response.name + '.');
			 });
		   } else {
			 console.log('User cancelled login or did not fully authorize.');
		   }
		 });**/
  } else {
    // the user isn't logged in to Facebook.
  }
 });

 /**
  FB.api('/me', function(response) {
  console.log(response.name);
});**/
  
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
   
   
$(document).ready(function(e) {
   $('#start').click(function(e) {
	   c =60;
	   $('#start').hide();
    	$("#playgame").show('slow');
		interval=setInterval("$('#clock').html(c--)",1000);
});
    $('td').click(function(e) {
		e.currentTarget.innerHTML=(e.currentTarget.innerHTML=='')?getval(e):e.currentTarget.innerHTML;
	});
});
function getval(e){
	bool=bool==true?false:true;
	var r=(bool)?'X':'O'
	e.currentTarget.className=e.currentTarget.className+' '+r;
	//console.log(f.currentTarget.className);
	//console.log(f.currentTarget.parentNode.className);
	check(e,r);
	return r;
}
function check(e,r){
var j = e.currentTarget.className.substr(1,2)-1;
var i = e.currentTarget.parentNode.className.substr(1,2)-1;
array[i][j]=r;
if(i==j&&array[0][0]==array[1][1]&&array[1][1]==array[2][2]&&array[2][2]!=null){
	$('tr.r1 .c1').addClass('done');
	$('tr.r2 .c2').addClass('done');
	$('tr.r3 .c3').addClass('done');
	clearInterval(interval);
	$('#start').show();
	}
else if(array[i][0]==array[i][1]&&array[i][2]==array[i][0]&&array[i][2]!=null)
{
	var t = i+1;
	$('tr.r'+t+' td.c1').addClass('done');
	$('tr.r'+t+' td.c2').addClass('done');
	$('tr.r'+t+' td.c3').addClass('done');
	clearInterval(interval);
	$('#start').show();	
}
else if(array[0][j]==array[1][j]&&array[2][j]==array[0][j]&&array[2][j]!=null)
{
	var t = j+1;
	$('tr.r3 td.c'+t).addClass('done');
	$('tr.r2 td.c'+t).addClass('done');
	$('tr.r1 td.c'+t).addClass('done');
	clearInterval(interval);
	$('#start').show();		
}
else if(i+j==2&&array[0][2]==array[2][0]&&array[2][0]==array[1][1]&&array[1][1]!=null)
{	
	$('tr.r1 td.c3').addClass('done');
	$('tr.r3 td.c1').addClass('done');
	$('tr.r2 td.c2').addClass('done');
	clearInterval(interval);
	$('#start').show();
}
}
