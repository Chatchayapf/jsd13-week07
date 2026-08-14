import Room from "./04_Room";

export default function Chamber({question, answer, handleQuestion}) {
    return (
    <div className="flex flex-col justify-center items-center pt-18 bg-yellow-500 w-[90%]">
        <h1>Chamber</h1>
        {/* Render Chamber here */}
        <Room question={question} answer={answer} handleQuestion={handleQuestion}/>
    </div>
    );
}