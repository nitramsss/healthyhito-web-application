import "../css/HomeFace.css";
import "../css/Root.css";
import LogInBody from "./LogInBody";

import MealForm from "./MealForm";

function HomeFace() {
    return (
        <>
            <div className="home-page">
                <h1>
                    Eat Healthy, <br /> Live Healthy
                </h1>
                <p className="home-slogan">
                    Personalized meal plans, and grocery lists —{" "}
                    <span>all for less</span>
                    <br /> than what you’d pay a trainer for one session.
                </p>
                <MealForm />

            </div>
        </>
    );
}

export default HomeFace;
