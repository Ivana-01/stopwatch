window.onload = function() {

var sekunde = '00';
var stotinke = '00';
var pozSekunde = document.getElementById('sekunde');
var pozStotinke = document.getElementById('stotinke');
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset');
var Interval;

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.getElementById('block').style.display = 'flex';
}
buttonStop.onclick = function() {
    clearInterval(Interval);
    document.getElementById('block').style.display = 'none';
}
buttonReset.onclick = function() {
    clearInterval(Interval);
    sekunde = '00';
    stotinke = '00';
    pozSekunde.innerHTML = sekunde;
    pozStotinke.innerHTML = stotinke;
    document.getElementById('block').style.display = 'none';
}

function startTimer () {
    stotinke++;
    if (stotinke <= 9){
        pozStotinke.innerHTML = "0" + stotinke;
    }
    if (stotinke > 9){
        pozStotinke.innerHTML = stotinke;
    }
    if (stotinke > 99){
        console.log("sekunde");
        sekunde++;
        pozSekunde.innerHTML = "0" + sekunde;
        stotinke = 0;
        pozStotinke.innerHTML = "0" + 0;
    }
    if (sekunde > 9) {
        pozSekunde.innerHTML = sekunde;
    }
}
}