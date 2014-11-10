'use strict';

enchant();

var game;
var gs = {
		height:320
		,width:320
		,fps:16
}; 

var Bear = Class.create(Sprite,{
	initialize:function(){
		Sprite.call(this,32,32);
			this.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
			this.x = (game.width - this.width) / 2;
			this.y = game.height - this.height - 16;
			this.status = STATUS_WAIT;
			this.frame = [10, 11, 10, 12];
			game.rootScene.addChild(this);
	},
		onenterframe:function(){
			if (game.input.right){
				this.scaleX = 1;
						this.x += 5;
				if (this.x + this.width > game.width){
						this.x = game.width - this.width;
				}

			}
			if (game.input.left){
				this.scaleX = -1;
				this.x -= 5;
			if (this.x + this.width == 0){
					this.x = game.width - this.width;
			}
			}
		}
});

var STATUS_WAIT = 0;
var STATUS_WALK = 1;
var STATUS_JUMP = 2;

window.onload = function(){
		game = new Core(gs.width,gs.height);
		game.fps = gs.fps;
		//画像の読み込み
		game.preload('http://enchantjs.com/assets/images/chara1.gif',
									'http://enchantjs.com/assets/images/map0.gif');
		game.onload = function(){
	//クマの生成
	new Bear();
	/*
	var bear = new Sprite(32, 32);
	bear.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
	bear.x = 160 -16;
	bear.y = 320 - 16 - 32;
	bear.status = STATUS_WAIT;
	bear.anim = [10, 11, 10, 12];
	bear.frame = 10;
	game.rootScene.addChild(bear);
	*/	};
		game.start();

};

