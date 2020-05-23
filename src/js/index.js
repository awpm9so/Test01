
const modal = obj.modal({
    title: 'Sneakerhead',
    content: `
            <h4>Yeah, boy. Its working</h4>
            `
})

var pictures = document.querySelectorAll(".card")

pictures.forEach(item => {
    item.addEventListener('click', (event) => {
        modal.open()
    })
})

/*
var pictures = document.querySelectorAll(".card-pic")

var c = document.getElementsByClassName("container-fluid")

images = ["src/img/2/1.jpg", "src/img/2/2.jpg", "src/img/2/3.jpg", "src/img/2/4.jpg", "src/img/2/5.jpg"]
var _widht = pictures[0].offsetWidth

var parent = document.querySelectorAll('.img-wrap');

//var child = parent[1].querySelectorAll('img');

//var child = parent[i].querySelectorAll('img');

for (var i = 0; i < parent.length; i++) {
    var child = parent[i].querySelectorAll('img');
    parent[i].addEventListener('mousemove', function () {

        var x = event.offsetX;
        var y = event.offsetY;
        input.value = x + ":" + y;
        var step = _widht / child.length
        if (x >= 0 && x <= step) {
            this.querySelectorAll[0] = "1";
            child[1].style.zIndex = "0";
            child[2].style.zIndex = "0";
            child[3].style.zIndex = "0";
        }
        if (x >= step && x <= 2 * step) {
            child[0].style.zIndex = "0";
            child[1].style.zIndex = "1";
            child[2].style.zIndex = "0";
            child[3].style.zIndex = "0";
        }
        if (x >= 2 * step && x <= 3 * step) {
            child[0].style.zIndex = "0";
            child[1].style.zIndex = "0";
            child[2].style.zIndex = "1";
            child[3].style.zIndex = "0";
        }
        if (x >= 3 * step && x <= 4 * step) {
            child[0].style.zIndex = "0";
            child[1].style.zIndex = "0";
            child[2].style.zIndex = "0";
            child[3].style.zIndex = "1";
        }
    })
}
*/
$(".img-wrap").brazzersCarousel();