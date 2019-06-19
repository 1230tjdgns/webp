var id_input = document.getElementById("user_id")
var pw_input = document.getElementById("user_pw")
var login = document.getElementById("login_button")

var ID
var PW

var login_state = localStorage.setItem(false)

function save_user_info () {
    localStorage.setItem("ls_id", id_input.value)
    localStorage.setItem("ls_pw", pw_input.value)
    localStorage.setItem("ls_state", true)
}

