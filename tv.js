status = "";
img = "";
objects = [];

function preload(){
img = loadImage("tv.jpg");
}

function back(){
window.location = "index.html";
}

function setup(){
canvas = createCanvas(640 , 420)
canvas.center();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(img , 0 , 0 , 640 , 420);
}

function modelLoaded(){
console.log("model is Loaded")
status = true;
objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
if(error){
console.log(error);
}
else{
console.log(results);
objects = results;
}
if(status != ""){
for(i = 0; i<objects.length; i++){
document.getElementById("status").innerHTML = "Status : Object Detected";
fill("#FF0000");
precent = floor(objects[i].confidence*100);
text(objects[i].label+""+precent+"%" , objects[i].x +15 , objects[i].y +15);
noFill();
stroke("#FF0000");
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}
}
}