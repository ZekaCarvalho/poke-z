
export async function allPokemon(limit, offset) {

    let api = ` https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    // fetch() retorna a promessa de um objeto, then() retorna a promessa de um json.
    // Por isso a necessidade de um await para cada uma, ambas são assíncronas.
    return await (await fetch(api).then()).json();
}

export async function specficPokemon(name) {

    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
    return await (await fetch(api).then()).json();
}