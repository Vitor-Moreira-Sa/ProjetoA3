"use client";

import "./cabecalho.css";
import Link from "next/link";

export function Cabecalho() {
  return (
    <div class="cabecalho">
      <div class="logo">
        <img src="logo.jpg" alt="logo" class="logo" />
      </div>
      <div class="telas">
        <button id="telaH" type="button">
            <Link class= "nameT" href="/">Home</Link>
        </button>
        <button id="telaS" type="button">
          <Link class="nameT" href="/store">Store</Link>
        </button>
        <button id="telaN" type="button" onclick="irParaPaginaNews()">
          <Link class="nameT" href="news">News</Link>
        </button>
        <div className="relative left-7">
          <img src="Line 1.jpg" alt="" />
        </div>
      </div>
      <div id="pesquisa">
        <label for="barraDePesquisa"></label>
        <input
          type="text"
          id="caixaDePesquisa"
          placeholder="🔍 Pesquise aqui"
          color='white'
        />
      </div>
      <button id="perfil" type="button">
        <img src="Person.png" alt="perfil" />
      </button>
      <button id="carrinho" type="button">
        <img src="Shopping Bag.png" alt="carrinho" />
      </button>
    </div>
  );
}
