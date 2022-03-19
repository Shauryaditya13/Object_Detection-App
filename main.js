Status=""


function preload() {
img=loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.center();
    ObjectDetector=ml5.objectDetector("cocossd",modelloaded);
}

function modelloaded() {
    console.log("modelloaded");
    Status=true;
    ObjectDetector.detect(img,GotResult)
}

function GotResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img,0,0,640,480);
    fill("red");
    textSize(25);
    text("dog",50,80);
    noFill();
    rect(45,55,400,420);
    fill("Blue");
    text("cat",305,120);
    noFill();
    rect(300,100,300,350)
}

