import "../css/Navigation.css";
import "../css/Root.css"

function Navigation() {
    return (
        <>
            <div className="nav-bar">
                <div className="navLogo-btn">
                    <img src="../src/assets/fitsenpai-logo.png" alt="Heello" className="logo-img"/>
                    <ul className="nav-section">
                        <li className="nav-link">Features</li>
                        <li className="nav-link">Pricing</li>
                        <li className="nav-link">FAQ</li>
                    </ul>
                </div>
                <div className="auth-btn">
                    <button className="logIn-btn">LogIn</button>
                    <button className="tryForFree-btn">Try for free</button>
                </div>
            </div>
        </>
    );
}

export default Navigation;
