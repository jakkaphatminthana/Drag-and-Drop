const BOX = document.querySelectorAll(".box")
const Box_img = document.querySelectorAll(".box img")
const PICTURE = document.querySelectorAll('.box-form')
const Conti = document.querySelectorAll('.container-right')
const GroupBox = document.querySelectorAll('.group-box')

const BoxChingSize = () => {
    BOX.forEach((e) => {
        e.style.margin = "-15px"
    })
    Boxdef()
    GroupBoxDef()
    Box_img_Def()
}

const Boxdef = () => {

    PICTURE.forEach((e) => {
        e.style.height = "82%"
        e.style.width = " 91%"

    })
}

const GroupBoxDef = () => {

    GroupBox.forEach((e) => {
        e.style.marginTop = "-730px";
    })
}

const Box_img_Def = () => {

    Box_img.forEach((e) => {
        e.style.backgroundColor = "transparent";
        e.style.height = "95px";
        e.style.width = "95px"
    })
}


/*
width: 91%;
height: 82%;
*/

/*e.style.backgroundColor = "transparent";*/