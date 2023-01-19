import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={Logo}
        alt="Logotipo do aplicativo Habits, seis quadrados pequenos em cima do nome habits, tudo em minúsculo, as cores dos quadrados vão do preto ao lilás, passando pelo roxo."
      />
    </div>
  );
}

export default App;
