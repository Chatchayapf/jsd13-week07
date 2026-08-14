import Hall from "./05_Hall";

export default function Room({question, answer, handleQuestion}) {
    return (
    <div className="flex flex-col justify-center items-center pt-18 bg-lime-500 w-[90%]">
        <h1>Room</h1>
        {/* Render Hall here */}
        <Hall question={question} answer={answer} handleQuestion={handleQuestion}/>
    </div>
    );
}