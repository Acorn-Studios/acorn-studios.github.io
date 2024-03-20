/*/ ALL IN ONE PLAYROOM GODOT IMPORT HEADER PACKAGE /*/

const lis = ["https://unpkg.com/react@18.2.0/umd/react.development.js","https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js","https://unpkg.com/playroomkit/multiplayer.umd.js"];

for (let s = 0; s < lis.length; s++) {
  import lis[s];
  console.log("Loading PLAYROOM API: "+lis[s]+" Step: "+(s+1)+"/"+lis.length);
} console.log("Loaded!")
