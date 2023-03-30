import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title">We Are Always Here To Help You</h3>
        <div className="footer-top-email">
          <span className="footer-top-email-text">Contact Me With Email</span>
          <span className="footer-top-email-address">
            <i className="bi bi-envelope"></i>
            qutaiba.imad.saleh@gmail.com
          </span>
        </div>
      </div>
      <div className="footer-items-wrapper">
        <div className="footer-item">
          <h4 className="footer-item-title">Electronics</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Cameras</li>
            <li className="footer-item-link">HouseHold Appliance </li>
            <li className="footer-item-link">Phones</li>
            <li className="footer-item-link">HeadPhones</li>
            <li className="footer-item-link">TVs</li>
            <li className="footer-item-link">Tap Phones</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">Fashion</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Women's Clothing</li>
            <li className="footer-item-link">Men's Clothing</li>
            <li className="footer-item-link">Boy's Clothing</li>
            <li className="footer-item-link">Glasses</li>
            <li className="footer-item-link">Jewelry</li>
            <li className="footer-item-link">Watches</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">Home Devices</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Home Decorations</li>
            <li className="footer-item-link">Furniture</li>
            <li className="footer-item-link">Kitchen Supplies</li>
            <li className="footer-item-link">Toiletries</li>
            <li className="footer-item-link">Sound Devices</li>
            <li className="footer-item-link">Garden Supplies</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">Buty</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Perfumes</li>
            <li className="footer-item-link">Make Up</li>
            <li className="footer-item-link">Hair Care</li>
            <li className="footer-item-link">Skin Care</li>
            <li className="footer-item-link">Body And Shower</li>
            <li className="footer-item-link">Health Care Products</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
