//Create variables here
var database;
  var dog
var foodSS
function preload()
{
  
  dogImg= loadImage("images/dogImg.png")
  dogImg1= loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var dbDataRef = database.ref("Food");
  dbDataRef.on("value",readStock,showError);
  
  dog=createSprite(250,350,20,20)
  dog.addImage("ghost",dogImg)
  dog.addImage("host",dogImg1)
  
  dog.scale=0.4
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodSS)

  }
  fill("black")
  textSize(30)
  text("Food: "+foodSS,50,50)
  if(foodSS<=0){
       
    dog.changeImage("host",dogImg1);
  }
}
function readStock(data){
  foodSS = data.val();
}
function writeStock(x){
  
      
      if(x<=0){
        x=0
        
      }
      else{
        x=x-1
      }
  database.ref("/").update({
    Food:x
  })
}



function showError(){
  console.log("no data")
}

