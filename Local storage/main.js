
let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}
// localStorage.setItem("user_pref", JSON.stringify(userStorage) || "{}")
// console.log(JSON.parse(localStorage.user_pref).cart[1].count)

console.log(localStorage)

if (localStorage.wisdomId == undefined)
    localStorage.wisdomId = 1

let wisdom 


const getData = () => {
    wisdom = []
    if (localStorage.wisdom)
        wisdom = JSON.parse(localStorage.wisdom || "{}")
}

const render = () => {
    $('div').remove()
    if (wisdom.length > 0)
        wisdom.forEach(r => $('body').append(`<div data-id=${r.id}>${r.text}<span class="delete">  X</span></div>`))
}

const uploadData = () => {
    localStorage.removeItem("wisdom")
    localStorage.setItem("wisdom", JSON.stringify(wisdom))
    render()
}

$('#add').click(function () {
    const text = $('input').val()
    wisdom.push({ text: text, id: localStorage.wisdomId++ })
    if (wisdom.length % 2 == 0) {
        uploadData()
    }
})

$('#clear').click(function () {
    localStorage.removeItem("wisdom")
    getData()
    render()
})

$('body').on("click", ".delete", function () {
    const wisdomId = $(this).closest('div').data("id")
    wisdom.forEach((wisd, index) => {
        if (wisd.id == wisdomId)
            wisdom.splice(index, 1)
    })
    uploadData()
})

getData()
render()