function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('my_modal')
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-overlay" data-close='true'>
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title" data-title>${options.title || 'Название товара'}</span>
                    <span class="modal-close" data-close='true'>&times</span> 
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                <form action="" method="POST">
                    <fieldset>
                        <legend>Сделать заказ</legend>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email">
                    </fieldset>
                    <p><input type="submit" value="Отправить"></p>
                    </form>
                </div>
            </div>
        </div> 
        `)
    //const goods = document.querySelector("#goods")
    //goods.after(modal)
    document.body.appendChild(modal)
    return modal
}

obj.modal = function (options) {
    const modal = _createModal(options)
    let closing = false
    let destroyed = false
    const func_modal = {
        open() {
            if (destroyed) {
                return console.log("Модуль уничтожен")
            }
            !closing && modal.classList.add('open')
        },
        close() {
            closing = true
            modal.classList.remove('open')
            modal.classList.add('hide')
            setTimeout(() => {
                modal.classList.remove('hide')
                closing = false
            }, 200)
        },
        setTitle(html) {
            modal.querySelector('[data-title]').innerHTML = html
        },
        setContent(html) {
            modal.querySelector('[data-content]').innerHTML = html
        },

    }

    const listener = event => {
        if (event.target.dataset.close) {
            func_modal.close();
        }
    }

    modal.addEventListener('click', listener)


    return Object.assign(func_modal, {
        destroy() {
            modal.remove()
            modal.removeEventListener('click', listener)
            destroyed = true
        }
    })


}

