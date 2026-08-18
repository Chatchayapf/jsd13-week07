import Chamber from "./03_Chamber";

export default function Tower({question, answer, handleAnswer}) {
    // console.log(question);
    return (
    <div className="flex flex-col justify-center items-center pt-18 bg-orange-500 w-[90%]">
        <h1>Tower</h1>
        {/* Render Tower here */}
        <Chamber 
        question={question} 
        answer={answer} 
        handleAnswer={handleAnswer}/>
    </div>
    );
}
