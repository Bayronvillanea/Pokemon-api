let searchBtn = document.querySelector('button');
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let search = document.querySelector('#search').value
    let informacion = document.querySelector('.informacion')
    
    fetch( url = `https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => res.json())
    .then(data => {
        let div = document.createElement('div')
        informacion.innerHTML = ''
        let typess = data.types.map(tipo => tipo.type.name).join(', ');
        let moves = data.moves.map(move => move.move.name).slice(0, 5).join(', ');
        
        div.innerHTML = `
        <img src="${data.sprites.front_default}" alt="imagen pokemon" class="img-fluid" width="200px" 
        height="200px">
        <p> Name: ${data.name}</p>
        <p> Height: ${data.height}M</p>
        <p> Weight: ${data.weight}kg</p>
        <p> Base Experience: ${data.base_experience}</p>
        <p> Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p> Moves: ${moves}</p>
        <p> Types: <strong style='color:red;'>${typess}</strong></p>
        <p> Stats: ${data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
        `
        informacion.append(div)
        informacion.classList.add('show');
    })
    .catch(error => {
        console.error(error);
        alert('Pokemon no encontrado. Por favor, verifica la ortografía y vuelve a intentarlo.');
    });
});
