/**
 * @author Sharanya Haridas
 */

console.log ("javascript file loaded");
/*above is a shorthand for creating a div*/


function loadedJSON(freddata) {
	
	console.log(freddata.count);

}



function dataloaded(){
	
	
	
	var myjsDiv = docuent.createElement("div");
	myjsDiv.innerHTML = "This is my js div.";
	var targetdiv = document.getElementById("Unique");
	targetdiv.appendChild(myjsDiv);
	
	var myjQDiv = $("<div>");
	$(myjQDiv).html = "This is my jquery div.";
	
	/*tells jquery grab the div with the id Unique and put my new div inside it. 
	 this happens through a function called append.*/
	
	$("#Unique").append(myjQDiv);

/*first parameter is the name of the file*/
/*the second parameter is the fucntion to call once the file is loaded*/
/*the third parameter is to expect as a string*/

$.get("UEMP270V_data.json",loadedJSON, "json")
console.log("complete");



}


$(document).ready(dataloaded);

console.log("this is executing after document ready");