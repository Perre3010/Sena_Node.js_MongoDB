//document.getElementById('lista').innerHTML = salida

elementos = ''

fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    return response.json();
}).then(data=>{
    for(let i = 0; i<data.results.length; i++){
        console.log(data.results[i]);
        
    }
    document.getElementById('personajes').innerHTML = elementos;
})