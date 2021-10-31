Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("snap_shot").innerHTML='<img id="image" src="'+data_uri+'"/>';
            console.log("Test");
        });
    }
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XbdCCvukq/model.json',modal_loaded);
function modal_loaded(){
    console.log("Modal loaded");
}
function check(){
    img=document.getElementById('image');
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("name_of_object").innerHTML=result[0].label;
        document.getElementById("percentage").innerHTML=result[0].confidence.toFixed(3);
    }
}