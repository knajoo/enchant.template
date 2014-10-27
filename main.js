'use strict';

enchant();

var game;
var gs = {
		height:320
		,width:320
		,fps:30
}; 

window.onload = function(){
		game = new Core(gs.width,gs.height);
/*上記のgs.width,gs.heightの部分を３２０等のように数値で記入すると
何を指定しているかわからないので、上記のように変数を宣言して記述する。*/
		game.fps = gs.fps;
		game.onload = function(){};
		game.start();

};
