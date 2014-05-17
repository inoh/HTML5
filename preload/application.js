/*global document*/
/*global createjs*/
/*global console*/
var app = (function () {

  var initialize = function () {
    var queue = new createjs.LoadQueue();
    queue.addEventListener('complete', function () {
      /* ボタンの表示 */
      for(var i=1;i<=12; i++){
          var button = document.createElement('button'); 
          button.id = i;
          button.textContent = "サウンド" + i;
          button.addEventListener('click', sound, false);
          document.body.appendChild(button);
      }
      document.body.appendChild(document.createTextNode("★"));
      /**
       * 音をならす
       */
      function sound(){
          var s = document.getElementById("sound" + this.id);
          console.log(s);
          s.play();
      }
    });
    queue.addEventListener('progress', function (event) {
      document.getElementById("status").innerHTML = Math.floor(event.loaded * 100);
    });
    queue.addEventListener("error", function (event) {
      console.log(event);
    });
    queue.loadFile({id: "sound1", src: "audio/sound1.wav"});
    queue.loadFile({id: "sound2", src: "audio/sound2.wav"});
    queue.loadFile({id: "sound3", src: "audio/sound3.wav"});
    queue.loadFile({id: "sound4", src: "audio/sound4.wav"});
    queue.loadFile({id: "sound5", src: "audio/sound5.wav"});
    queue.loadFile({id: "sound6", src: "audio/sound6.wav"});
    queue.loadFile({id: "sound7", src: "audio/sound7.wav"});
    queue.loadFile({id: "sound8", src: "audio/sound8.wav"});
    queue.loadFile({id: "sound9", src: "audio/sound9.wav"});
    queue.loadFile({id: "sound10", src: "audio/sound10.wav"});
    queue.loadFile({id: "sound11", src: "audio/sound11.wav"});
    queue.loadFile({id: "sound12", src: "audio/sound12.wav"});
  };

  return {
    initialize: initialize
  };
})();
