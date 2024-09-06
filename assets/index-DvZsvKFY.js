(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function b(h){(function(){let o=0,r=0;const a=document.querySelector("#baraja1"),e=document.querySelector("#baraja2"),t=document.querySelector("#jugador"),s=document.querySelector("#computador"),g=["C","D","H","S"],y=["2","3","4","5","6","7","8","9","10","A","J","K","Q"];e.style.display="none",s.style.display="flex";const l=[];for(let i of y)for(let c of g){let n;isNaN(i)?i==="A"?n=14:i==="J"?n=11:i==="Q"?n=12:i==="K"&&(n=13):n=parseInt(i),l.push({img:`cartas/${i}${c}.png`,valor:n})}function u(){const i=document.createElement("li"),c=document.createElement("img");c.width=90,c.height=110;const n=Math.floor(Math.random()*l.length);o+=l[n].valor,t.textContent=`Jugador 🧒🏽 ${o}`,c.src=l[n].img,i.appendChild(c),a.appendChild(i);const v=document.createElement("li"),d=document.createElement("img");d.width=90,d.height=110;const p=Math.floor(Math.random()*l.length);r+=l[p].valor,d.src=l[p].img,v.appendChild(d),e.appendChild(v),o>21&&(Swal.fire({title:"Gano Computadora",icon:"success",html:"<div style='font-size: 2em;'>💻</div>",showConfirmButton:!0}),e.style.display="flex",s.textContent=`Computadora 💻 ${r}`)}function m(){e.style.display="flex",s.textContent=`Computadora 💻 ${r}`,o>r&&o<=21?Swal.fire({title:"Gano Jugador",icon:"success",html:"<div style='font-size: 2em;'>🧒🏽</div>",showConfirmButton:!0}):o<r&&r<=21?Swal.fire({title:"Gano Maquina",icon:"success",html:"<div style='font-size: 2em;'>💻</div>",showConfirmButton:!0}):o===r?Swal.fire({title:"Empate",icon:"success",html:"<div style='font-size: 2em;'>👌</div>",showConfirmButton:!0}):r>21&&Swal.fire({title:"Gano Jugador",icon:"success",html:"<div style='font-size: 2em;'>🧒🏽</div>",showConfirmButton:!0})}function f(){a.innerHTML="",e.innerHTML="",o=0,r=0,t.textContent=`Jugador 🧒🏽 ${o}`,s.textContent=`Computadora 💻 ${r}`,e.style.display="none"}window.juego={Pedir:u,Detener:m,NuevoJuego:f},document.querySelector("#Pedir").addEventListener("click",u),document.querySelector("#Detener").addEventListener("click",m),document.querySelector("#NuevoJuego").addEventListener("click",f)})()}document.querySelector("#app").innerHTML=`
  <div class="cont">
        <div class="titulo1">
            <h1>Bienvenido ✨</h1>
        </div>
        <div class="titulo2">
            <h1>CASINO JESUCHI</h1>
        </div>
        <div class="titulo3">
            <h1>Black Jack</h1>
        </div>

        <div class="contp">
            <div class="jugador">
                <h1 id="jugador">Jugador 🧒🏽 0</h1>
                <ul id="baraja1">
                </ul>
            </div>

            <div class="botones">
                <div class="boton1">
                    <button id="NuevoJuego" style="background-color: rgb(255, 0, 0);">Nuevo Juego</button>
                </div>
                <div class="boton2">
                    <button id="Pedir" style="background-color: rgb(43, 75, 215);">Pedir</button>
                </div>
                <div class="boton3">
                    <button id="Detener" style="background-color: rgb(69, 101, 101);">Detener</button>
                </div>
            </div>

            <div class="compu">
                <h1 id="computador">Computadora 💻 0</h1>
                <ul id="baraja2">
                </ul>
            </div>
        </div>
    </div>

`;b(document.querySelector("#counter"));
