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
const lis = ["https://discordier.github.io/sam/dist/samjs.min.js"];

for (let s = 0; s < lis.length; s++) {
  import lis[s];
  console.log("Loading Community Playroom Toolkit: "+lis[s]+" Step: "+(s+1)+"/"+lis.length);
} console.log("Loaded!")
