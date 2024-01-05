import { useState } from "react";
import CourseGoal from "./CourseGoal";

type TCGoal = {
  id: number;
  title: string;
  description: string;
};
const CourseGoalList = () => {
  const [items, setItems] = useState<TCGoal[]>([]);

  const handleAddGoal = () => {
    setItems((prevGoals) => [
      ...prevGoals,
      {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      },
    ]);
  };
  const handleDeleteGoal = (id: number) => {
    setItems((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className="flex flex-col justify-start items-center gap-5">
      <button
        className=" bg-white rounded-lg px-2 py-2 "
        onClick={handleAddGoal}
      >
        Add goal
      </button>
      <div className="flex flex-wrap justify-around items-center gap-5 my-5 mx-5">
        {items.map((goal) => (
          <div
            key={goal.id}
            className="bg-slate-600 px-5 py-2 rounded-lg shadow-lg "
          >
            <CourseGoal goals={goal} onDelete={handleDeleteGoal} />
          </div>
        ))}
      </div>
    </main>
  );
};
export default CourseGoalList;
