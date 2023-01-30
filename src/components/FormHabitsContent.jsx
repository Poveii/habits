import { useEffect, useState } from "react";
import habitsEmojisList from "../habits.json";
import PopoverContent from "./PopoverContent";
import "./Popover.css";

export function reduceObjectArrayToFive(object) {
  return Object.keys(object)
    .filter((k) => k < 5)
    .reduce((obj, key) => {
      return Object.assign(obj, { [key]: object[key] });
    }, {});
}

let localHabitsEmojis =
  JSON.parse(localStorage.getItem("NLWSetup@emojis")) || habitsEmojisList;

const reducedHabitsEmojis = reduceObjectArrayToFive(localHabitsEmojis);

const handleHabitClick = (e, index, setPopoverIndex) => {
  if (!e.target.classList.contains("popoverTrigger")) return;
  setPopoverIndex(index);
};

function FormHabitsContent() {
  const [habitsEmojis, setHabitsEmojis] = useState(reducedHabitsEmojis);

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
  }, [habitsEmojis]);

  const [popoverIndex, setPopoverIndex] = useState(-1);

  return (
    <>
      <div className="habits">
        {Object.values(habitsEmojis).map((habit, index) => {
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
              {popoverIndex === itemIndex ? (
                <PopoverContent
                  setHabitsEmojis={setHabitsEmojis}
                  setPopoverIndex={setPopoverIndex}
                />
              ) : null}
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
