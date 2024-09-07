let index = 0;
let text = "امیدرضا شهبازی";

function writeText() {
    document.getElementById('name').innerText = text.slice(0, index);
    index++;
    if(index>text.length){
        index =0;
    }
};

setInterval(writeText,150)