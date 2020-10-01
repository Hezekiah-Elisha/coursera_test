var speakWord={};
speakWord.message = "Good Bye";
(function(window){
  var byeSpeaker={};
  byeSpeaker.speak=function(name){
    console.log(speakWord.message+" "+name);
    // console.log(name)
  }
  window.byeSpeaker=byeSpeaker;
})(window);
