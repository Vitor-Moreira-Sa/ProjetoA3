"use client";

import "./carrosselNoticias.css";

export function CarrosselNoticias(){
    return(
        <div class="carrosselNoticias">
        <button type="button" class="arrowLeft">
            <img src="Frame 3.jpg" alt="" />
        </button>
        <div class="noticias">
            <table class="infoNoticias">
                <tr>
                    <th>
                        <p class="titulo">JOGOS EM ALTA NO MUNDO</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <b class="not">
                            Notícias <br />
                            Recentes
                        </b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="freeFire">
                            Free Fire Anúncia Campeanato de Futebol Mundial!
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="descricao">
                            Em uma emocionante reviravolta,
                            o popular jogo mobile Free Fire acaba de surpreender sua comunidade
                            ao anunciar a criação de um campeonato de futebol virtual dentro do universo do game.
                            A desenvolvedora, Garena, revelou detalhes empolgantes sobre esse novo evento que promete
                            unir
                            ainda mais os jogadores em uma competição única.
                        </p>
                    </td>
                </tr>
            </table>
            <img src="noticias.jpg" alt="" class="imgNot" />
            <details>
                <summary>
                    scroll for more
                </summary>
            </details>
        </div>

        <button type="button" class="arrowRight">
            <img src="Frame 4.jpg" alt="" />
        </button>
    </div>
    )
}