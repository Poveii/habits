import habitsEmojisList from "../habits.json";

const menuHabitsEmojis = Object.keys(habitsEmojisList)
  .filter((i) => i > 5)
  .reduce((obj, key) => {
    return Object.assign(obj, { [key]: habitsEmojisList[key] });
  }, {});

function PopoverContent() {
  return (
    <div className="popoverContent">
      {Object.values(menuHabitsEmojis).map((item) => {
        return <div key={item.name}>{item.emoji}</div>;
      })}
    </div>
  );
}

export default PopoverContent;
