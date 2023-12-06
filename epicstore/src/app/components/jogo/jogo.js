"use client";

import "./jogo.css"

export function Jogo(){
    return(
        <div class="jogo">
        <table class="jogos">
          <tr>
            <th colspan="2" class="name4">
              Novidades
            </th>
            <th colspan="2" class="name4">
              Mais Jogados
            </th>
            <th colspan="2" class="name4">
              Em Prefere
            </th>
          </tr>
          <tr class="linhaJogos">
            <td class="colunaJogos">
              <img
                src="classic-car-simulator.jpg"
                alt=""
                class="logoGame"
              ></img>
              <div class="nameGame">
                <p>Classic Car Simulator Car Driving</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <p class="valor">R$ 0,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="DeadCells.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Dead Cells</p>
              </div>
              <p class="valor">R$ 24,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img
                src="the-lord-of-the-rings.jpg"
                alt=""
                class="logoGame"
              ></img>
              <div class="nameGame">
                <p>
                  The Lord Of The Rings
                  <br />
                  Return To Moria
                </p>
              </div>
              <p class="valor">R$ 39,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos2">
            <td class="colunaJogos">
              <img src="there-is-no-game.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>There Is No Game - Wrong…</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <button type="button" id="compra">
                ADD To Card
              </button>
              <div class="desconto">
                <p>-10%</p>
              </div>
              <p class="valorTraco">R$ 12,99</p>
              <p class="valorDesc">R$ 11,69</p>
            </td>
            <td class="colunaJogos2">
              <img src="Ooblets.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Ooblets</p>
              </div>
              <p class="valor">R$ 29,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="AlanWake2.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Alan Wake 2</p>
              </div>
              <p class="valor">R$ 49,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos3">
            <td class="colunaJogos">
              <img src="tintin-reporter.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Tintin Reporter - Cigars of the…</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <p class="valor">R$ 39,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="RimWorld.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>RimWorld</p>
              </div>
              <p class="valor">R$ 34,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="assassins-creed.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>
                  Assassins Creed
                  <br />
                  VALHALLA
                </p>
              </div>
              <p class="valor">R$ 59,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos4">
            <td class="colunaJogos">
              <img src="asterix-and-obelix.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Asterix and Obelix Slap Them All 2</p>
              </div>
              <p class="valor">R$ 24,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="Recipe for Disaster.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Recipe For Disaster</p>
              </div>
              <p class="valor">R$ 16,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="GTAV.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Grand Theft Auto 5</p>
              </div>
              <p class="valor">R$ 16,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
}