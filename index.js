//document.getElementById('lista').innerHTML = salida

elementos = ''
y = "https://rickandmortyapi.com/api/character/"

fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    return response.json();
}).then(data=>{
    for(let i = 0; i<data.results.length; i++){
        console.log(data.results[i]);
        elementos += `<li><a href=${y+(i+1)}>${data.results[i].name}</a></li>`;
        
    }
    document.getElementById('personajes').innerHTML = elementos;
})