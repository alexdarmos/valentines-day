// Set up variables here
const kitty1    =   {
    id: 'valentine-1',
    name: "Rudy",
    message: " It'd be rude not to say happy Valentine's day!"    
};

const kitty2    =   {
    id: 'valentine-2',
    name: "Pom",
    message: " You da POM! Happy Valentine's Day!"    
};

const kitty3    =   {
    id: 'valentine-3',
    name: "Schmitty",
    message: "We're schmitten with you, our Valentine!"    
};

let valentineArray = [kitty1, kitty2, kitty3];

// Set up function setHTMLValentinesName here
const setHTMLValentinesName = (valentine) => {
    document.getElementById(`${valentine.id}--name`).innerHTML  = valentine.name;
};
// Set up function setHTMLValentinesMessage here
const setHTMLValentinesMessage = (valentine) => {
    document.getElementById(`${valentine.id}--message`).innerHTML  = valentine.message;
};
// Set up function processValentines here
const processValentines = () => {
    for (let i = 0; i < 3; i++)    {
        setHTMLValentinesName(valentineArray[i]);
        setHTMLValentinesMessage(valentineArray[i]);   
    }
};
// Call process Valentines here
processValentines();

/******************************************************************* */
var HeartsBackground = {
    heartHeight: 60,
    heartWidth: 64,
    hearts: [],
    heartImage: 'http://i58.tinypic.com/ntnw5.png',
    maxHearts: 8,
    minScale: 0.4,
    draw: function() {
      this.setCanvasSize();
      this.ctx.clearRect(0, 0, this.w, this.h);
      for (var i = 0; i < this.hearts.length; i++) {
        var heart = this.hearts[i];
        heart.image = new Image();
        heart.image.style.height = heart.height;
        heart.image.src = this.heartImage;
        this.ctx.globalAlpha = heart.opacity;
        this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
      }
      this.move();
    },
    move: function() {
      for(var b = 0; b < this.hearts.length; b++) {
        var heart = this.hearts[b];
        heart.y += heart.ys;
        if(heart.y > this.h) {
          heart.x = Math.random() * this.w;
          heart.y = -1 * this.heartHeight;
        }
      }
    },
    setCanvasSize: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.w = this.canvas.width;
      this.h = this.canvas.height;
    },
    initialize: function() {
      this.canvas = $('#canvas')[0];
  
      if(!this.canvas.getContext)
        return;
  
      this.setCanvasSize();
      this.ctx = this.canvas.getContext('2d');
  
      for(var a = 0; a < this.maxHearts; a++) {
        var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
        this.hearts.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          ys: Math.random() + 1,
          height: scale * this.heartHeight,
          width: scale * this.heartWidth,
          opacity: scale
        });
      }
  
      setInterval($.proxy(this.draw, this), 30);
    }
  };
  
  $(document).ready(function(){
    HeartsBackground.initialize();
  });