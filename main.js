var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

 
recognition.onresult = function(event) {

    console.log(event); 
   
    Content = event.results[0][0].transcript.toLowerCase();
      console.log(Content);
      if (Content == "selfie") {
       speak();
       }
   
   }
   
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    
    Webcam.attach(camera);
    var synth = window.speechSynthesis;

   

    setTimeout(function()
    { 
        image_id="selfi1";
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot(); 
        
    }, 5000);

    
    setTimeout(function()
    { 
        image_id="selfi2";
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot(); 
        
    }, 10000);

    
    setTimeout(function()
    { 
        image_id="selfi3";
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot(); 
       
    }, 15000);



}

function take_snapshot()
{
    console.log(image_id);
    Webcam.snap(function(data_uri) {
        if(image_id=="selfi1"){
            document.getElementById("result1").innerHTML = '<img id="image_1" src="'+data_uri+'"/>';

         }

         if(image_id=="selfi2"){
            document.getElementById("result1").innerHTML = '<img id="image_2" src="'+data_uri+'"/>';

         }

         if(image_id=="selfi3"){
            document.getElementById("result1").innerHTML = '<img id="image_3" src="'+data_uri+'"/>';

         }

    });
}
