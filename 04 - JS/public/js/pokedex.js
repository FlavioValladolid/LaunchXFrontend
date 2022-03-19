const fetchPokemon = () => {
    let pokeInput = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.font_default;
        console.log(pokeImg)
        pokeImg(pokeImg)
    });
};

// fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}