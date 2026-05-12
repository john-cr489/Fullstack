function formas (){
const canvas = document.getElementById("formas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#77e7fd';
ctx.fillRect(0,120,30,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#77e7fd';
ctx.fillRect(270,135,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,240,30,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,270,60,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.fillRect(240,270,60,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.fillRect(270,240,30,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';     
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#77e7fd';
ctx.arc(150,300,50,3*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';     
ctx.moveTo(150, 150);  
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.fillRect(105,150,45,45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';     
ctx.moveTo(50, 50);  
ctx.lineTo(150, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';     
ctx.moveTo(250, 50);  
ctx.lineTo(150, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,150,55,3*Math.PI,0*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,150,65,3*Math.PI,1.25*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,150,65,1.75*Math.PI,0*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#77e7fd';
ctx.arc(150,120,15,0*Math.PI,2*Math.PI);
ctx.strokeStyle = 'blue';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.arc(80,210,15,0*Math.PI,2*Math.PI);
ctx.strokeStyle = 'green';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.arc(220,210,15,0*Math.PI,2*Math.PI);
ctx.strokeStyle = 'green';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,300,70,1.5*Math.PI,0*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,300,85,1*Math.PI,1.5*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.closePath();
}

function casa (){
let canvas = document.getElementById("casa");
let ctx = canvas.getContext('2d');

ctx.fillStyle = "aqua"; 
ctx.fillRect(0, 0, 400, 400);

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fillRect(0,300,400,100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(140,160,120,140);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.arc(325,50,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(190,245,25,55);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(154, 240, 255, 1)';
ctx.fillRect(150,180,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(154, 240, 255, 1)';
ctx.fillRect(210,180,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(40,250,15,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(35, 131, 221)';
ctx.arc(0,300,40,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(35, 131, 221)';
ctx.arc(162,387,30,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(35,131,221)';
ctx.fillRect(0,357,162,142);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(35,131,221)';
ctx.fillRect(0,300,40,80);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(45,240,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(350,310,15,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(355,295,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.moveTo(140,160);
ctx.lineTo(200,160-60);
ctx.lineTo(260,160);
ctx.fill();
ctx.closePath();
}

formas();
casa()