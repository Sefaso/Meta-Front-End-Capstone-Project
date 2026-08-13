import './Specials.css';

function Specials() {
    const specials = [
        {
            name: "Greek salad",
            price: "$12.99",
            description:
                "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "greek-salad.jpg", // replace with actual image path
        },
        // add more specials here...
    ];

    return (
        <section>
            <h4 className="section-title">This week's specials!</h4>
            <div className="grid-3">
                {specials.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.name} className="shadow" />
                        <h3 className="card-title">{item.name}</h3>
                        <p className="highlight">{item.price}</p>
                        <p>{item.description}</p>
                        <button className="btn-primary">Order a delivery</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specials;