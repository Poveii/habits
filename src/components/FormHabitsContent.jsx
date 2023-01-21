import { useEffect } from "react";

function FormHabitsContent() {
  useEffect(() => {
    const formHabits = document.querySelector("#form-habits");
    const nlwSetup = new NLWSetup(formHabits);
    const button = document.querySelector("header button");

    function addDay() {
      const today = new Date().toLocaleDateString("pt-BR").slice(0, 5);
      const dayExists = nlwSetup.dayExists(today);

      if (dayExists) {
        return alert("Dia já incluso! 🔴️");
      }

      alert("Dia adicionado com sucesso! ✅️");
      nlwSetup.addDay(today);
    }

    button.addEventListener("click", addDay);
  }, []);

  return (
    <>
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
    </>
  );
}

export default FormHabitsContent;
