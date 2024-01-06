export type InfoProps = {
  mode: "hint" | "warning";
  text: string;
};

const InfoBox = ({ mode, text }: InfoProps) => {
  if (mode === "hint")
    return (
      <aside className="border-teal-700 border-[1px] py-7  px-5 w-[95%] rounded-lg  flex justify-center items-center">
        <p className="text-teal-700 font-mono">{text}</p>
      </aside>
    );
  return (
    <aside className="border-amber-500 border-[1px] py-7  px-5 w-[95%] rounded-lg  flex flex-col justify-center items-center">
      <h1 className="text-amber-500 font-bold text-center text-xl">Warning</h1>
      <p className="text-amber-500 border-amber-500 font-mono">{text}</p>
    </aside>
  );
};
export default InfoBox;
