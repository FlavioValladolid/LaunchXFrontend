const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value; 
    pokeName = pokeName.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./public/img/pikachuSleeping.png");
            pokeNameF("Pokémon no encontrado");
        } 
        else {
            return res.json();
        }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);  
        pokeNameF(pokeName); 
        pokeType(data["types"][0].type["name"]);

            // estadisticas
            // movimientos
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNameF = (url) => {
    const pokeNameOutput = document.getElementById("pokeNames");
    pokeNameOutput.innerHTML = url;
}

const pokeType = (url) => {
    const pokeTypeOutput = document.getElementById("pokeTypes");
    pokeTypeOutput.innerHTML = url;
}