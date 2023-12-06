"use client";

import "./recomendados.css";

export function Recomendados(){
    return(
        <div class="recomendados">
      <table class="inforRecomendados">
        <tr>
          <th>
            <p class="recomendo">O MAIS RECOMENDADO</p>
          </th>
        </tr>
        <tr>
          <td>
            <b class="batalhas">
              Batalhas épicas de <br />
              cartas em tempo real
            </b>
          </td>
        </tr>
        <tr class="generos">
          <td>
            <p class="genero">Aventura</p>
          </td>
          <td>
            <p class="genero">Estrategia</p>
          </td>
          <td>
            <p class="genero">Batalha</p>
          </td>
        </tr>
        <tr class="descricaoClash">
          <td>
            <p class="descricao">
              Batalhas épicas de cartas em tempo real Clash Royale é um jogo
              multijogador em tempo real estrelado pelos Royales, seus
              personagens favoritos do Clash e muito, muito mais. Colete e
              atualize dezenas de cartas com as tropas, feitiços e defesas do
              Clash of Clans que você conhece e adora, bem como os Royales:
              Príncipes, Cavaleiros, Bebês Dragões e muito mais.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" id="saiba">Saiba Mais</button>
          </td>
        </tr>
      </table>
      <img src="clash-royale.jpg" alt="" class="clashRoyale" />
    </div>
    )
}