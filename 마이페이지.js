var t = document.getElementById("my_page")
var state = false
function open_my_page () {
    if(state == false)
    {
        state = !state
        t.style.display = "block"
    }
    else
    {
        state = !state
        t.style.display = "none"
    }
}