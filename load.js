document.body.parentNode.innerHTML='\n<head><meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.css" />\n<style>body{font-family: \'Lexend deca\',sans-serif;background-color:black;}.plyr__video-wrapper{ background:black !important;} #videocontainer{height:100vh;width:100vw;display:none;} #notif{ display:none; position:fixed; top:60px; width:300px; left:50%; margin-left:-150px; padding:5px; text-align:center; font-size:large; z-index:11; color:white; background-color:rgb(45, 45, 45); border:1px solid #ffffff42;}.plyr__control--overlaid{border-radius:5px;}.plyr{height:100% !important;}input[type="range"]{min-width: 0;}</style>\n</head><body style="margin: 0px">\n<div id="videocontainer"><video id="player1" playsinline controls></video></div><div id="notif">Notif</div>\n</body>';var src="/loadserver.php?id="+location.href.split("#uid=")[1].split("#")[0];history.replaceState("a","play",src);var vidSource,loaded1=loaded2=loaded3=!1,s1=document.createElement("script");s1.src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.min.js",s1.onload=()=>{loaded1=!0},document.body.appendChild(s1);var s2=document.createElement("script");function loadAdditional(){var e=document.createElement("script");e.src="https://anfruete.github.io/vidplayer/play.js",e.onload=()=>{loaded3=!0},document.body.appendChild(e)}s2.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.0.7/hls.min.js",s2.onload=()=>{loaded2=!0},document.body.appendChild(s2);var loadinterval=setInterval((()=>{if(loaded1&&loaded2&&loadAdditional(),loaded1&&loaded2&&loaded3){clearInterval(loadinterval);var e=new XMLHttpRequest;e.open("GET",src),e.timeout=1e4,e.onload=function(){var o=e.responseText;o.includes("file: '")?(vidSource=o.split("file: '")[1].split("'")[0],startRender()):shownotif("Video expired.<br>Try use other stream",12e4)},e.onerror=function(){shownotif("Video expired.<br>Try use other stream",12e4)},e.send()}}),100);
