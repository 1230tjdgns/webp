var item_theme = document.getElementById("item_theme")
var iname = document.getElementById("item_name")
var price = document.getElementById("price")
var point = document.getElementById("pt")
var icolor = document.getElementById("color")
temp = location.href.split("?")
item = temp[1].split("!")
item_theme.innerHTML = item[1]
var ic = document.getElementById("ct")
var mp = document.getElementById("mprice")
var iimg = document.getElementById("item_des_img")
var img = document.getElementById("item_img")
switch(item[0])
{
    case "FC_C1":
        img.src = "상품이미지/쿠션.jpg"
        mp.innerHTML = ic.value * 35000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 35000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "35,000원"
        point.innerHTML = Math.floor(35000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/쿠션1설명.jpg"
        break;
    case "FC_C2":
        img.src = "상품이미지/쿠션2.jpg"
        mp.innerHTML = ic.value * 40000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 40000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "45,000원"
        point.innerHTML = Math.floor(40000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/쿠션2설명.jpg"
        break;
        case "FC_F1":
            img.src = "상품이미지/쿠션3.jpg"
            mp.innerHTML = ic.value * 43000 + "원"
            ic.addEventListener("change", function() {
                mp.innerHTML = ic.value * 43000 + "원"
            })
            iname.innerHTML = "워터풀 파운데이션"
            price.innerHTML = "43,000원"
            point.innerHTML = Math.floor(43000 * 0.01)+"원"
            add_op = document.createElement("option")
            op_text = document.createTextNode("001호")
            add_op.appendChild(op_text)
            icolor.appendChild(add_op)
            add_op = document.createElement("option")
            op_text = document.createTextNode("002호")
            add_op.appendChild(op_text)
            icolor.appendChild(add_op)
            add_op = document.createElement("option")
            op_text = document.createTextNode("003호")
            add_op.appendChild(op_text)
            icolor.appendChild(add_op)
            iimg.src = "상품이미지/쿠션3설명.jpg"
            break;
    case "FC_F2":
        img.src = "상품이미지/쿠션4.jpg"
        mp.innerHTML = ic.value * 43000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 43000 + "원"
        })
        iname.innerHTML = "매트핏 파운데이션"
        price.innerHTML = "43,000원"
        point.innerHTML = Math.floor(43000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/쿠션4설명.jpg"
        break;
    case "FC_F3":
        img.src = "상품이미지/쿠션5.jpg"
        mp.innerHTML = ic.value * 39000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 39000 + "원"
        })
        iname.innerHTML = "리퀴드 파운데이션"
        price.innerHTML = "39,000원"
        point.innerHTML = Math.floor(39000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/쿠션5설명.jpg"
        break;
    case "FC_F4":
        img.src = "상품이미지/쿠션6.jpg"
        mp.innerHTML = ic.value * 37000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 37000 + "원"
        })
        iname.innerHTML = "멜팅 파운데이션"
        price.innerHTML = "37,000원"
        point.innerHTML = Math.floor(37000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/쿠션6설명.jpg"
        break;
    case "C_C1":
        img.src = "상품이미지/컨실러1.jpg"
        mp.innerHTML = ic.value * 19000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 19000 + "원"
        })
        iname.innerHTML = "풀커버 컨실러"
        price.innerHTML = "19,000원"
        point.innerHTML = Math.floor(19000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/컨실러1설명.jpg"
        break;
    case "C_C2":
        img.src = "상품이미지/컨실러2.jpg"
        mp.innerHTML = ic.value * 28000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 28000 + "원"
        })
        iname.innerHTML = "페이스 튜닝 컨실러"
        price.innerHTML = "28,000원"
        point.innerHTML = Math.floor(28000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/컨실러2설명.jpg"
        break;
    case "C_C3":
        img.src = "상품이미지/컨실러3.jpg"
        mp.innerHTML = ic.value * 25000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 25000 + "원"
        })
        iname.innerHTML = "풀커버 컨실러"
        price.innerHTML = "25,000원"
        point.innerHTML = Math.floor(25000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/컨실러3설명.jpg"
        break;
    case "C_C4":
        img.src = "상품이미지/컨실러4.jpg"
        mp.innerHTML = ic.value * 25000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 25000 + "원"
        })
        iname.innerHTML = "워터풀 컨실러"
        price.innerHTML = "25,000원"
        point.innerHTML = Math.floor(25000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/컨실러3설명.jpg"
        break;
    case "P_P1":
        img.src = "상품이미지/팩트1.jpg"
        mp.innerHTML = ic.value * 33000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 33000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "33,000원"
        point.innerHTML = Math.floor(33000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/팩트1설명.jpg"
        break;
    case "P_P2":
        img.src = "상품이미지/팩트2.jpg"
        mp.innerHTML = ic.value * 35000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 35000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "35,000원"
        point.innerHTML = Math.floor(35000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/팩트2설명.jpg"
        break;
    case "P_P3":
        img.src = "상품이미지/팩트3.jpg"
        mp.innerHTML = ic.value * 40000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 40000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "40,000원"
        point.innerHTML = Math.floor(40000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/팩트3설명.jpg"
        break;
    case "P_P4":
        img.src = "상품이미지/팩트4.jpg"
        mp.innerHTML = ic.value * 35000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 35000 + "원"
        })
        iname.innerHTML = "모이스쳐 쿠션"
        price.innerHTML = "35,000원"
        point.innerHTML = Math.floor(35000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/팩트4설명.jpg"
        break;
    case "E_E1":
        img.src = "상품이미지/아이라이너1.jpg"
        mp.innerHTML = ic.value * 45000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 45000 + "원"
        })
        iname.innerHTML = "펜 아이라이너"
        price.innerHTML = "45,000원"
        point.innerHTML = Math.floor(45000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/아이라이너1설명.jpg"
        break;
    case "E_E2":
        img.src = "상품이미지/아이라이너2.jpg"
        mp.innerHTML = ic.value * 33000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 33000 + "원"
        })
        iname.innerHTML = "글리터 아이라이너"
        price.innerHTML = "33,000원"
        point.innerHTML = Math.floor(33000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/아이라이너2설명.jpg"
        break;
    case "E_E3":
        img.src = "상품이미지/아이라이너3.jpg"
        mp.innerHTML = ic.value * 81000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 81000 + "원"
        })
        iname.innerHTML = "오토젤 아이라이너"
        price.innerHTML = "81,000원"
        point.innerHTML = Math.floor(81000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/아이라이너3설명.jpg"
        break;
    case "E_E4":
        img.src = "상품이미지/아이라이너4.jpg"
        mp.innerHTML = ic.value * 27000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 27000 + "원"
        })
        iname.innerHTML = "젤 아이라이너"
        price.innerHTML = "27,000원"
        point.innerHTML = Math.floor(27000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/아이라이너4설명.jpg"
        break;
    case "E_S1":
        img.src = "상품이미지/섀도우1.jpg"
        mp.innerHTML = ic.value * 45000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 45000 + "원"
        })
        iname.innerHTML = "섀도우"
        price.innerHTML = "45,000원"
        point.innerHTML = Math.floor(45000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("004호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("005호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/섀도우1설명.jpg"
        break;
    case "E_S2":
        img.src = "상품이미지/섀도우2.jpg"
        mp.innerHTML = ic.value * 40000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 40000 + "원"
        })
        iname.innerHTML = "스틱 섀도우"
        price.innerHTML = "40,000원"
        point.innerHTML = Math.floor(40000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/섀도우2설명.jpg"
        break;
    case "E_S3":
        img.src = "상품이미지/섀도우3.jpg"
        mp.innerHTML = ic.value * 90000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 90000 + "원"
        })
        iname.innerHTML = "9구 섀도우 팔레트"
        price.innerHTML = "90,000원"
        point.innerHTML = Math.floor(90000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/섀도우3설명.jpg"
        break;
    case "E_S4":
        img.src = "상품이미지/섀도우4.jpg"
        mp.innerHTML = ic.value * 75000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 75000 + "원"
        })
        iname.innerHTML = "9구 섀도우 팔레트"
        price.innerHTML = "75,000원"
        point.innerHTML = Math.floor(75000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/섀도우4설명.jpg"
        break;
    case "E_S5":
        img.src = "상품이미지/준비1.jpg"

        iimg.src = "상품이미지/준비2.jpg"
        break;
    case "M_M1":
        img.src = "상품이미지/마스카라1.jpg"
        mp.innerHTML = ic.value * 33000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 33000 + "원"
        })
        iname.innerHTML = "볼륨 마스카라"
        price.innerHTML = "33,000원"
        point.innerHTML = Math.floor(33000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/마스카라1설명.jpg"
        break;
    case "M_M2":
        img.src = "상품이미지/마스카라2.jpg"
        mp.innerHTML = ic.value * 40000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 40000 + "원"
        })
        iname.innerHTML = "롱 마스카라"
        price.innerHTML = "40,000원"
        point.innerHTML = Math.floor(40000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("003호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/마스카라2설명.jpg"
        break;
    case "M_M3":
        img.src = "상품이미지/마스카라3.jpg"
        mp.innerHTML = ic.value * 35000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 35000 + "원"
        })
        iname.innerHTML = "슈퍼볼륨 마스카라"
        price.innerHTML = "35,000원"
        point.innerHTML = Math.floor(35000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/마스카라3설명.jpg"
        break;
    case "M_M4":
        img.src = "상품이미지/마스카라4.jpg"
        mp.innerHTML = ic.value * 50000 + "원"
        ic.addEventListener("change", function() {
            mp.innerHTML = ic.value * 50000 + "원"
        })
        iname.innerHTML = "스키니 마스카라"
        price.innerHTML = "50,000원"
        point.innerHTML = Math.floor(50000 * 0.01)+"원"
        add_op = document.createElement("option")
        op_text = document.createTextNode("001호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        add_op = document.createElement("option")
        op_text = document.createTextNode("002호")
        add_op.appendChild(op_text)
        icolor.appendChild(add_op)
        iimg.src = "상품이미지/마스카라4설명.jpg"
        break;
}