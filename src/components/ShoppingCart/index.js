import React from "react";
import * as S from "./styled.js";

export default function ShoppingCart({removeStatePokemon, pokemonCart, totalPrice, endShop }) {

  return (
    <S.containerCart>
      <S.title>Carrinho</S.title>
      <S.listShoppingCart>
        {pokemonCart ? pokemonCart.map((pokemonCurrent, index) => {
          return (
            <S.listItem
              key={index}>
                <S.info>
                    <S.img src={pokemonCurrent.image} alt="Imagem do Pokemon" />
                    <p>{pokemonCurrent.name}</p>
                    
                </S.info>
                <div>
                  <strong>R${pokemonCurrent.order}</strong>
                  <S.closeIcon onClick={() => removePokemon(pokemonCurrent)}>X</S.closeIcon>
                </div>
            </S.listItem>
          );
        }): <S.p>Carrinho vazio...</S.p>}
      </S.listShoppingCart>
      <S.total>
            <h2>Total:</h2>
            <strong>R${totalPrice? totalPrice : 0}</strong>
      </S.total>
      <S.button onClick={() => endShop()}>REALIZAR COMPRA</S.button>
    </S.containerCart>
  );

  function removePokemon(pokemon){
    pokemonCart.splice(pokemonCart.indexOf(pokemon),1)
    removeStatePokemon(pokemonCart, pokemon.order)
  }
}
