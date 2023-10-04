const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.modeStat');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : "Light Mode"

  modeStatus.innerText = modeMessage;
}

let imgArray = [
  'https://raw.githubusercontent.com/Woidyla/mywebsite/main/Media/eliot.jpg',
    'https://raw.githubusercontent.com/Woidyla/Project10/main/8205FBB3-97A7-4675-BB26-AD5DAECFF2FE.jpeg',
  
'https://raw.githubusercontent.com/Woidyla/Project10/main/03D5C28F-081D-4E54-94C5-A899EFD9FD6C.jpeg',
  
'https://raw.githubusercontent.com/Woidyla/Project10/main/C53495DA-CDF8-40B0-AB43-866449F8F0DD.jpeg'],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    });
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
