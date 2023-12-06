"use client";

import "./compra.css";

export function Compra(){
    return(
        <div class="compra">
            <div class="pai" style="position: relative;">
                <img src="Cover.jpg" alt=""
                    class="cover" />
                <div>
                    <img src="Rectangle 16.png" alt="" style="position: absolute;" />
                </div>
                <table class="tableCatego">
                    <tr>
                        <td class="categoAlan">
                            <p class="categorias">Ação</p>
                        </td>
                        <td class="categoAlan">
                            <p class="categorias">Novo</p>
                        </td>
                        <td class="categoAlan">
                            <p class="categorias">Free <br />Style</p>
                        </td>
                        <td class="categoAlan">
                            <p class="categorias">MAC</p>
                        </td>
                        <td class="categoAlan">
                            <p class="categorias">15.7 <br />PC</p>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="catalogo">
                <table class="games">
                    <tr>
                        <td>
                            <img src="alla-wake.jpg" alt=""
                            class="fotos" />
                        </td>
                        <td>
                            <p class="nomes">Alan Wake 2</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="ac-mirage.jpg" alt=""
                            class="fotos" />
                        </td>
                        <td>
                            <p class="nomes">Assassin's Creed
                                Mirage</p>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            <img src="genshin-impact.jpg" alt=""
                            class="fotos" />
                        </td>
                        <td>
                            <p class="nomes">Genshin Impact</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="footbaal-manager.jpg" alt=""
                            class="fotos" />
                        </td>
                        <td>
                            <p class="nomes">Football Manager
                                2024</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="sonic-superstars.jpg" alt=""
                            class="fotos" />
                        </td>
                        <td>
                            <p class="nomes">Sonic Superstars</p>
                        </td>
                    </tr>
                </table>
            </div>
    </div>
    )
}