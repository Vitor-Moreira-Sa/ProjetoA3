"use client";

import "./infosEpic.css";

export function InfosEpic(){
    return(
        <div class="infosEpic">
        <div class="logoFim">
          <img src="logo.jpg" alt="" class="logoFim"></img>
        </div>
        <div class="apoieUmCriador">
          <span>
            <p>
              Recursos
              <br />
              Apoie-um-Criador
              <br />
              Distribuir na Epic Games
              <br />
              Carreiras
              <br />
              Empresa
            </p>
          </span>
        </div>
        <div class="polTicaDeFanart">
          <span>
            <p>
              Política de Fanart
              <br />
              UX Research
              <br />
              EULA da Loja <br />
            </p>
          </span>
        </div>
        <div class="servicos">
          <span>
            <p>
              Serviços On-line
              <br />
              Regras da comunidade
              <br />
              Epic Newsroom
              <br />
            </p>
          </span>
        </div>
      </div>
    );
}