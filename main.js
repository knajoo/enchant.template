'use strict';

enchant();

var game;

var gs = {height:320,width:320,fps:16};

var path = './images/chara1.png';

var Bear = Class.create(Sprite,{
	initialize:function(x,y){
		Sprite.call(this,32,32);
		this.x = x || 0;
		this.y = y || 0;
		this.image = game.assets[path];
		//this.anime = [0,1,2,1];
		this.frame = [5,6,5,7];
		this.tl
		.moveTo(320 - this.width, 0, 10)
		.moveTo(0,0,10)
		.loop();
		game.currentScene.addChild(this);
	},
		isRange:function() {
				return (
						this.x > 0 && this.x < game.width - this.width
					);
		},
		turn:function() {
			this.scaleX *= -1;
		},
		movedown:function() {
				this.moveBy(0,this.height);
		},
		move:function() {
			//	var vector = 3 * this.scaleX;
				//this.moveBy(vector,0);
					if(Math.floor(this.age / 30) % 2 == 0){
						this.x += 0.5;
						this.y += 0.2
					}else{
						this.x -= 0.5;
						this.y += 0.2
							}
		},
		onenterframe:function() {
			//this.move();
			//if(!this.isRange()){
				//	this.turn();
				//	this.movedown();
		//	}
		}
});


window.onload = function(){
	game = new Core(gs.width,gs.height);
	game.fps = gs.fps;
	game.preload(path);
	
	game.onload = function(){
		new Bear(150,0);

};
game.start();
};
