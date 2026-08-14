import Gallery from "./07_Gallery";

export default function Corridor({question, answer, handleAnswer}) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-sky-500 w-[75%]">
      <h1>Corridor</h1>
      {/* Render Gallery here */}
      <Gallery question={question} answer={answer} handleAnswer={handleAnswer}/>
    </div>
  );
}
