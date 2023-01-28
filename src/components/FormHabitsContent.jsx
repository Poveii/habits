import { useEffect } from "react";
import habitsEmojisList from "../habits.json";

const reducedHabitsEmojis = Object.keys(habitsEmojisList)
  .filter((i) => i < 5)
  .reduce((obj, key) => {
    return Object.assign(obj, { [key]: habitsEmojisList[key] });
  }, {});

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
        {Object.values(reducedHabitsEmojis).map((habit) => {
          return (
            <div className="habit" data-name={habit.name} key={habit.name}>
              {habit.emoji}
            </div>
          );
        })}
      </div>

      <div className="days">
        <span>Clique em "Registrar o meu dia" para começar</span>
      </div>
    </>
  );
}

export default FormHabitsContent;
