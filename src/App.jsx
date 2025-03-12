import "./App.css";
import projeto1img from "./assets/foto-03.png";
import projeto2img from "./assets/foto-02.png";
import projeto3img from "./assets/foto-01.png";

function App() {
  return (
    <>
      <h1 class="title1"> Meu Portifólio.</h1>

      <h1 class="title3">
        <p>Quem sou eu?</p>

        <p1>
          Olá! Eu sou a Pietra, Uma adolescente que sonha em viajar o mundo, conhecer diferentes culturas, e apesar de eu ainda não saber o que eu quero trabalhar futuramente, eu gosto bastante de mexer com o desing de sites e aplicativos.
        </p1>
      </h1>

      <h1 class="title1">Meus projetos</h1>
          <ul >
            <li className="d-flex gap-5 row">
              <div className="cardPhoto">
                <img src={projeto1img} alt="Projeto 1" />
                <h1 class="title"> STORYLEFT.</h1>
              </div>

              <div className="cardPhoto">
                <img src={projeto2img} alt="Projeto 2" />
                <h1 class="title">CINELINE.</h1>
              </div>
              <div className="cardPhoto">
                <img src={projeto3img} alt="Projeto 3" />
                <h1 class="title">VETSYS.</h1>
              </div>
            </li>
          </ul>
        <h1 class="title3">
           
          <h1 class="title">Habilidades</h1>

          <ul>
            <li>
              Versatilidade: tenho facilidade em construir a imagem que desejar para o seu site ou aplicativo😁
            </li>
            <li>
              Adaptação: Sei trabalhar com os mais variados conceitos,
              expressando diferentes emoções e personalidades através da
              imagem 👌
            </li>
            <li>
              Profissionalismo: Comprometida com os prazos e com o trabalho em
              equipe. Sempre busco entregar o melhor de mim em cada projeto ❤️
            </li>
            <li>
              Aparência: Com um pouco de ideias e conceito posso deixar o seu site com cara de profissional!😉
            </li>
          </ul>
        </h1>

        <h class="title1">Entre em contato!</h>
        <h class="title">

        <li>@pi_godooi</li>
        <li>14 99893-2675</li>
        </h>
    </>
  );
}
export default App;
{
  /* <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */
}
