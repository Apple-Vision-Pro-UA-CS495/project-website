import Description from "./description";
import Hero from "./hero";
import Technology from "./technology";

export default function Home() {
  return (
      <div className="flex flex-col">
        <Hero/>
        <Description/>
        <Technology/>
      </div>
    
  );
}
