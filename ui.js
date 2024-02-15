
let __buttons = [];
let __buttons_index = 0;

function Button(x,y,w,h,text,callback){
  
  this.x = x;
  this.x2 = x+w;
  this.y = y;
  this.y2 = y+h;
  this.width = w;
  this.height = h;
  this.text = text;
  this.colour = "#AFAFAF";
  this.fontSize = 11;
  
  if(!callback){
    callback=function(){};
  }
  
  this.click = function(){
    callback();
  };
  
  this.setFontSize = function(size){
    this.fontSize = size;
    __buttons[this.index].fontSize = size;
  };
  
  this.index = __buttons_index;
  __buttons_index++;
  __buttons.push(this);
  
}

function buttonClicks(){
  for(let i = 0; i < __buttons.length; i++){
    if(
      isBetween(mouseX, __buttons[i].x, __buttons[i].x2)
      &&isBetween(mouseY, __buttons[i].y, __buttons[i].y2)
    ){
      __buttons[i].click();
    }
  }
}

function drawButtons(){
  push();
  stroke("#000");
  strokeWeight(1);
  for(let i = 0; i < __buttons.length; i++){
    fill(__buttons[i].colour);
    rect(
      __buttons[i].x,
      __buttons[i].y,
      __buttons[i].width,
      __buttons[i].height
    );
    fill("#000");
    textAlign(CENTER,CENTER);
    textSize(__buttons[i].fontSize);
    text(
      __buttons[i].text,
      (__buttons[i].x2+__buttons[i].x)/2,
      (__buttons[i].y2+__buttons[i].y)/2
    );
  }
  pop();
}
