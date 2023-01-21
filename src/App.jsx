import Logo from "./assets/logo.svg";
import PlusIcon from "./assets/plus.svg";
import FormHabitsContent from "./components/FormHabitsContent";
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
        <FormHabitsContent />
      </form>
    </div>
  );
}

export default App;
