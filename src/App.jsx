import "./App.css";
import projeto1img from "./assets/foto-01.jpg";
import projeto2img from "./assets/foto-02.jpg";
import projeto3img from "./assets/foto-03.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="title1"> Meu Portifólio.</h1>

      <h1 class="title3">
        <p>Quem sou eu?</p>

        <p1>
          Olá! Eu sou a Maria, uma modelo de 23 anos apaixonada pelo mundo da
          moda e da arte. Desde pequena, sempre fui fascinada por como as roupas
          podem contar histórias e expressar emoções. Com o tempo, descobri
          minha verdadeira vocação na modelagem, onde posso ser a ponte entre as
          marcas e os sonhos de quem as consome. Com uma experiência sólida em
          desfiles, fotos publicitárias e editoriais, procuro sempre crescer e
          me reinventar como profissional, mantendo um compromisso com a
          autenticidade, a dedicação e a paixão pela profissão.
        </p1>
      </h1>

      <h1 class="title1">Meus projetos</h1>
        <section className="mb-5">
          <ul >
            <li className="d-flex gap-5 row">
              <div className="cardPhoto">
                <img src={projeto1img} alt="Projeto 1" />
                <h1 class="title"> VOGUE 2023.</h1>
              </div>

              <div className="cardPhoto">
                <img src={projeto2img} alt="Projeto 2" />
                <h1 class="title">TIG 2020.</h1>
              </div>
              <div className="cardPhoto">
                <img src={projeto3img} alt="Projeto 3" />
                <h1 class="title">ALEXANDRE PAVÃO 2019.</h1>
              </div>
            </li>
          </ul>
        </section>
      <section>
        <h1 class="title3">
          <h1 class="title">Desfiles</h1>
          <ul>
            <li>
              Fashion Week São Paulo 2023 – Desfile para a coleção
              Primavera/Verão.
            </li>
            <li>
              Desfile Exclusivo de Inverno – Participação em evento de alto
              padrão para marcas de luxo.
            </li>
            <li>
              Desfile de Lançamento de Coleção – Trabalhei com estilistas
              renomados, promovendo marcas brasileiras e internacionais.
            </li>
          </ul>

          <h1 class="title">Habilidades</h1>

          <ul>
            <li>
              Versatilidade: Sou capaz de transitar entre diferentes estilos,
              seja para editoriais fashion, publicidade ou desfiles.
            </li>
            <li>
              Adaptação: Sei trabalhar com os mais variados conceitos,
              expressando diferentes emoções e personalidades através da minha
              imagem.
            </li>
            <li>
              Profissionalismo: Comprometida com os prazos e com o trabalho em
              equipe. Sempre busco entregar o melhor de mim em cada projeto.
            </li>
            <li>
              Presença de palco: Minha experiência em desfiles me proporcionou
              uma postura e confiança que me destacam em qualquer ambiente.
            </li>
          </ul>
        </h1>

        <h class="title1">@MariaModel</h>
      </section>
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
