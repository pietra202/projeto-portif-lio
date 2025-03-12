import style from "./Portifolio.Module.css"

const Portifolio = () => {
  return (
    <div className={style.portifolio}>
      <h1>Meu Portfólio</h1>
      <p>Bem-vindo ao meu portfólio. Aqui você encontrará informações sobre meus projetos e habilidades.
        Me chamo Maria, tenho 23 anos e sou Modelo
      </p>
      <h>Aqui está alguns de meus trabalhos...</h>
      <section>
        <h2>Projetos</h2>
        <ul>
          <li>Projeto 1: Vogue 2023.</li>
          <li>Projeto 2: TIG 2020.</li>
          <li>Projeto 3: Alexandre pavão 2019.</li>
        </ul>
      </section>
      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>Habilidade 1</li>
          <li>Habilidade 2</li>
          <li>Habilidade 3</li>
        </ul>
      </section>
    </div>
  );
};

export default Portifolio;

