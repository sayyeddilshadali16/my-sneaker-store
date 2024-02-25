import "./Products.css";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">
        <div className="new-container">
          {result}
        </div>
      </section>
    </>
  );
};

export default Products;