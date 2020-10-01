var helloSpeak = {};
helloSpeak.speakWord = "Hello";
(function (window){
  var helloSpeaker= {};
    helloSpeaker.speak=function (name){
      console.log(helloSpeak.speakWord+" "+name);
    }
  window.helloSpeaker = helloSpeaker;
})(window);
