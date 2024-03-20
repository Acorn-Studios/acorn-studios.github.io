/*/
This is a community-created API that works with Playroom. 
Creator: BigS [[hot]]
Contributors:
-
This is intended to work with Godot ONLY. We might eventually port it to other engines, just Godot is what I use.

Copyright 2024 Acorn Studios

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
/*/

//
//imp depens.
const lis = ["https://discordier.github.io/sam/dist/samjs.min.js","https://acorn-studios.github.io/playroom/community-api/module/speech.js"];

for (let s = 0; s < lis.length; s++) {
  import(lis[s]);
  console.log("Loading Community Playroom Toolkit: "+lis[s]+" Step: "+(s+1)+"/"+lis.length);
} console.log("Loaded!");

//

function sam_speak(tosay,pitch_=64,speed_=72,mouth_=128,throat_=128){
  opts = {
    pitch: pitch_,
    speed: speed_,
    mouth: mouth_,
    throat: throat_
   };
   var s = new SamJs(opts);
   s.speak(tosay.toString()); 
}

//

function import_plyrm_logo(){
   import("https://acorn-studios.github.io/playroom/community-api/playroom-logo-v1.js");
}

//

console.log("Loading Voice API...")
if ('speechSynthesis' in window) {
  console.log("speechSynthesis loaded...");} else {
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");}

function speak_this(text,voi=3,v=1,r=1,p=1,l='en'){var msg = new SpeechSynthesisUtterance();var voices = window.speechSynthesis.getVoices();msg.voice = voices[voi];msg.volume = v;msg.rate = r;msg.pitch = p;msg.text = text;msg.lang = l;speechSynthesis.speak(msg);}console.log("Loaded!");

function tts_speak(text,voi=3,v=1,r=1,p=1,l='en'){
   speak_this(text,voi,v,r,p,l)
}
