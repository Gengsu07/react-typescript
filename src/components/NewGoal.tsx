import { SubmitHandler, useForm } from "react-hook-form";

export type TNewGoal = {
  goal: string;
  description: string;
};

const NewGoal = ({ onAddGoal }: { onAddGoal: (data: TNewGoal) => void }) => {
  const { register, handleSubmit, reset } = useForm<TNewGoal>();

  const onSubmitGoal: SubmitHandler<TNewGoal> = (data: TNewGoal) => {
    onAddGoal(data);
    reset();
  };
  return (
    <section className="w-full px-5">
      <form
        className="flex flex-col justify-center items-start w-full"
        onSubmit={handleSubmit(onSubmitGoal)}
      >
        <label className="font-bold text-slate-300 w-full">YOUR GOAL</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md mt-1 bg-slate-200 outline-none"
          placeholder="Your Goal"
          {...register("goal", { required: true })}
        />
        <label className="font-bold text-slate-300 w-full mt-5 ">
          Description
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md mt-1 bg-slate-200 outline-none"
          placeholder="Your Course Goal Description"
          {...register("description", { required: true })}
        />
        <button className="bg-amber-200 rounded-md py-3 px-2 w-full mt-5 font-bold text-xl">
          Add Goal
        </button>
      </form>
    </section>
  );
};
export default NewGoal;
