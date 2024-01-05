import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import TodoImg from "./assets/img-todo.png";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col justify-start items-center gap-5 mx-auto my-5 w-3/5 h-[90%] rounded-lg bg-slate-700 py-5">
        <Header img={{ src: TodoImg, alt: "App logo" }}>
          <h1 className="text-amber-300 text-4xl text-center font-bold">
            Your Course Goals
          </h1>
        </Header>
        <CourseGoalList />
      </div>
    </main>
  );
};
export default App;
