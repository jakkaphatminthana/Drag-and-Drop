const images = new Array(34).fill("").map((_, i) => `/image/${i + 1}.jpg`)
const boxLength = 32;

const data = []

let select = {
    type: "insert",
    url: ""
}

const IMAGE_LSIT = document.getElementById("image-list")
const BOX_CONTAINER = document.getElementById("box-container")

// สร้าง html
const init = () => {

    /// สร้างเป็น list เอาไว้ เพื่อไป interetive
    images.forEach((e, i) => {
        IMAGE_LSIT.innerHTML += `<img class="image-pick" id="pick-${i + 1}" src="${e}" />`
        if (++i % 5 == 0){
            IMAGE_LSIT.innerHTML += `<br>`
        }
    })


    for (let i = 1; i < boxLength+1; i++) {
        BOX_CONTAINER.innerHTML += `<div class="box"> <img src="/image/0.png" /> </div> `
        if (i % 4 == 0){
            BOX_CONTAINER.innerHTML += `<br>`
        }
    }
}

const imageEvent = {
    dragstart(e) {
        select = {
            type: "insert",
            url: event.target.src
        }
    },

}



const run = () => {

    const BOXES = document.querySelectorAll(".box")
    const PICKERS = document.querySelectorAll(".image-pick")


    PICKERS.forEach((e) => {
        e.addEventListener('dragstart', imageEvent.dragstart);
    });

    // e => element
    BOXES.forEach((box, i) => {

        box.addEventListener("dragover", (e) => {

            e.preventDefault()
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
            e.preventDefault();
            if (!select) return

            // จะเก็บ id class ที่เราวางลง

            const [boxImg] = box.children


            if (select.type === "move") {
                data[select.index] = undefined
                BOXES[select.index].children[0].src = "/image/0.png"
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