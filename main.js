
const PRECEDENCE = ["CAFB", "LSM", "RCL", "NLME", "WAHM", "AFAM", "ANAVETS", "OOSG", "SCSM", "ACSM", "AirCSM"];

function mouseClicked(){
  buttonClicks();
}

function setup(){
  
  createCanvas(800,500);
  
}

let listOfRibbons = [];

let lsmButton = new Button(300,300,75,20,"LSM",function(){
  if(listOfRibbons.indexOf("LSM") === -1){
    listOfRibbons.push("LSM");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("LSM"),1);
  }
});

let oosgButton = new Button(375,300,75,20,"OOSG",function(){
  if(listOfRibbons.indexOf("OOSG") === -1){
    listOfRibbons.push("OOSG");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("OOSG"),1);
  }
});

let scsmButton = new Button(450,300,75,20,"Sea cadet service",function(){
  if(listOfRibbons.indexOf("SCSM") === -1){
    listOfRibbons.push("SCSM");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("SCSM"),1);
  }
}).setFontSize(8.5);

let cafbButton = new Button(525,300,75,20,"CAFB",function(){
  if(listOfRibbons.indexOf("CAFB") === -1){
    listOfRibbons.push("CAFB");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("CAFB"),1);
  }
});

let rclButton = new Button(300,320,75,20,"RCL",function(){
  if(listOfRibbons.indexOf("RCL") === -1){
    listOfRibbons.push("RCL");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("RCL"),1);
  }
});

let anavetsButton = new Button(375,320,75,20,"ANAVETS",function(){
  if(listOfRibbons.indexOf("ANAVETS") === -1){
    listOfRibbons.push("ANAVETS");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("ANAVETS"),1);
  }
});

let nlmeButton = new Button(450,320,75,20,"NLME",function(){
  if(listOfRibbons.indexOf("NLME") === -1){
    listOfRibbons.push("NLME");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("NLME"),1);
  }
});

let afamButton = new Button(525,320,75,20,"AFA",function(){
  if(listOfRibbons.indexOf("AFAM1") === -1){
    listOfRibbons.push("AFAM1");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("AFAM1"),1);
  }
});

let wahmButton = new Button(300,340,75,20,"WAHM",function(){
  if(listOfRibbons.indexOf("WAHM") === -1){
    listOfRibbons.push("WAHM");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("WAHM"),1);
  }
});

let aircsmButton = new Button(375,340,75,20,"Air service",function(){
  if(listOfRibbons.indexOf("AirCSM") === -1){
    listOfRibbons.push("AirCSM");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("AirCSM"),1);
  }
});

let acsmButton = new Button(450,340,75,20,"Army service",function(){
  if(listOfRibbons.indexOf("ACSM") === -1){
    listOfRibbons.push("ACSM");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("ACSM"),1);
  }
});

let afam2Button = new Button(525,340,75,20,"AFA (second)",function(){
  if(listOfRibbons.indexOf("AFAM2") === -1){
    listOfRibbons.push("AFAM2");
  }else{
    listOfRibbons.splice(listOfRibbons.indexOf("AFAM2"),1);
  }
}).setFontSize(9);

function draw(){
  
  background("#919191");
  
  drawRibbonRack(100,220,["CAFB","LSM","RCL","AFAM1","ANAVETS","OOSG","AirCSM"]);
  drawRibbonRack(50,100,organizeRibbons(
    ["LSM", "RCL", "OOSG", "ANAVETS", "WAHM", "CAFB", "AFAM1", "NLME","SCSM"]
  ));
  
  drawRibbonRack(25,375,["CAFB","LSM","RCL","NLME","ANAVETS","OOSG","SCSM"]);
  drawRibbonRack(100,450,["CAFB","LSM","RCL","WAHM","ANAVETS","OOSG","ACSM"]);
  
  drawRibbonRack(500,100,organizeRibbons(listOfRibbons));
  
  drawButtons();
  
  setupRank();
  chevron(700,250);
  
  ARMY_Cpl(700,400);
  AIR_Sgt(700,300);
  SEA_Lc(700,450);
  
}
