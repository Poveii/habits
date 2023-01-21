import Logo from "./assets/logo.svg";
import PlusIcon from "./assets/plus.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src={Logo}
          alt="Logotipo do aplicativo Habits, seis quadrados pequenos em cima do nome habits, tudo em minúsculo, as cores dos quadrados vão do preto ao lilás, passando pelo roxo."
        />

        <button type="button">
          <img src={PlusIcon} alt="Ícone sinal de mais da cor roxa" />
          <div>Registrar o meu dia</div>
        </button>
      </header>

      <form id="form-habits">
        <div className="habits">
          <div className="habit" data-name="run">
            🏃‍♂️️
          </div>
          <div className="habit" data-name="water">
            💧️
          </div>
          <div className="habit" data-name="food">
            🍎️
          </div>
          <div className="habit" data-name="journal">
            📕️
          </div>
        </div>

        <div className="days"></div>
      </form>
    </div>
  );
}

export default App;
