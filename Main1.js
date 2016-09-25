function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      var arr= [];
      var arr1=[];
      var arr2=[];
	    var arr3=[];
      var count=0;
      var count1=0;
     
      FB.api('/me?fields=birthday', function(response1) {
   	console.log(response1.birthday);
    
var b=new Date(response1.birthday);
	   	var b1=new Date(response1.birthday);
	   	
	   	 var c=b1.getDate();
	     b1.setDate(c + 2);
    var e = new Date();
    var da=e.toLocaleDateString();
    var p = e.getFullYear();
    var y1=p;
    var y2=2015;
var count2=0;
	var m1=b.getMonth();
	var d1=b.getDate();
	var m2=b1.getMonth();
	var d2=b1.getDate();
	//var count3=y1-2009;
	      var count3=2011-2004;
	      var count4=0;
     	var i=0;
     	var j=0;
     	
     	for(k=2011; k>2004 ; k--){
     	
   var c=new Date(Date.UTC(k,m1,d1)).getTime() / 1000;
   console.log(c);
   var c1=new Date(Date.UTC(k,m2,d2)).getTime() / 1000;
   console.log(c1);
   console.log("k is            "+k);
     var ur='/me?fields=feed.since( '+ c + ').until(' + c1 + ')';
         FB.api(ur,function(response2){
         console.log("k is    "+k);
          /*if(!response2.feed){
         	arr[count]=0;
         	count++;
         	arr1[count1]=k;
         	console.log("k is "+ k);
         	count1++;
         }*/
       if(response2.feed)
         {
         	
         	
         	console.log(response2.feed);
        	for(j=0 ; j<response2.feed.data.length ; j++){
        	
          		console.log(response2.feed.data[j].story);
          		var f=0;
          	
          		if(response2.feed.data[j].story){
          		var str = response2.feed.data[j].story;
          		
          		var str1=response2.feed.data[j].created_time;
          		var res1=str1.split("-");
          
          		var b=str.includes("wrote");
          		if(b)
          		{
          			
          		 var x=false;	
    			var res = str.split(" ");
    			var v=res.length;
			for(i=0;i<v;i++)
			{
			
				
				if(isNaN(res[i])==false)
				{
					var x=parseInt(res[i]);
					x=x+1;
					arr[count]=x;
					count=count+1;
					arr1[count1]=res1[0];
						count1++;
				  
					f=1;
				x=true;
				}
				
				
				
				
				
			
                	}
          		
               
                	if(x==false)
        		 
                	{
                		arr[count]=2;
                		count++;
                		f=-1;
                		
                			arr1[count1]=res1[0];
						count1++;
                	
                	}
          		 }
          	
          			
          		}
          		
        	}
         
         	
         //
         }
        
        	console.log(arr);
		 if(arr.length==0)
		 {
			 count4++;
			 console.log("count4 and count3 are  "+count4+" "+count3);
		 }
		 if(count4==count3)
		 {
			 alert("No data of posts present for you account ");
		 }
 // console.log("l is "+arr.length);
        	some(arr,arr1);
		 
         });

     	}
         
     });
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //document.getElementById('status').innerHTML = 'Please log into this app.';
      console.log("Please log into this app.");
        
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //document.getElementById('status').innerHTML = 'Please log into Facebook.';
      console.log("Please log into Facebook.");
        
    }
  }
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
   function myFunction() {
    alert("You are logged in!!!  and Press the Click Here! button to see your Birthday posts");
     //alert("Press the Click Here! button to see your Birthday posts");
}

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '974830909219954',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(JSON.stringify(response));
      //document.getElementById('status').innerHTML =  'Thanks for logging in, ' + response.name + '!';
      console.log('Thanks for logging in, ' + response.name + '!');
       
    });
  }
