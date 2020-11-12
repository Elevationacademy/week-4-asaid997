// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// }); 

function fetchCall(queryType,queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(element => console.log(`Title: ${element.volumeInfo.title} - Author: ${element.volumeInfo.authors} - isbn: ${element.volumeInfo.industryIdentifiers[0].identifier}`) ) 
            console.log(this.url)
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}
// fetchCall(9782806269171)
// fetchCall(1440633908)
// fetchCall(9781945048470)
// fetchCall(9780307417138)

// fetchCall("isbn", 9789814561778)
// fetchCall("title", "How to Win Friends and Influence People")


let fetch = function (search) {
    $.get(`http://api.giphy.com/v1/gifs/search?q=${search}s&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`, function (gifs) {
        console.log(gifs.data[0].embed_url)
        const embededUrls = gifs.data.slice(0,5).map(x => x.embed_url)
        console.log(embededUrls)
        for(let gif of embededUrls){
            const container = $('<div></div>')
            $('.gif').append(container)
            container.append(`<iframe src="${gif}">`)
            container.append('<button class="add">Add</button>')
        }
    })
}

$('.gif').on("click",".add",function(){
    const gif = $(this).closest('div').find('iframe').attr("src")
    $('.favourites').append(`<iframe src="${gif}">`)
    $('.gif').empty()

})

// fetch()

$('#search').click(function(){
    const search = $('input').val()
    fetch(search)
})

const booksArray = []

function fetchBooks(startingIndex){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&startIndex=${startingIndex}&maxResults=40`,
        success: function (data) {
            const newArray = []
            data.items.forEach(function(element){
                console.log(element.volumeInfo.categories)
                if(element.volumeInfo.categories && element.volumeInfo.categories.includes("Computers"))
                    newArray.push(element.volumeInfo.title)
            }) 
            booksArray.push(...newArray)
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}


const startingIndexs = [0,40,120]
for(let startIndex of startingIndexs){
    fetchBooks(startIndex)
}
setTimeout(function(){console.log(booksArray)},4000)

