var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");


var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;


document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");


var heading=document.querySelector("h1");
heading.style.textAlign="center";
if(randomnumber1>randomnumber2)
{
    heading.innerHTML="Player 1 Wins!!!";
}
else if(randomnumber1<randomnumber2){
    heading.innerHTML="Player 2 Wins!!!";
}
else {
    heading.innerHTML="OMG Draw!!!";
}

function myfunction(){
    location.reload();
}