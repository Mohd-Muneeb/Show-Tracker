const searchVal = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

searchVal.addEventListener("input", async (e) => {
    const values = await getData(searchVal.value);

    values.data.forEach(element => {
        createCard(element.title, element.images.jpg.large_image_url, element.episodes, element.status,)
    });
})

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
})

async function getData(search) {

    const data = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`, {
        headers: {
            'Content-type': 'application/json',
        }
    }).then(res => {
        res.body;
    }).catch((err) => {
        console.log(err);
    })
    return data;
}

function createCard(title, image, episodes, status,synopsis) {
    let card = document.createElement("div")
    card.innerHTML = `
    <div class="card-dark ml-3 mt-3" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body" style="color: aliceblue">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Episodes: ${episodes}</p>
                <p class="card-text">Status: ${status}</p>
                <p class="card-text">${synopsis}</p>
            </div>
    </div>`;
    const list = document.getElementsByClassName("card-list");
    list[0].appendChild(card);
}