"use client";
import { useEffect, useState } from "react";
import "./carrossel.css";

function AssemblyCarrosselItem({ item }) {
  return (
    <div key={item.id} class="carrosselItem">
      <img
        src={"/gameImages/" + item.id + ".jpg"}
        alt={item.nome}
        class="carrosselItemImage"
      ></img>
      <table class="carrosselItemInfo">
        <tr>
          <th colspan="2">
            <b class="carrosselItemInfoName">{item.nome}</b>
          </th>
        </tr>
        <tr>
          <td class="carrosselItemInfoCategoryConteiner">
            <p class="carrosselItemInfoCategory">{item.genero}</p>
          </td>
        </tr>
      </table>
      <div class="carrosselItemDescriptionConteiner">
        <p class="carrosselItemDescription">{item.descricao}</p>
      </div>
    </div>
  );
}

export function Carrossel() {
  const [carrosselItems, updateCarrosselItems] = useState([]);

  useEffect(() => {
    if (!carrosselItems.length)
    fetch(`http://localhost:3001/jogos`)
        .then((x) => x.json())
        .then((x) => {
          updateCarrosselItems(
            x.content.map((item) => {
              return <AssemblyCarrosselItem item={item} />;
            })
          );
        });
  });

  function carrosselSpin(direction) {
    const tempArray = carrosselItems.map((item) => item);

    if (direction == "left") {
      const item = tempArray.pop();
      tempArray.unshift(item);
    } else {
      const item = tempArray.shift();
      tempArray.push(item);
    }

    updateCarrosselItems(tempArray);
  }

  return (
    <div class="carrossel">
      <div class="itensConteiner">{carrosselItems}</div>
      <button
        type="button"
        class="arrowLeft"
        onClick={() => carrosselSpin("left")}
      >
        <img class="arrowLeftImage" src="/assets/leftArrowButton.png" />
      </button>
      <button
        type="button"
        class="arrowRight"
        onClick={() => carrosselSpin("rigth")}
      >
        <img class="arrowRightImage" src="/assets/rigthArrowButton.png" />
      </button>
    </div>
  );
}
