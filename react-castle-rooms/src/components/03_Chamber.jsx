import Room from "./04_Room";

export default function Chamber() {
    return (
    <div className="flex flex-col justify-center items-center pt-18 bg-yellow-500 w-[90%]">
        <h1>Chamber</h1>
        {/* Render Chamber here */}
        <Room />
    </div>
    );
}