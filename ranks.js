
const ARMY_RANKS = ["CWO","MWO","WO","Sgt","MCpl","Cpl","Pvt","Cdt"];
const AIR_RANKS = ["WO1","WO2","FSgt","Sgt","FCpl","Cpl","LAC","Cdt"];
const SEA_RANKS = ["CPO1","CPO2","PO1","PO2","MC","LC","AC","Cdt"];

function drawRank(x,y,rank){
  
}

function chevron(x,y,size){
  line(x,y,x+21,y+20);
  line(x+19,y+20,x+40,y);
}

function setupRank(){
  strokeWeight(5);
  strokeCap(SQUARE);
}

function ARMY_Cpl(x,y){
  push();
  
  setupRank();
  stroke("#EEE170");
  chevron(x,y,20);
  chevron(x,y+10,20);
  
  pop();
}

function AIR_Sgt(x,y){
  push();
  
  setupRank();
  stroke("#C3D4DF");
  chevron(x,y,20);
  chevron(x,y+10,20);
  chevron(x,y+20,20);
  
  pop();
}

function SEA_Lc(x,y){
  push();
  
  setupRank();
  stroke("#FFF");
  chevron(x,y,20);
  chevron(x,y+10,20);
  
  pop();
}
