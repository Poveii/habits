import habitsEmojisList from "../habits.json";
import { reduceObjectArrayToFive } from "./FormHabitsContent";

const swapElements = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

function findObjectIndexFromValue(element) {
  return Object.values(habitsEmojisList).findIndex((e) => e.emoji === element);
}

function PopoverContent({ setHabitsEmojis, setPopoverIndex }) {
  const menuHabitsEmojis = Object.keys(habitsEmojisList)
    .filter((i) => i > 5)
    .reduce((obj, key) => {
      return Object.assign(obj, { [key]: habitsEmojisList[key] });
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

              const emojiClickedObjectIndex =
                findObjectIndexFromValue(emojiClicked);
              const emojiToMenuObjectIndex =
                findObjectIndexFromValue(emojiToMenu);

              const newHabitsEmojis = habitsEmojisList;

              swapElements(
                newHabitsEmojis,
                emojiToMenuObjectIndex,
                emojiClickedObjectIndex
              );

              const reducedNewHabitsEmojis =
                reduceObjectArrayToFive(newHabitsEmojis);

              setHabitsEmojis(reducedNewHabitsEmojis);
              setPopoverIndex(-1);
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
