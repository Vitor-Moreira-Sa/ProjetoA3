import "./news.css";
import {
  Cabecalho,
  CarrosselNoticias,
  InfosEpic,
  Rodape,
  Jogos,
  Header,
  JogoFamoso,
} from "./components";
import Link from "next/link";

export const metadata = {
  charset: "UTF-8",
  title: "Epic Store - News",
};

export default function News() {
  return (
    <>
      <Cabecalho />

      <Header />

      <CarrosselNoticias />

      <Jogos />

      <JogoFamoso />

      <InfosEpic />

      <Rodape />
    </>
  );
}
