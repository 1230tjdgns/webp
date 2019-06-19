var me_check = false
var check_id = false
var check_email = false
function password_check(pw2) {
    var pw1 = document.getElementById("pw1")
    var pw2 = document.getElementById("pw2")
    if(pw1.value != pw2.value )
    {
        alert("비밀번호가 일치하지 않습니다.")
    }
}
function id_check () {
    if(document.getElementById('id').value.length == 0)
    {
        check_id = false
        alert('아이디를 입력해주세요.');
    }
    else if (document.getElementById('id').value.length >= 2)
    {
        check_id = true;
        alert("사용가능한 아이디입니다.");
    }
    else
    {
        check_id = false
        alert('다른 아이디를 사용해주세요.');
    }
}
function email_check () {
    if (document.getElementById('email_front').value.length >= 0 && document.getElementById("email_back").value.length != 0)
    {
        check_email = true;
        alert("사용가능한 이메일입니다.");
    }
    else
    {
        check_email = false
        alert('정확한 이메일을 입력해주세요.');
    }
}