//Create variables here
var dog,dogImg
var happyDog,happyDogImg
var database
var foodS= 20
var readStock
var foodStock

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg1.png")
  happyDogImg=loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  
  dog=createSprite(200,200,20,20)
  dog.scale=0.1
  dog.addImage(dogImg)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImg)
  
  
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg)
  
}

  drawSprites();
  //add styles here
  dog.display()  
  
  fill (0)
  stroke ("blue")   
  textSize (20)
  text("NOTE : press UP_ARROW to feed the dog milk!!",20,20)
  textSize(35)
  stroke ("red")
  text("foodStock:"+foodS ,50,120)
if(foodS===0){
  foodS=20

}
}


function readStock(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref("/").update({
food:x
    
  })
  
}
