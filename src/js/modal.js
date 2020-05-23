function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('my_modal')
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-overlay" data-close='true'>
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Название товара'}</span>
                    <span class="modal-close" data-close='true'>&times</span> 
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                </div>
            </div>
        </div> 
        `)

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

