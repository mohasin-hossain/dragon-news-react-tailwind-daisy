import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {

  return (
    <div className="flex my-4">
      <button className="btn rounded-none tracking-widest btn-primary italic uppercase">Breaking News</button>
      <Marquee className="border border-x-0 border-primary bg-base-200 font-semibold" pauseOnHover={true} speed={100}>
        <Link className="border-x-2 border-primary p-2 mx-2" to="/">‘Self-obsessed liar’: Meghan mocked for Mandela story.</Link>
        <Link className="border-r-2 border-primary p-2 mx-2" to="/">California to phase out sales of gas-powered cars.</Link>
        <Link className="border-r-2 border-primary p-2 mx-2" to="/">Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy.</Link>
        <Link className="p-2 mx-2" to="/">Opinion: After a summer of surprising successes, President Biden is on a roll.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
