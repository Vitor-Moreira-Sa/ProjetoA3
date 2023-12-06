"use client";

import "./jogoFamoso.css";

export function JogoFamoso(){
    return(

        <div class="jogoFamoso">
            <img src="immortals-fenyx-rising.jpg" alt="" class="imgImmortals" />
            <table class="famoso">
                <tr>
                    <th>
                        <p class="titulo">A MAIOR NOVIDADE!</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <b class="immortals">
                        Immortals Fenyx <br />
                        Rising Surpreende<br />
                        Jogadores
                        </b>
                    </td>
                </tr>
                <tr class="generos">
                    <td>
                        <p class="genero">
                        Aventura
                        </p>
                    </td>
                    <td>
                        <p class="genero">
                        Estrategia
                        </p>
                    </td>
                    <td>
                        <p class="genero">
                        Batalha
                        </p>
                    </td>
                </tr>
                <tr class="descricaoImmortals">
                    <td>
                        <p class="descricao">
                        A última atualização do jogo Immortals Fenyx Rising
                        trouxe uma surpresa emocionante para os jogadores,
                        com skins inéditas que estão conquistando a comunidade gaming.
                        Os visuais exclusivos não apenas adicionam uma reviravolta estilística aos personagens
                        favoritos,
                        mas também oferecem uma experiência única e envolvente durante as aventuras mitológicas do jogo.
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    );
}