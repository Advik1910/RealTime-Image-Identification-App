function preload() {

}
function setup(){
    canvas = createCanvas(220 , 220);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json" , modeLoaded);
}
function modeLoaded(){
    console.log("Model Loaded!");
}
function draw(){
    image( video , 0 , 0 , 300 , 300);
    classifier.classify(video , gotResult);
}
function gotResult(results , error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("Object_name").innerHTML = results[0].label;
        document.getElementById("Accuracy_number").innerHTML = results[0].confidence.toFixed(3);
    }
}