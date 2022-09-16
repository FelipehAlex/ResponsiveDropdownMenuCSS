import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars">=|=</i>
        </label>
        <label className="logo">Minha logo</label>
        <ul>
          <li>
            <a href="!#">Inicio</a>
          </li>

          <li>
            <a href="!#">Sobre</a>
          </li>

          <li>
            <a href="!#">Serviços</a>
          </li>

          <li>
            <a href="!#">Contato</a>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Conteúdo</h1>
      </section>
    </div>
  );
}
