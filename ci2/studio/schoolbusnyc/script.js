//to mute/unmute audio with button > reference https://www.w3schools.com/tags/av_prop_muted.asp

var audio = document.getElementById("audio");

function enableMute() { 
  audio.muted = true;
} 

function disableMute() { 
  audio.muted = false;
}


//to play/pause audio with button > referecne https://www.w3schools.com/tags/av_met_pause.asp

var audio = document.getElementById("audio"); 
var isPlaying = false;

function toggleAudio(){
  if (isPlaying){
    audio.pause();
  } else{
    audio.play();
  }
  isPlaying = !isPlaying;
}

/* 
function seeData() {
  var showcircles = document.getElementById("showcircles");
  if (showcircles.style.display === "none") {
    showcircles.style.display = "block";
  } else {
    showcircles.style.display = "none";
  }
}
*/


fetch('./jsondata/schoolbusdata-may2-may3.json')
.then(response => response.json())
.then(data => {
    // access div element
    const busdata = document.getElementById('busdata');
            
    // loop through  data and add each item to div
    data.forEach(item => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    // setting text content
    h2.textContent = item.Reason;
    p.textContent = '#' + item.Busbreakdown_ID;
    p1.textContent = 'bus no. ' + item.Bus_No;
    p2.textContent = 'route no. ' + item.Route_Number;
    p3.textContent = item.Occurred_On;
    p4.textContent = 'bus ran by ' + item.Bus_Company_Name;
    p5.textContent = 'delayed for ' + item.How_Long_Delayed;

    // add the HTML tags to webpage
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    busdata.appendChild(div);

    });
})
.catch(error => console.error(error));

