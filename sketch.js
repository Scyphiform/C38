var database;
var background_img;
var gameState = 0;
var playerCount = 0;
var form, game, player;

function setup(){
    database = firebase.database();
    createCanvas(400,400);


}

function draw(){
    background("white");

    drawSprites();
}
