const PizzaTypes = () => {
  const pizzas = [
    {
      imageSrc: "images/pizza3.jpg",
      title: "Pepperoni Pizza",
      description: "Classic pizza topped with pepperoni slices.",
    },
    {
      imageSrc: "images/pizza5.jpg",
      title: "Chicken Pizza",
      description: "Pizza topped with grilled chicken and veggies.",
    },
    {
      imageSrc: "images/pizza6.jpg",
      title: "Sausage Pizza",
      description: "Pizza topped with Italian sausage and bell peppers.",
    },
    {
      imageSrc: "images/pizza7.jpg",
      title: "Vegetable Pizza",
      description: "Pizza topped with a variety of fresh vegetables.",
    },
  ];

  return (
    <>
      <div className="container  pizza-types">
        <div className="row">
          <h3 className="mx-auto">Pizza Types</h3>
        </div>
      </div>

      <div className="row mx-auto">
        {pizzas.map((pizza, index) => (
          <div className="col-md-3" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pizza.imageSrc} className="card-img-top" alt="Pizza" />
              <div className="card-body">
                <h5 className="card-title">{pizza.title}</h5>
                <p className="card-text">{pizza.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default PizzaTypes;