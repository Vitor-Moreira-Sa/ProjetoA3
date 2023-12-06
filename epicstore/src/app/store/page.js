import "./store.css";

import {
  Cabecalho,
  Compra,
  InfosEpic,
  Rodape,
  Recomendados,
} from "./components/";

export const metadata = {
  charset: "UTF-8",
  title: "Epic Store - Store",
};

export default function Store() {
  return (
    <>
      <Cabecalho />

      <Compra />

      <Recomendados />

      {/* <Jogo />  */}

      <InfosEpic />

      <Rodape />
    </>
  );
}
