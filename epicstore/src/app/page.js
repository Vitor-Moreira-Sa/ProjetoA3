import "./home.css";
import Link from "next/link";
import {
  Cabecalho,
  Destaque,
  Carrossel,
  Genders,
  Jogo,
  InfosEpic,
  Rodape,
} from "./components/index";

export const metadata = {
  charset: "UTF-8",
  title: "Epic Store - Home",
};

export default function Home() {
  return (
    <>
      <Cabecalho />

      <Destaque random={Math.random()} />

      <Carrossel />

      <Genders />

      <Jogo />

      <InfosEpic />

      <Rodape />
    </>
  );
}
