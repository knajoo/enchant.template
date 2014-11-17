'use strict';

enchant();

var game;
var gs = {
		height:320
		,width:320
		,fps:30
}; 

var Timer = Class.create(Label,{
  initialize:function(sec){
  		Label.call(this);
		this.prefix = "残り時間: ";
		this.timer = sec;
		this.text = this.prefix + this.timer;
		game.currentScene.addChild(this);
  },
	countDown:function(){

	  if (this.age % game.fps === 0){
	  		this.timer--;
	  }
	},
	update:function(){
		this.text = this.prefix + this.timer;
	},
	onenterframe:function(){
		this.countDown();
		this.update();
	}
});

var Score = Class.create(Label,{
		initialize:function(){
			Label.call(this);
			this.y = 20;
			this.text = this.prefix = '得点 :';
			game.currentScene.addChild(this);
		},
	update:function(){
		this.text = this.prefix + game.score;
	},
	onenterframe:function(){
		this.update();
	}
});

window.onload = function(){
		game = new Core(gs.width,gs.height);
		game.fps = gs.fps;
		game.score = 0;
		game.onload = function(){
				new Timer(30);
				new Score();
};
		game.currentScene.on('touchstart', function(){
		game.score += 10;
		});
		game.start();

};
