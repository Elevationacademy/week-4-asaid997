var classData = {
    classmates: [
        { name: "That on gal", description: "Always has the ansswer" },
        { name: "The weird dude", description: "Quick with a smile" },
        { name: "Taylor", description: "Just Taylor" }
    ]
}

let source = $('#classmates-template').html();
let template = Handlebars.compile(source);
let newHTML = template(classData);

// append our new html to the page
$('#container').append(newHTML);


const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: false },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: false },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
    ]
};

source = $('#menu-template').html();
template = Handlebars.compile(source);
newHTML = template(menuData);

// append our new html to the page
$('#container').append(newHTML);
