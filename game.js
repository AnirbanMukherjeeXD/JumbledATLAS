var score=0;
var zz=0;
var ansID;
var i=0;
var timeUpStatus;
var timer,timeLimit=60200;
var countInterval,timeOut;
var countries=countries();

//SHUFFLE A GIVEN ARRAY
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//PERMUTATION
var final=[];
var ctr;
function swap(str,i,j){
	
	var k=str[i];
	str[i]=str[j];
	str[j]=k;
}
function per(str,i,j,a,z){
	if(i==j){
		var strN=str;
		final[ctr++]=(" "+a+strN.join('')+z+" ");
	}else{
		var k;
		for(k=i;k<=j;k++){
			swap(str,i,k);
			per(str,i+1,j,a,z);
			swap(str,i,k);
			
		}
	}
}

function ff(txt){
	final=[];
	ctr=0;
	var strB=txt.split('');
	var a=strB[0],z=strB[strB.length-1];
	var str=strB.slice(1,strB.length-1);
	per(str,0,str.length-1,a,z);
}


//MAIN
function main(){
	var clearID;

	for(clearID=0;clearID<6;clearID++){
		document.getElementById("i"+clearID).style.backgroundImage="url('images/button1.png')";
	}
	var newC=shuffle(countries);
	var j,k=0,id;
	
	k=0;

	ff(newC[i]);
	if(i==countries.length-1){
		i=0;
		
	}else{
		i++;
	}
	var ans=final.shift();
	shuffle(final);
	var options=[];
	ansID=Math.floor(Math.random() * 6);
	options[ansID]=ans;
	document.getElementById("i"+ansID).innerHTML=ans;
	for(j=0;j<6;j++){
		if(j==ansID){
		}else{
		if(final[k]==ans){
			k++;
		}
		options[j]=final[k++];
		id="i"+j;
		document.getElementById(id).innerHTML=options[j];
		
		}
	}
	
		
	
}


//CHECK FOR RIGHT ANSWER
function check(xID){
	xID=parseInt(xID.slice(1,2));
	if(xID==ansID){
		//right
		score+=10;
	}else{
		//wrong
		if(score>0){
			score-=10;
		}
		document.getElementById("i"+xID).style.backgroundImage="url('images/button3.png')";
	}
	document.getElementById("i"+ansID).style.backgroundImage="url('images/button2.png')";
	document.getElementById('gameScore').innerHTML=score;
	document.getElementById('modal').style.display="block";
	setTimeout(function(){main();document.getElementById('modal').style.display="none";},500);
}

//INITIALIZE
function start(){
	score=0;
	timer=Math.floor(timeLimit/1000);
	document.getElementById('timeLeft').innerHTML=timer;
	countInterval=setInterval(function(){
		timer--;
		document.getElementById('timeLeft').innerHTML=timer;
	},1000);
	document.getElementById('gameScore').innerHTML=0;
		sectionSelect('arena');
		main();
	timeOut=setTimeout(function(){
		endGame(1);
	},timeLimit);
}

//END
function endGame(timeUp){
	if(timeUp==1){
		timeUpStatus="Time's Up!<br>";
	} else {
		timeUpStatus="";
		clearTimeout(timeOut);
	}
	sectionSelect("endScreen");
	document.getElementById('scoreResult').innerHTML=timeUpStatus+"Score: "+score;
	timer=7;
	clearInterval(countInterval);
}
