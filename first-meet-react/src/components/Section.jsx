import pompompurin from "../assets/pompompurin.jpg"

export default function Section() {
  return (
    <section className=" gap-4 p-5 bg-amber-100 flex ">
      <ul className="list-inside list-disc flex-1">
        <span className="font-semibold">IMG responsive:</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src={pompompurin}/>
          <img src={pompompurin}/>
          <img src={pompompurin}/>
          <img src={pompompurin}/>
          <img src={pompompurin}/>
          <img src={pompompurin}/>
          
          
        </div>
      </ul>
    </section>
  );
}