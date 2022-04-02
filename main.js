Objects=[];
Status=""


function preload() {
img=loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.center();
    ObjectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
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
        objects=results;
    }
}

function draw() {
    image(img,0,0,640,480);

    if(Status!="") {
        for(i=0;i<objects.length;i++) {
         fill("red");
         textSize(25);
         percent=floor(objects[i].confidence*100);
         text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
         noFill();
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
         document.getElementById("status").innerHTML="Status:Objects Detected";
        }
    }

}

