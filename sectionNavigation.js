//SELECT SECTION
function sectionSelect(secID){
	var sec=document.querySelectorAll(".section");
    for(var i=0;i<sec.length;i++){
    	sec[i].style.display="none";
    }
	if(secID!=0){
	document.getElementById(secID).style.display="block";
	}
}


//INSTRUCTION SECTION
function howTo(howID){
	var ht=document.getElementById('howto');
	if(howID==1){
		ht.style.display="block";
	} else {
		ht.style.display="none";
	}
}
