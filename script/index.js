const myModal = $.modal();

async function initial(url) {
    await getMovies(url);
    let myFilms = document.querySelectorAll(".movie");
    let x =  document.querySelector ('.modal-close');
    let btn = document.querySelector(".ok-button");
    for (let i = 0; i < myFilms.length; i++) {
        myFilms[i].addEventListener('click', async event => {
            myModal.id = myFilms[i].id
            await information()
            myModal.open();
        })
    }
     x.addEventListener ('click', function(){
         myModal.close();
     })
     btn.addEventListener('click', function(){
        myModal.close();
    })
}


initial(API_URL)