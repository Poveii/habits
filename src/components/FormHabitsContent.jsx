import { useEffect, useState } from "react";
import habitsEmojisList from "../habits.json";
import PopoverContent from "./PopoverContent";
import "./Popover.css";

const reducedHabitsEmojis = Object.keys(habitsEmojisList)
  .filter((i) => i < 5)
  .reduce((obj, key) => {
    return Object.assign(obj, { [key]: habitsEmojisList[key] });
  }, {});

const handleHabitClick = (e, index, setPopoverIndex) => {
  if (!e.target.classList.contains("popoverTrigger")) return;
  setPopoverIndex(index);
};

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

  const [popoverIndex, setPopoverIndex] = useState(-1);

  return (
    <>
      <div className="habits">
        {Object.values(reducedHabitsEmojis).map((habit, index) => {
          const itemIndex = index;

          return (
            <div
              className="habit popoverTrigger"
              data-name={habit.name}
              key={habit.name}
              onClick={(event) => {
                handleHabitClick(event, itemIndex, setPopoverIndex);
                if (popoverIndex === itemIndex) return setPopoverIndex(-1);
              }}
            >
              {habit.emoji}
              {popoverIndex === itemIndex ? <PopoverContent /> : null}
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
