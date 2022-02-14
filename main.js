var video="";
objects=["personss"]
function preload(){
    person=loadImage('me.jpg');
    song=loadSound('music.mp3');
}

function setup(){
    canvas=createCanvas(480, 380);
    canvas.position(250, 325);
}

function draw(){
    image(person, 0,0,480,380);
        objectDetector.detect(video, gotResult);
        for(i=1; i<objects.length; i++){
            if(objects[i]=="person"){
            document.getElementById("stat").innerHTML="Status: Baby Detected";
            }       
        else{
        song.play()
        }
    }
 }