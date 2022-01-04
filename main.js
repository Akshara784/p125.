function setup(){
    video=createCapture(VIDEO);
    video.size(450,450);
    canvas=createCanvas(450,450);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

nosex=0;
nosey=0;
rightWristx=0;
leftWristx=0;
difference=0;

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
    }
}

function draw(){
    background('#c0ede4');
    document.getElementById("font_size").innerHTML="width and height of font size of the text will be= "+difference+"px";
    textSize(difference);
    fill('#883c8f');
    text('Akshara',50,400);
}

