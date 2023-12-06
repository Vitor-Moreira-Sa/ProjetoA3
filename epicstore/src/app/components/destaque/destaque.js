"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./destaque.css";

export function Destaque({ random }) {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/jogos`)
      .then((x) => x.json())
      .then((x) => {
        const index = Math.floor(random * (x.content.length + 1));
        // console.log(x.content[index]);
        const { id, nome, genero, descricao } = x.content[index];
        setNome(nome);
        setGenero(genero);
        setDescricao(descricao);
        setImagem("/gameImages/" + id + ".jpg");
      });
  });

  return (
    <div>
      <table>
        <tr>
          <th colspan="5">
            <b class="name">{nome}</b>
          </th>
        </tr>
        <tr>
          <td class="categoMof">
            <p class="categorias">{genero}</p>
          </td>
        </tr>
      </table>
      <div>
        <p class="descrition">{descricao}</p>
      </div>
      <div class="Mof">
        <Image src={imagem} alt={nome} width="650" height="650" />
      </div>
    </div>
  );
}
