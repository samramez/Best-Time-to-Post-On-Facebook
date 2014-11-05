window.fbAsyncInit = function() {
  FB.init({
    appId      : '480740078725724',
    channelUrl : 'http://localhost/facebok/channel.php',
      status     : true,
      oauth      : true,
      cookie     : true,
      frictionlessRequests : true,
    xfbml      : true,
    version    : 'v2.0'
  });

  FB.getLoginStatus(function(response) {
    
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
      var oauth_url = 'https://www.facebook.com/dialog/oauth/';
      oauth_url += '?client_id=480740078725724';
      oauth_url += '&redirect_uri=' + 'https://localhost/facebook/';
      oauth_url += '&scope=read_stream,user_photos,friends_likes';
      // window.top.location = oauth_url;

      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken

      FB.api('/me', 'get', function(x){
  		  console.log(x);
  		  document.getElementById('welcome').innerHTML = "Hello " + x.first_name + x.last_name; 
  		  $('#welcome').html("Hello there " + x.first_name);

		  });




      FB.api('/me/statuses', 'get', function(x){
        
        //determine if today is either weekend or weekday
        var d = new Date();
        // alert(d.toString());
        var today = d.getDay();
        var isWeekend = false;
        if(today == 6 || today == 0){
          isWeekend = true;
          $('#date').html("Today is a WEEKEND");
        }else{
          $('#date').html("Today is a WEEKDAY");
        }
        
        

        //making an array to store the hours:
        var posthours = new Array(24);
        for (var j=0; j<posthours.length;j++){
          posthours[j] = 0; //assigining 0 to every spot in the array so I can add number to it later
        }

        //making an array to store the hours:
        var posthoursWeekend = new Array(24);
        for (var j=0; j<posthoursWeekend.length;j++){
          posthoursWeekend[j] = 0; //assigining 0 to every spot in the array so I can add number to it later
        }



        //Test for proof of priniting
        // console.log("length of data is :" + x.data.length);
        // for ( var i=0; i<x.data.length-1; i++){

        //   console.log(x.data[i].updated_time);
        //   console.log(x.data[i].likes.data.length);
        // }

        var isWeekday = true;

        for ( var i=0; i<x.data.length-1; i++){
          // x.data[i].likes.data.length;



          var posttime = x.data[i].updated_time
          posttime = posttime.substring(11,13);
          posttime = posttime - 4;
          if (posttime < 0){
            posttime = posttime + 24; 
          } //I'm converting facebook time to my own time zone which is Eastern time
          
          //number of likes for the post
          var likesCount = x.data[i].likes.data.length;

          //check if the date is weekend
          var myDate = new Date();
          myDate.setFullYear(x.data[i].updated_time.substring(0,4) );
          myDate.setMonth(x.data[i].updated_time.substring(5,7) );
          myDate.setDate(x.data[i].updated_time.substring(8,10) );


          //adding # of likes to posthours array
          if(myDate.getDay() == 6 || myDate.getDay() == 0){
            isWeekday = false;
            posthoursWeekend[posttime] += likesCount;

          }else{
            isWeekday = true;
            posthours[posttime] += likesCount;
          }

        }

        //finding the best time to post on Weekdays:
        var tmp = 0;
        var max = 0;
        for (var i = 0; i < posthours.length; i++) {
          if (posthours[i] > tmp){
            tmp = posthours[i];
            max = i; 
          }
        };

        $('#weekdays').html( "<h3>Weekdays like hours : <h3>");
          for(var m=0; m<24 ; m++){
            $('#weekdays').append("<p>" + m + "  O-clock --> " +  posthours[m] + " likes");
          }
          $('#weekdays').append("<h2> best time to post on weekdays is at " + max + " O-clock </h2>");




        tmp = 0;
        max = 0;
        for (var i = 0; i < posthoursWeekend.length; i++) {
          if (posthoursWeekend[i] > tmp){
            tmp = posthoursWeekend[i];
            max = i; 
          }
        };

        $('#weekends').html( "<h3>Weekends like hours : <h3>");
        for(var n=0; n<24 ; n++){
          $('#weekends').append("<p>" + n + "  O-clock --> " +  posthoursWeekend[n] + " likes");
        };
        $('#weekends').append("<h2> best time to post on Weekends is at " + max + " O-clock </h2>");

          

        
        // result = posthours.toString();
        // console.log("weekdays" + result);

        // result2 = posthoursWeekend.toString();
        // console.log("weekend" + result2);





        // if (x.data[0].likes.data.length === null) {
        //   alert("true");
        // } else{
        //   alert("false");
        // }
        // x.data[1].likes.data.length

      });
      
   	  //$(".loggedin").css("display","block");
	  // $(".loggedout").css("display","none");
      // alert("You are logged in!");
      



    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app

      var oauth_url = 'https://www.facebook.com/dialog/oauth/';
  		oauth_url += '?client_id=480740078725724';
  		oauth_url += '&redirect_uri=' + 'https://localhost/facebook/';
  		oauth_url += '&scope=read_stream,posts,user_photos,friends_likes';
  		window.top.location = oauth_url;
      alert("you are logged in but not authorized");
      } 

    else {
      // the user isn't logged in to Facebook.
      alert("You are not logged in to Facebook");
      window.top.location = 'https://www.facebook.com/index.php';

    } // response.status
  });//getLoginStatus
}; //fbAsyncInit

// function goLogIn(){
// 	FB.login(function(response) {
// 	   // handle the response
// 	   $(".loggedin").css("display","block");
// 	   $(".loggedout").css("display","none");
// 	 }, {scope: 'email,user_likes'});
// };//end of goLogIn

// function foo(){
//   var uid = response.authResponse.userID;
//   var accessToken = response.authResponse.accessToken
//   FB.api( '/me/feed', function(x){
//     // console.log(x);
//     alert(x.data[1].likes.data.length);
//     // for(var i=0; i< x.feed.data.length; i++ ){

//     // }
//   })

// };


(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



