var bear = Class.create(Sprite,{
	initialize:function(x,y){
		Sprite.call(this,1,1);
		this.image = game.assets['./images/chara0.png'];
		this.x = x;
		this.y = y;
		this.frame = 1;
		game.rootScene.addChild(this);
	
	}
});


game.onload = function(){
		new Bear();

}
game.start();
