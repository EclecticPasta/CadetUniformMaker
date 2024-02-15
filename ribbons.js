// x and y is of the bottom corner for 3 ribbons (for ease of use)
function drawRibbonRack(x,y,ribbons){
  
  switch(ribbons.length){
    
    case 1:
      drawRibbon(x+75,y-20,ribbons[0]);
      break;
    case 2:
      drawRibbon(x+37.5,y-20, ribbons[1]);
      drawRibbon(x+112.5,y-20, ribbons[0]);
      break;
    case 3:
      drawRibbon(x,y-20,ribbons[2]);
      drawRibbon(x+75,y-20,ribbons[1]);
      drawRibbon(x+150,y-20,ribbons[0]);
      break;
    case 4:
      drawRibbonRack(x,y-20,ribbons.splice(0,1));
      drawRibbonRack(x,y,ribbons);
      break;
    case 5:
      drawRibbonRack(x,y-20,ribbons.splice(0,2));
      drawRibbonRack(x,y,ribbons);
      break;
    case 6:
      drawRibbonRack(x,y-20,ribbons.splice(0,3));
      drawRibbonRack(x,y,ribbons);
      break;
    case 7:
      drawRibbonRack(x,y-40,ribbons.splice(0,1));
      drawRibbonRack(x,y-20,ribbons.splice(0,3));
      drawRibbonRack(x,y,ribbons);
      break;
    case 8:
      drawRibbonRack(x,y-40,ribbons.splice(0,2));
      drawRibbonRack(x,y-20,ribbons.splice(0,3));
      drawRibbonRack(x,y,ribbons);
      break;
    case 9:
      drawRibbonRack(x,y-40,ribbons.splice(0,3));
      drawRibbonRack(x,y-20,ribbons.splice(0,3));
      drawRibbonRack(x,y,ribbons);
      break;
    
  }
  
}

function organizeRibbons(ribbons){
  
  let ret = ["","","","","","","","",""];
  
  let service = false;
  let afam = false;
  
  for(let i = 0; i < ribbons.length; i++){
    switch(ribbons[i]){
      case "CAFB":
        ret[0] = "CAFB";
        break;
      case "LSM":
        ret[1] = "LSM";
        break;
      case "RCL":
        ret[2] = "RCL";
        break;
      case "NLME":
        ret[3] = "NLME";
        break;
      case "WAHM":
        ret[4] = "WAHM";
        break;
      case "AFAM1":
        if(!afam){
          ret[5] = "AFAM1";
          afam = true;
        }
        break;
      case "AFAM2":
        if(!afam){
          ret[5] = "AFAM2";
          afam = true;
        }
        break;
      case "ANAVETS":
        ret[6] = "ANAVETS";
        break;
      case "OOSG":
        ret[7] = "OOSG";
        break;
      case "AirCSM":
        if(!service){
          ret[8] = "AirCSM";
          service = true;
        }
        break;
      case "ACSM":
        if(!service){
          ret[8] = "ACSM";
          service = true;
        }
        break;
      case "SCSM":
        if(!service){
          ret[8] = "SCSM";
          service = true;
        }
        break;
      default:break;
    }
  }
  
  while(ret.indexOf("") !== -1){
      ret.splice(ret.indexOf(""), 1);
  }
  
  return ret;
  
}

function drawRibbon(x,y,ribbonName){
  switch(ribbonName){
    case "CAFB":
      CAFB(x,y);
      break;
    case "LSM":
      LSM(x,y);
      break;
    case "RCL":
      RCL(x,y);
      break;
    case "NLME":
      NLME(x,y);
      break;
    case "WAHM":
      WAHM(x,y);
      break;
    case "AFAM1":
      AFAM(x,y,1);
      break;
    case "AFAM2":
      AFAM(x,y,2);
      break;
    case "ANAVETS":
      ANAVETS(x,y);
      break;
    case "OOSG":
      OOSG(x,y);
      break;
    case "SCSM":
      SCSM(x,y);
      break;
    case "ACSM":
      ACSM(x,y);
      break;
    case "AirCSM":
      AirCSM(x,y);
      break;
  }
}

function ribbonBorder(x,y){
  stroke("#cccccc");
  strokeWeight(1);
  noFill();
  rect(x,y,75,20);
}

function AirCSM(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The blue parts
  fill("#0000FF");
  rect(x,y,20,20);
  rect(x+55,y,20,20);
  
  // The yellow parts
  fill("#FFFF33");
  rect(x+20,y,10,20);
  rect(x+45,y,10,20);
  
  // The white part
  fill("#FFF");
  rect(x+30,y,15,20);
  
  pop();
}

function ACSM(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The red parts
  fill("#BB0000");
  rect(x,y,10,20);
  rect(x+65,y,10,20);
  
  // The yellow parts
  fill("#FFFF55");
  rect(x+10,y,7,20);
  rect(x+58,y,7,20);
  
  // The green part
  fill("#00AA00");
  rect(x+17,y,41,20);
  
  pop();
}

function SCSM(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The blue parts
  fill("#0000FF");
  rect(x,y,20,20);
  rect(x+55,y,20,20);
  
  // The yellow parts
  fill("#FFFF33");
  rect(x+20,y,10,20);
  rect(x+45,y,10,20);
  
  // The white parts
  fill("#FFF");
  rect(x+30,y,5,20);
  rect(x+40,y,5,20);
  
  // The green part
  fill("#005500");
  rect(x+35,y,5,20);
  
  pop();
}

function OOSG(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The first white part
  fill("#FFF");
  rect(x,y,7,20);
  rect(x+68,y,7,20);
  
  // Big red part
  fill("#FF0000");
  rect(x+7,y,61,20);
  
  pop();
}

function ANAVETS(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The blue parts
  fill("#0000AA");
  rect(x,y,8,20);
  rect(x+24,y,27,20);
  rect(x+67,y,8,20);
  
  // The red parts
  fill("#AA0000");
  rect(x+8,y,8,20);
  rect(x+59,y,8,20);
  
  // The white parts
  fill("#FFF");
  rect(x+16,y,8,20);
  rect(x+51,y,8,20);
  
  pop();
}

function AFAM(x,y,awardings){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The dark blue parts
  fill("#000077");
  rect(x,y,8,20);
  rect(x+16,y,8,20);
  rect(x+51,y,8,20);
  rect(x+67,y,8,20);
  
  // The light blue parts
  fill("#89CFF0");
  rect(x+8,y,8,20);
  rect(x+59,y,8,20);
  
  // The red part
  fill("#AA2222");
  rect(x+24,y,27,20);
  
  if(awardings == 1){
    
  }else{
    
  }
  
  pop();
}

function WAHM(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The red part
  fill("#AA2222");
  rect(x,y,37.5,20);
  
  // The green part
  fill("#37C600");
  rect(x+37.5,y,37.5,20);
  
  pop();
}

function NLME(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The red parts
  fill("#FF0000");
  rect(x,y,25,20);
  rect(x+50,y,25,20);
  
  // The white parts
  fill("#FFF");
  rect(x+25,y,10,20);
  rect(x+40,y,10,20);
  
  // The black part
  fill("#000");
  rect(x+35,y,5,20);
  
  pop();
}

function RCL(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The blue parts
  fill("#3333FF");
  rect(x,y,20,20);
  rect(x+55,y,20,20);
  
  // The yellow part
  fill("#FFFF00");
  rect(x+20,y,35,20);
  
  pop();
}

function LSM(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The red parts
  fill("#DD0000");
  rect(x,y,15,20);
  rect(x+30,y,15,20);
  rect(x+60,y,15,20);
  
  // The green parts
  fill("#00AA00");
  rect(x+15,y,15,20);
  rect(x+45,y,15,20);
  
  pop();
}

function CAFB(x,y){
  push();
  ribbonBorder(x,y);
  noStroke();
  
  // The blue parts
  fill("#0000AA");
  rect(x,y,12,20);
  rect(x+63,y,12,20);
  
  // The red parts
  fill("#EE4444");
  rect(x+12,y,12,20);
  rect(x+51,y,12,20);
  
  // The white part
  fill("#FFF");
  rect(x+24,y,27,20);
  
  pop();
}