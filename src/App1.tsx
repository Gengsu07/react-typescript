import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import TodoImg from "./assets/img-todo.png";
import NewGoal, { TNewGoal } from "./components/NewGoal";
import { useState } from "react";

export type TCGoal = {
  id: number;
  title: string;
  description: string;
};

const App1 = () => {
  const [items, setItems] = useState<TCGoal[]>([]);

  const handleAddGoal = (data: TNewGoal) => {
    setItems((prevGoals) => [
      ...prevGoals,
      {
        id: Math.random(),
        title: data.goal,
        description: data.description,
      },
    ]);
  };
  const handleDeleteGoal = (id: number) => {
    setItems((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  const maxItems = 2;

  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col justify-start items-center gap-5 mx-auto my-5 w-1/2  rounded-lg bg-slate-700 py-5">
        <Header img={{ src: TodoImg, alt: "App logo" }}>
          <h1 className="text-amber-200 text-4xl text-center font-bold">
            Your Course Goals
          </h1>
        </Header>
        {items.length <= maxItems && <NewGoal onAddGoal={handleAddGoal} />}
        <CourseGoalList
          onDeleteGoal={handleDeleteGoal}
          items={items}
          maxItems={maxItems}
        />
      </div>
    </main>
  );
};
export default App1;
