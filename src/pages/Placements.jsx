import Assistance from "../components/Placements/Assistance";
import Closing from "../components/Placements/Closing";
import Hero from "../components/Placements/Hero";
import PlacementCell from "../components/Placements/PlacementCell";
import Timeline from "../components/Placements/Timeline";
import Training from "../components/Placements/Training";

export default function PlacementsPage() {
  return (
    <div className="bg-light-bg text-dark-text selection:bg-gold/30 selection:text-dark-text">
      <Hero />
      <Timeline />
      <PlacementCell />
      <Assistance />
      
      <Training />
      
      <Closing />
    </div>
  );
}