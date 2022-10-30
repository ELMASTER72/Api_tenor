const main = document.getElementById("Cards");
const URL = "https://tenor.googleapis.com/v2/featured?key=AIzaSyBpKWUrsWIA2nlZr_lILT6wgpOuu596ITQ&limit=50"
const search =document.getElementById("browse");

window.addEventListener("DOMContentLoaded",card);
search.addEventListener('keyup',searchs);

function searchs (event) {
    let apikey = "AIzaSyBpKWUrsWIA2nlZr_lILT6wgpOuu596ITQ";
    let search_term = event.target.value;
    let search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" + apikey;
    main.innerHTML = '';
    fetch(search_url)
    .then(Response => Response.json())
    .then(Response => Response.results.forEach(element => {
        console.log(element);
        cardcreate(element);
    }))
}



function card(){
    fetch(URL)
    .then(Response => Response.json())
    .then(Response => Response.results.forEach(element => {
        console.log(element);
        cardcreate(element);
    }))
}



function cardcreate(element) {

    const card = document.createElement('div');
    card.classList.add("card");

    const imgcard = document.createElement('img');
    imgcard.classList.add("imgcards");

    imgcard.setAttribute('src' ,element["media_formats"]["gif"]["url"]);

    card.appendChild(imgcard);

    main.appendChild(card);

}


