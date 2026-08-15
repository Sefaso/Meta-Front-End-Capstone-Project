import './Specials.css';

function Specials() {
    const specials = [
        {
            name: "Greek salad",
            price: "$12.99",
            description:
                "Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "/image_assets/greek salad.jpg", // replace with actual image path
        },
        {
            name: "Lemon desert",
            price: "$4.99",
            description:
                "Placeholder: Information is not really important.",
            image: "/image_assets/lemon dessert.jpg",
        },
        {
            name: "Bruchetta",
            price: "$7.99",
            description: "A Spanish tapa idk",
            image: "/image_assets/bruchetta.jpg",
        }
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