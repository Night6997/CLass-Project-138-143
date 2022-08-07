noseX="";
noseY="";
function preload() {

	world_start = loadSound("world_start.wav");
	jumpSound=loadSound("jump.wav");
	dieSound=loadSound("mariodie.wav");
	kickSound=loadSound("kick.wav");
	coinSound=loadSound("coin.wav");
	gameOverSound=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();



}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.parent('game_console');
	video.size(650,275);

	poseNet=ml5.poseNet(video, modalLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modalLoaded(){

	console.log("Modal loaded");

}

function gotPoses(results){

	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	console.log("Nose x = "+noseX+" ,nose y = "+noseY);

}






