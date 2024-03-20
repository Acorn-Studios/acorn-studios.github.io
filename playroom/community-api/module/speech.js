console.log("Loading Voice API...")
if ('speechSynthesis' in window) {
  console.log("speechSynthesis loaded...");
} else {
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}

function speak_this(text,voi=3,v=1,r=1,p=1,l='en'){
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[voi]; 
    msg.volume = v; // From 0 to 1
    msg.rate = r; // From 0.1 to 10
    msg.pitch = p; // From 0 to 2
    msg.text = text;
    msg.lang = l;
    speechSynthesis.speak(msg);
}
console.log("Loaded!")
