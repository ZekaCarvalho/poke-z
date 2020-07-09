import React, { useState } from "react";
import * as S from "./styled";
import { specficPokemon } from '../../services/api'

export default function Header({pokemonSearchName}) {
  const [pokemonName, setPokemonName] = useState('');

  async function handlePesquisa(){
    if(pokemonName){
      const response = await specficPokemon(pokemonName.toLowerCase()).then(response => response)
      pokemonSearchName(response)
    }
  }
  
  return (
    <S.Header>
      <S.divSearch>
        <S.inputName value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Digite o nome completo do Pokémon"></S.inputName>
        <S.buttonSearch type="button" onClick={handlePesquisa}><b>Pesquisar</b></S.buttonSearch>
      </S.divSearch>
      
      <S.divSearch>
        <S.imgSearch src={"logo.svg"} alt="PokeZ Store" style={{width:'80%'}}/>
      </S.divSearch>
    </S.Header>
  );
}
