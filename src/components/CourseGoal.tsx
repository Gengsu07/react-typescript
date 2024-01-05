export type TCourseGoal = {
  goals: { id: number; title: string; description: string };
  onDelete: (id: number) => void;
};

const CourseGoal = ({
  goals: { id, title, description },
  onDelete,
}: TCourseGoal) => {
  return (
    <section>
      <div className="flex justify-between gap-1">
        <h2 className="text-white font-bold text-2xl">{title}</h2>
        <button
          className="text-slate-300 px-1 py-1 rounded-lg text-sm"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
      <p className="text-white">{description}</p>
    </section>
  );
};
export default CourseGoal;
