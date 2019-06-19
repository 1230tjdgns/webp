var toggle = false;
function category_open() {
    var m = document.getElementById("cate");
    if(toggle == false) {
        m.style.left = 0;
        toggle = !toggle;
    }
    else {
        m.style.left = -350;
        toggle = !toggle;
    }
    
}
var l_toggle1 = false;
var l_toggle2 = false;
var l_toggle3 = false;
var l_toggle4 = false;
var l_toggle5 = false;
function list_open(n) {
    var c = document.getElementById(n);
    switch(n)
    {
        case "ctgb1":
            if(l_toggle1 == false) {
                c.style.display = "block";
                l_toggle1 = !l_toggle1;
            }
            else {
                c.style.display = "none";
                l_toggle1 = !l_toggle1;
            }
        break;
        case "ctgb2":
            if(l_toggle2 == false) {
                c.style.display = "block";
                l_toggle2 = !l_toggle2;
            }
            else {
                c.style.display = "none";
                l_toggle2 = !l_toggle2;
            }
        break;
        case "ctgb3":
            if(l_toggle3 == false) {
                c.style.display = "block";
                l_toggle3 = !l_toggle3;
            }
            else {
                c.style.display = "none";
                l_toggle3 = !l_toggle3;
            }
        break;
        case "ctgb4":
            if(l_toggle4 == false) {
                c.style.display = "block";
                l_toggle4 = !l_toggle4;
            }
            else {
                c.style.display = "none";
                l_toggle4 = !l_toggle4;
            }
        break;
        case "ctgb5":
            if(l_toggle5 == false) {
                c.style.display = "block";
                l_toggle5 = !l_toggle5;
            }
            else {
                c.style.display = "none";
                l_toggle5 = !l_toggle5;
            }
        break;
    }
    
}