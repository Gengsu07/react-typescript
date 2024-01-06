import { TCGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

const CourseGoalList = ({
  onDeleteGoal,
  items,
  maxItems,
}: {
  onDeleteGoal: (id: number) => void;
  items: TCGoal[];
  maxItems: number;
}) => {
  return (
    <main className="flex flex-col justify-start items-center gap-5 w-full">
      {items.length === 0 && (
        <InfoBox mode="hint" text="Please add a goal first" />
      )}
      {items.length > maxItems && (
        <InfoBox mode="warning" text="You have more than 2 goals" />
      )}

      <div className="flex flex-wrap justify-around items-center gap-5 my-5 mx-5">
        {items.map((goal) => (
          <div
            key={goal.id}
            className="bg-slate-600 px-5 py-2 rounded-lg shadow-lg "
          >
            <CourseGoal goals={goal} onDelete={onDeleteGoal} />
          </div>
        ))}
      </div>
    </main>
  );
};
export default CourseGoalList;
