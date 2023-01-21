import { useEffect } from "react";

function FormHabitsContent() {
  useEffect(() => {
    const formHabits = document.querySelector("#form-habits");
    const nlwSetup = new NLWSetup(formHabits);

    const data = {
      run: ["01-19", "01-20", "01-22"],
      water: ["01-20"],
      food: ["01-21"],
    };

    nlwSetup.setData(data);
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
