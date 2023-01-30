import habitsEmojisList from "../habits.json";
import { reduceObjectArrayToFive } from "./FormHabitsContent";

const swapElements = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

function findObjectIndexFromValue(object, element) {
  return Object.values(object).findIndex((e) => e.emoji === element);
}

function PopoverContent({ setHabitsEmojis, setPopoverIndex }) {
  let actualHabitsEmojis =
    JSON.parse(localStorage.getItem("NLWSetup@emojis")) || habitsEmojisList;

  const menuHabitsEmojis = Object.keys(actualHabitsEmojis)
    .filter((i) => i > 5)
    .reduce((obj, key) => {
      return Object.assign(obj, { [key]: actualHabitsEmojis[key] });
    }, {});

  return (
    <div className="popoverContent">
      {Object.values(menuHabitsEmojis).map((item) => {
        return (
          <div
            key={item.name}
            onClick={(e) => {
              const emojiClicked = e.target.innerHTML;
              const emojiToMenu =
                e.target.parentNode.parentNode.childNodes[0].textContent;

              const emojiClickedObjectIndex = findObjectIndexFromValue(
                actualHabitsEmojis,
                emojiClicked
              );
              const emojiToMenuObjectIndex = findObjectIndexFromValue(
                actualHabitsEmojis,
                emojiToMenu
              );

              const newHabitsEmojis = actualHabitsEmojis;

              swapElements(
                newHabitsEmojis,
                emojiToMenuObjectIndex,
                emojiClickedObjectIndex
              );

              const reducedNewHabitsEmojis =
                reduceObjectArrayToFive(newHabitsEmojis);

              setHabitsEmojis(reducedNewHabitsEmojis);
              setPopoverIndex(-1);
              localStorage.setItem(
                "NLWSetup@emojis",
                JSON.stringify(newHabitsEmojis)
              );
            }}
          >
            {item.emoji}
          </div>
        );
      })}
    </div>
  );
}

export default PopoverContent;
