"use client";

import "./jogos.css"

export function Jogos(){
    return(
        <div class="jogos">
        <p class="gratis">Jogos Grátis</p>
        <div class="borda">
            <button type="button" id="mais">
                <p class="mais">ver mais</p>
            </button>
        </div>
        <table>
            <tr>
                <td rowspan="6" class="jogo">
                    <div class="conteiner">
                        <img src="golden-light.jpg" alt="" class="imgGolden" />
                        <div class="game">
                            <p class="names">Grátis</p>
                        </div>
                        <p class="nameGame">
                            Golden Light
                        </p>
                        <p class="hora">
                            Gráris - 16 de nov. às 10:00
                        </p>
                        <div class="estrelas">
                            <img src="estrelas.jpg" alt="" />
                        </div>
                    </div>
                </td>
                <td rowspan="6" class="gender2">
                    <div class="conteiner">
                        <img src="earthlock.jpg" alt="" class="imgEarthLock" />
                        <div class="games">
                            <p class="names">Em Breve</p>
                        </div>
                        <p class="nameGame">
                            Golden Light
                        </p>
                        <p class="hora">
                            Gráris - 16 de nov. às 10:00
                        </p>
                    </div>
                </td>
                <td rowspan="6" class="gender3">
                    <div class="conteiner">
                        <img src="SurvivingtheAftermath.jpg" alt="" class="imgSurviving" />
                        <div class="games">
                            <p class="names">Em Breve</p>
                        </div>
                        <p class="nameGame">
                            Golden Light
                        </p>
                        <p class="hora">
                            Gráris - 16 de nov. às 10:00
                        </p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    )
}