import React from 'react';

const Landing = () => (
    <section className="landing">
        <h1 className="hero-title">Turn the music up!</h1>

        <section className="selling-points">
            <div className="point">
                <h2 className="point-title">Choose your royalty free music</h2>
                <p className="point-description">The world is full of free music; why should you pay for it?</p>
            </div>
            <div className="point">
                <h2 className="point-title">Unlimited, free, ad-driven</h2>
                <p className="point-description">No arbitrary limits. All of our limits are well thought out.</p>
            </div>
            <div className="point">
                <h2 className="point-title">Mobile enabled</h2>
                <p className="point-description">Listen to your music anywhere on the go</p>
            </div>
        </section>
    </section>
);

export default Landing;