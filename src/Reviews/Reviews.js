import './Reviews.css';

function Reviews() {
    const reviews = [
        { name: "John", rating: 5, text: "Amazing food!" },
        {name: "Customer X", rating: 2.5, text: "Meh"}
        // add more...
    ];

    return (
        <section>
            <h2>What our customers say</h2>
            <div className="grid-3">
                {reviews.map((review, idx) => (
                    <div className="card" key={idx}>
                        <p>⭐ {review.rating}/5</p>
                        <p>{review.text}</p>
                        <p><strong>{review.name}</strong></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;