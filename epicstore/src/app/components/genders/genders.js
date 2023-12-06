"use client";

import "./genders.css";

export function Genders() {
  return (
    <div class="genders">
        <table>
          <tr>
            <td rowspan="4" class="gender">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 5.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender">CASUAL</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 6.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender"> AÇÃO</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 7.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender">ARCADE</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 8.jpg" alt="" class="imgGender"></img>
                  <div claas = "namesGenders">
                    <b class="nameGender">CORRIDA</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender">
              <div>
                <button type="button" id="buttonGender">
                  <img src="image 9.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender"> RPG</b>
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
  );
}