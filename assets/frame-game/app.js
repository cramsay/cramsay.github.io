function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

// Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var player;
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function FGPlayer(wrapper, durationElem, ytId) {

 this.playCallback = () => {}
 this.onReady = () => {
   console.log("Video ready now...");
 }
 this.onStateChange = (event) => {
   if (event.data == YT.PlayerState.PLAYING) {
      console.log("Video playing. Running callback")
      durationElem.innerHTML = "(" + showTimestamp(this.player.getDuration()) + ")";
      this.playCallback();
   }
 }
 wrapper.innerHTML = "";
 this.player = new YT.Player(wrapper, {
     height: '400px',
     width: '100%',
     videoId: ytId,
     // Fields from https://developers.google.com/youtube/player_parameters
     playerVars: {
       'playsinline': 1,
       'enablejsapi': 1,
       'disablekb'  : 1,
       'controls'   : 0,
       'iv_load_policy': 3
     },
     events: {
       'onReady': this.onReady,
       'onStateChange': this.onStateChange
       // TODO make these reference the FG player
     }
   });

  this.play  = (callback)   => { this.playCallback = callback; this.player.playVideo(); }
  this.pause = ()   => { this.player.pauseVideo(); }
  this.seek  = (ts) => { this.player.seekTo(ts, true); }

}

var ytid = get("ytid");
if (ytid == undefined) {
  // reload with default
  location.replace(location.href + "?ytid=OmbAJFQWRns");
}

var fgplayer;
function onYouTubePlayerAPIReady() {
    // fgplayer = new FGPlayer('player', document.getElementById('duration'),'n8uiC9VmguM');
    // fgplayer = new FGPlayer('player', document.getElementById('duration'),'OmbAJFQWRns');
    fgplayer = new FGPlayer('player', document.getElementById('duration'),ytid);
}

const countdown = (divCount, inpDuration) => {
  var from = +(inpDuration.value);

  const go = () => {
    divCount.innerHTML = +from;

    const upd  = () => {
      divCount.innerHTML = "Frame!";
      clearInterval(ticker);
      fgplayer.pause();
    };

    const tick = () => {
      var t = +divCount.innerHTML;
      divCount.innerHTML = (t-1).toString();
    }

    var ticker = setInterval(tick, 1000);
    window.setTimeout(upd, from*1000);
  };

  var ts = parseTimestamp(document.getElementById("timestamp").value);
  fgplayer.seek(ts-from);
  fgplayer.play(go);
}

var basicCountdown = () => {
  countdown(
    document.getElementById("status"),
    document.getElementById("delta")
  );
}

const parseTimestamp = s => s.split(':').reduce((acc,x)=>parseInt(x,10)+60*acc,0);
const showTimestamp = s => new Date(s * 1000).toISOString().slice(11, 19);

// After a video load, alert with "Good song. Do we need to hear it? No. Are we good on it? Yes."
