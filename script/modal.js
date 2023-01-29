    function _createModal(options) {
    const modal = document.createElement ('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <h3 class="modal-slogan">slogan</h3>
                <p class="modal-description">description</p>
            </div>
            <div class="modal-footer">
                <button class="ok-button">OK</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal);
    return modal;
}

$.modal = function(options) {
    const ANIMATION_SPEED = 500
    const $modal = _createModal(options)
    return {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide') },
                ANIMATION_SPEED)
            },
        destroy(){
            $modal.remove();
        }
    }
}

document.addEventListener ('click', async function(e) {
    const my_vmodal =  document.querySelector ('.vmodal');
    const withModal = e.composedPath().includes(myModal);
    if ( !withModal && my_vmodal.classList.contains('open')) {
        myModal.close();
    }
})


async function information() {
    let title = document.querySelector(".modal-title");
    let slogan = document.querySelector(".modal-slogan");
    let description = document.querySelector(".modal-description");
    let id = myModal.id
    let URL_Api_Id = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    URL_Api_Id += id;
    const resp = await fetch(URL_Api_Id, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
    }});
    const respData = await resp.json();
    title.innerHTML = respData.nameRu
    slogan.innerHTML = respData.slogan
    description.innerHTML = respData.description
}




