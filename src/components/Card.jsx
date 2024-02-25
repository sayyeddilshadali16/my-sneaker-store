import { BsFillBagFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section key={id} className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
            <NavLink to={`/productdetails/${id}`}>
              <button className="buy-btn">
                <span className="btn-span">Buy now</span>
              </button>
            </NavLink>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;