function getData() {

fetch('https://swapi.co/api/people/1/')

.then(function(response) {
    return response.json();
})

.then(function(Json) {
    console.log(Json)
})

}

getData();


function useData(data) {
    const image = document.getElementById("image")
}