import DemoVideo from "./home/demo";
import Description from "./home/description";
import Hero from "./home/hero";
import Technology from "./home/technology";

export default function Home() {
  return (
      <div className="flex flex-col">
        <Hero/>
        <Description/>
        <Technology/>
        <DemoVideo/>
      </div>
    
  );
}
