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

    function saveData() {
      localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
    }

    button.addEventListener("click", addDay);
    formHabits.addEventListener("change", saveData);

    const habitsData =
      JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
    nlwSetup.setData(habitsData);
    nlwSetup.load();
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
