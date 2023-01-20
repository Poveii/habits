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

        <button>
          <img src={PlusIcon} alt="Ícone sinal de mais da cor roxa" />
          Registrar o meu dia
        </button>
      </header>

      <form id="form-habits">
        <div className="habits">
          <div className="habit">🏃‍♂️️</div>
          <div className="habit">💧️</div>
          <div className="habit">🍎️</div>
        </div>

        <div className="days">
          <div className="day">
            <div>19/01</div>
            <input type="checkbox" name="run" />
            <input type="checkbox" name="water" />
            <input type="checkbox" name="food" />
          </div>

          <div className="day">
            <div>20/01</div>
            <input type="checkbox" name="run" />
            <input type="checkbox" name="water" />
            <input type="checkbox" name="food" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
