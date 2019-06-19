var next_link = document.getElementById("next_link")
var all_check_b = document.getElementById("all_check_b")
var check1 = document.getElementById("check1")
var check2 = document.getElementById("check2")
function all_check () {
    if(all_check_b.checked == true )
    {
        check1.checked = true
        check2.checked = true
    }
    else
    {
        check1.checked = false
        check2.checked = false
    }
}
all_check_b.addEventListener("click", all_check)