const BOX = document.querySelectorAll(".box")
const Box_img = document.querySelectorAll(".box img")
const PICTURE = document.querySelectorAll('.box-form')
const GroupBox = document.querySelectorAll('.group-box')

const BoxChingSize = () => {
    
    if(data.length !== 28) return alert("ยังออกเเบบยังไม่เสร็จ") 
    BOX.forEach((e) => {
        e.style.marginLeft = "-20px"
        e.style.marginRight = "-20px"
        e.style.marginTop = "-25px"
        e.style.marginBottom = "-25px"
    })
    Boxdef()
    GroupBoxDef()
    Box_img_Def()
    
}

const Boxdef = () => {

    PICTURE.forEach((e) => {
        e.style.height = "75%"
        e.style.width = " 70%"

    })
}

const GroupBoxDef = () => {
    GroupBox.forEach((e) => {
        e.style.marginTop = "-660px";
    })
}

const Box_img_Def = () => {
    Box_img.forEach((e) => {
        e.style.backgroundColor = "transparent";
        e.style.height = "95px";
        e.style.width = "95px"
    })
}
