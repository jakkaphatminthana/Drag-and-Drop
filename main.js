const boxLength = 28;

const data = []

let select = {
    type: "insert",
    url: "",
    categroy: ""
}

const IMAGE_LSIT = document.getElementById("image-list")
const BOX_CONTAINER = document.getElementById("box-container")
const SELECT_CATE = document.querySelector("#select-cate")
const SEARCH_BTN = document.querySelector("#search-btn")

const renderImages = (imgs = []) => {
    IMAGE_LSIT.innerHTML = "";
    imgs.forEach(e => {
        IMAGE_LSIT.innerHTML += `<img class ="image-pick" id="pick-${e.id}" src="${e.image}" />`
    })
}

const rerenderImagePicker = () => setTimeout(() => {
        run()
    }, 100)


// สร้าง html
const init = () => {
    for (let i = 1; i < boxLength + 1; i++) {
        BOX_CONTAINER.innerHTML += `<div class="box"> <img src="image/0.png" /> </div> `
        if (i % 4 == 0) {
            BOX_CONTAINER.innerHTML += `<br>`
        }
    }



    let selectCate
    /// สร้างเป็น list เอาไว้ เพื่อไป interetive
    renderImages(plants)
    SELECT_CATE.addEventListener("change", e => {
        document.querySelector("#search").value = ""
        selectCate = e.target.value
        renderImages(
            selectCate
                ? plants.filter(p => p.cate_id == selectCate)
                : plants
        )
        rerenderImagePicker()
    })

    SEARCH_BTN.addEventListener("click", () => {
        const searchText = document.querySelector("#search").value
        if (!searchText) return

        const regex = new RegExp(`${searchText}`, "gi")

        const filtered = selectCate
            ? plants.filter(e => e.name.match(regex) && e.cate_id == selectCate)
            : plants.filter(e => e.name.match(regex))

        renderImages(filtered)
        rerenderImagePicker()
    })


}

const imageEvent = {
    dragstart(e) {
        select = {
            type: "insert",
            url: event.target.src,
            categroy: "normal"
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
    console.log("Size = ", selectValue);
}
getSelectValue();