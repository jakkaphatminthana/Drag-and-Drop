const images = new Array(36).fill("").map((_, i) => `image/${i + 1}.jpg`)
const boxLength = 28;

const data = []

let select = {
    type: "insert",
    url: "",
    categroy:""
}

const IMAGE_LSIT = document.getElementById("image-list")
const BOX_CONTAINER = document.getElementById("box-container")

// สร้าง html
const init = () => {

    /// สร้างเป็น list เอาไว้ เพื่อไป interetive
    images.forEach((e, i) => {
        IMAGE_LSIT.innerHTML += `<img class="image-pick" id="pick-${i + 1}" src="${e}" />`
        if (++i % 4 == 0) {
            IMAGE_LSIT.innerHTML += `<br>`
        }
    })


    for (let i = 1; i < boxLength + 1; i++) {
        BOX_CONTAINER.innerHTML += `<div class="box"> <img src="image/0.png" /> </div> `
        if (i % 4 == 0) {
            BOX_CONTAINER.innerHTML += `<br>`
        }
    }
}

const imageEvent = {
    dragstart(e) {
        select = {
            type: "insert",
            url: event.target.src,
            categroy:"normal"
        }
        console.log(select);
    },

}



const run = () => {

    const BOXES = document.querySelectorAll(".box")
    const PICKERS = document.querySelectorAll(".image-pick")
    let change = [];


    PICKERS.forEach((e) => {
        e.addEventListener('dragstart', imageEvent.dragstart);
    });

    // e => element
    BOXES.forEach((box, i) => {

        box.addEventListener("dragover", (e) => {
            // ใช้ทำเส้นปะเมื่อลากผ่าน
            box.setAttribute("style", "border: 2px dashed white");
            e.preventDefault();
            change.push(i);
            // ทำการลบค่าซ้ำใน array
            change = Array.from(new Set(change));
        })

        box.addEventListener("dragstart", (e) => {
            if (data[i]) {
                select = {
                    index: i,
                    type: "move",
                    url: data[i]
                }
            }

        })

        box.addEventListener("drop", (e) => {
            for (let a = 0; a < change.length; a++) {
                // นำเส้นปะที่เคยเลื่อนผ่านออกทั้งหมด
                BOXES[change[a]].setAttribute("style", "border: none");
            }
            e.preventDefault();
            if (!select) return

            // จะเก็บ id class ที่เราวางลง

            const [boxImg] = box.children


            if (select.type === "move") {
                data[select.index] = undefined
                BOXES[select.index].children[0].src = "image/0.png"
            }

            data[i] = select.url

            boxImg.src = select.url
            select = null

        })
    })
}

const main = () => {
    init()
    run()
}
main()


function getSelectValue() {                                         // ตัวรับ Select Value
    var selectValue = document.getElementById("Size").value;
    console.log("Size = ",selectValue);
}
getSelectValue();