import Image from "next/image";

export default function Plans() {
  return (
    <div className="h-[100vh] max-w-[2200px] flex flex-col items-center gap-y-10 text-white w-[90vw] mx-auto">
      <div className="text-center text-4xl ">
        <h2>Our Plans</h2>
      </div>
      <div className="flex gap-10">
        <div className="w-[40vw] bg-red-300 h-[70vh]">
          <div className="h-[35vh] relative">
            <Image src="/earth.jpg" fill />
          </div>
          <div className="h-[35vh]">
            <h3>Something</h3>
            <p>
              srjfjsjs grg sdg g dsg gds gdfg dgfds d gdfs gd ds dg dg dg dsg sf
              gdfs dfsgdsg dfg gdsg dsg dgs gdsg g gd sgsd g sd gs{" "}
            </p>
            <button>click me</button>
          </div>
        </div>
        <div className="w-[40vw] bg-red-300 h-[70vh]">
          <div className="h-[35vh] relative">
            <Image src="/earth.jpg" fill />
          </div>
          <div className="h-[35vh]">
            <h3>Something</h3>
            <p>
              srjfjsjs grg sdg g dsg gds gdfg dgfds d gdfs gd ds dg dg dg dsg sf
              gdfs dfsgdsg dfg gdsg dsg dgs gdsg g gd sgsd g sd gs{" "}
            </p>
            <button>click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
