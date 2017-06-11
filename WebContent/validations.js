/**
 * validations.js provides restrictions on input values
 * validateForm()  will be called on form submit
 */

function validateForm() {
		//getting the input values by id
	    var a = document.forms["myForm"]["username"].value;
	    var b = document.forms["myForm"]["firstname"].value;
	    var c = document.forms["myForm"]["lastname"].value;
	    var d = document.forms["myForm"]["email"].value;
	    var e = document.forms["myForm"]["mobile"].value;
	    var f = document.forms["myForm"]["country"].value;
	    var g = document.forms["myForm"]["city"].value;
	    var h = document.forms["myForm"]["pincode"].value;
	    //getting the position of '@' if it is less than 1 it alerts
	    var posOfCharacter = d.indexOf("@");
	    //if any input box is empty it will show the red colour accordingly
	    if (a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g=="" || h=="") {
		    if(a==""){
		    	document.getElementById("username").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("username").style.backgroundColor = "white";
		    }
		    if(b==""){
		    	document.getElementById("firstname").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("firstname").style.backgroundColor = "white";
		    }
		    if(c==""){
		    	document.getElementById("lastname").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("lastname").style.backgroundColor = "white";
		    }
		    if(d=="" || posOfCharacter<1){
		    	document.getElementById("email").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("email").style.backgroundColor = "white";
		    }
		    if(e==""){
		    	document.getElementById("mobile").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("mobile").style.backgroundColor = "white";
		    }
		    if(f==""){
		    	document.getElementById("country").style.backgroundColor = "red";
		    }
			else{
				document.getElementById("country").style.backgroundColor = "white";
		    }
		    if(g==""){
		    	document.getElementById("city").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("city").style.backgroundColor = "white";
		    }
		    if(h==""){
		    	document.getElementById("pincode").style.backgroundColor = "red";
		    }
		    else{
		    	document.getElementById("pincode").style.backgroundColor = "white";
		    }
	    }
	    
	    //alert if any field is null
	    if (a == "") {
	        alert("User Name must be filled out");
	        return false;	
	    }
	    if (b == "") {
	    	alert("First Name must be filled out");
	        return false;
	    }
	    if (c == "") {
	        alert("Last Name must be filled out");
	        return false;
	    }
	    if (d == "") {
	        alert("Email must be filled out");
	        return false;
	    }
	    //it will check if @ has been included or not
	    else if(d != "" && posOfCharacter<1){
    		alert("Not a valid e-mail address,@ is required");
	        return false;
	    }
	    if (e == "") {
	        alert("Mobile Number must be filled out");
	        return false;
	    }
	    //check if the given value is numeric maxlength = 10 has been defined in html form
	    else if(e != "" && isNaN(e)){
	    	alert("Not a valid mobile number");
	        return false;
	    }
	    if (f == "") {
	        alert("Country must be filled out");
	        return false;
	    }
	    if (g == "") {
	        alert("City must be filled out");
	        return false;
	    }
	    if (h == "") {
	        alert("Pincode must be filled out");
	        return false;
	    }
	    //check if the given value is numeric maxlength = 6 has been defined in html form
		else if(h != "" && isNaN(h)){
			alert("Not a valid pincode");
	        return false;
	    }
	    //confirm box
	    if (confirm("Press a button!") == true) {
	    	alert("Your details have been submited successfully!!");
	    } else {
	    	alert("Your details have not been submitted");
	    }
}