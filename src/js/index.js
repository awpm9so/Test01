
const modal = obj.modal({})

//отрисовываем карточки товаров
function render() {
    var str = ''
    const html = goods.map(toHTML).join("")
    document.querySelector("#goods").innerHTML = html
}

const toHTML = (product) => `
<div class="p-3 col-md-4" >
<div class="card" data-id='${product.id}'>
    <div class="img-wrap" >
        ${CardHtml(product)}
    </div>
        <h5 class="card-name">${product.title}</h5>
        <p class="card-price">${product.price}</p>
        <div class="mini-desc">
            ${product.miniDesc}
            <button class="card-button"><img class="pic-basket" src="src/img/basket.svg" alt="Корзина"> В
            корзину</button>
    </div>
        </div>
</div >
    `

render()

//обрабатываем клик по карточке
var cards = document.querySelectorAll(".card")
cards.forEach(item => {
    item.addEventListener('click', (event) => {

        //игнорируем нажатие на унопку "В корзину"
        if (event.target.className === "card-button") return

        //получем id товара, по которому кликнули
        const id = +event.currentTarget.dataset.id
        //по id находим этот товар в общем списке товаров
        const product = goods.find(p => p.id === id)
        //устанавливаем заголовок для модального окна
        modal.setTitle(`<h2>${product.title}</h2>`)

        //html для слайдера картинок
        var pictures_html = ''
        var dots_html = ''
        for (var i = 0; i < product.pictures.length; i++) {
            if (i == 0) {
                pictures_html += '<div class="item" style="display:block"> <img src="src/' + product.pictures[i] + '" alt="' + product.title + '" class="card-pic"></img> </div>'
                dots_html += `<span class="slider-dots_item active_dot" onclick="current(${i + 1})"></span>`
            }
            else {
                pictures_html += '<div class="item" style="display:none"> <img src="src/' + product.pictures[i] + '" alt="' + product.title + '" class="card-pic"></img> </div>'
                dots_html += `<span class="slider-dots_item" onclick="current(${i + 1})"></span>`
            }
        }
        //устанавливаем контент(тело) модального окна
        modal.setContent(`        
        <div class="slider">
                ${pictures_html}
                <a class="prev" onclick="prev()">&#10094;</a>
                <a class="next" onclick="next()">&#10095;</a>
        </div>
        <br>
        <div class="slider-dots">
                ${dots_html}
        </div>
        <p> <span class="mini-desc-span">Цена: </span>${product.price}</p>
        <p>${product.miniDesc}</p>
        <p>${product.description}</p>
               
            `)
        //открываем модальное окно
        modal.open()
    })
})

//отрисовка карточек товара
function CardHtml(product) {
    var pictures_html = ''
    for (var i = 0; i < product.pictures.length; i++) {
        if (i == 0) {
            pictures_html += '<div> <img src="src/' + product.pictures[i] + '" alt="' + product.title + '" ></img> </div>'

        }
        else {
            pictures_html += '<div> <img src="src/' + product.pictures[i] + '" alt="' + product.title + '" ></img> </div>'

        }
    }
    return pictures_html
}


//карусель картинок при движении мыши
$(".img-wrap").brazzersCarousel();
