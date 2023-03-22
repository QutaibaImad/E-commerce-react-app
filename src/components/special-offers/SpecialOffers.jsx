import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import "./special-offers.css";

const SpecialOffers = () => {


  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        Huge Discounts For Today
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>For Only 24 Hours
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((item) => (
          <Offer key={item.id} offer={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
