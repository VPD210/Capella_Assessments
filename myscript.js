		function hidesubmit() {
			
			document.getElementById("submitbutton").style.visibility = "hidden";
	}
	
	*//The hidesubmit function hides the submit button until the user inputs a number in the volunteer field that was created.  Once the number is entered and the enter key
	*//is pressed the submit button reappears for the user to submit the page.
	
		function enter(e){
			
			if(e.keyCode === 13){
			
				create_form();
			}
	}
		
		*//The enter function is used so that when the user inputs the number of volunteers, fields are created that correspond to the number inputed.
		*//These fields allow the user to input recipients names to be placed in the invite.
			
	function create_form() {
		
		var numvol = document.getElementById("people").value;
			for (i=0; i<numvol; i++){
			
	
		var vlable = document.createElement("label");
			vlable.innerHTML = "Recipient: " + (i+1);
		
		var vinput = document.createElement("input");
			vinput.setAttribute("id","volname"+i);
			vinput.type = "text";
		
		document.getElementById("volcont").appendChild(vlable);
			volcont.appendChild(document.createElement("br"));
		document.getElementById("volcont").appendChild(vinput);
			volcont.appendChild(document.createElement("br"));
			
		document.getElementById("submitbutton").style.visibility = "visible";
	
	}
}
	*//The create form function creates the fields of recipients in an array that correspond to the number of volunteers added by the user.  A for loop is then used to create
	*//the number of fields that appear at the bottom of the page.  Another function is used that when the user enters the number of volunteers and hits enter the submit button 
	*//becomes visible so that the user can submit the form when all fields are entered.
	
var recname = [];
	
	function invitation() {
		
		var numvol = document.getElementById("people").value;
		
		for (i=0; i<numvol; i++){
			recname[i] = document.getElementById("volname"+i).value;
	}

		for (i=0; i<numvol; i++){
			var invite = document.createElement("p");
				invite.innerHTML = "Hello " + recname[i] + "<br/> <br/> You have been invited to volunteer for an event held by " + document.getElementById("orgname").value 
				+ " on " + document.getElementById("date").value + ". Please come to the following website: " + document.getElementById("web").value
				+ " to sign up as a volunteer.<br/><br/> Thanks! <br/><br/>" + document.getElementById("hname").value + "<hr/>";
			
			
			document.getElementById("placeholderContent").appendChild(invite);
			
	*//The function invitation was created to input the information for the invitation that will appear after the user presses the submit button.
	*//Another for loop was created so that the invitations will autopopulate with the organization name, event date, website, and host name for the number 
	*//of recipients receiving the invitation.  
			
	}
}