var img = [document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3")];
var back = document.getElementById("banner_id")
var back_color = ["#d7ac8a", "#e4d6d3", "#f4c3b4"]
var pos = ["50%", "35%", "65%"];
var z = ["1", "0", "0"];
var w = ["600", "550", "550"];
var h = ["400", "350", "350"];
var c = ["gray", "orange", "orange"];
function slide_next() {
    function swap(v) {
        temp = v[2];
        v[2] = v[1];
        v[1] = v[0];
        v[0] = temp;
    }
    swap(pos);
    swap(z);
    swap(w);
    swap(h);
    swap(c);
    swap(back_color);
    for(var i = 0; i < 3; i++) {
        img[i].style.left = pos[i];
        img[i].style.zIndex = z[i];
        img[i].style.width = w[i];
        img[i].style.height = h[i];
        img[i].style.background = c[i];
        back.style.background = back_color[i];
    }
    
}
function slide_prev() {
    function swap(v) {
        temp = v[0];
        v[0] = v[1];
        v[1] = v[2];
        v[2] = temp;
    }
    swap(pos);
    swap(z);
    swap(w);
    swap(h);
    swap(c);
    swap(back_color);
    for(var i = 0; i < 3; i++) {
        img[i].style.left = pos[i];
        img[i].style.zIndex = z[i];
        img[i].style.width = w[i];
        img[i].style.height = h[i];
        img[i].style.background = c[i];
        back.style.background = back_color[i];
    }
    
}
setInterval(slide_next, 5000);