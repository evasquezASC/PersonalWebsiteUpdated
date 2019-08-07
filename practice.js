
function getData(query) {
fetch(
    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=RSnsp0OMi1u93NR8AJVE1AiidbPvsDLd&limit=5"
)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    renderData(myJson)
    //console.log(JSON.stringify(myJson));
});

}
function renderData(data) {
    console.log(data.data);
    for (let i = 0; i < data.data.length; i++) {
    const img = document.createElement("img");
    img.src = data.data[i].images.original.url;

    const images = document.getElementById("images")
    images.appendChild(img);
    }
}

getData();