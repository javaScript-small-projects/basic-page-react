import logo from '../assets/react.svg'
export default function Navbar() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="react logo" className="logo" onClick={handleLogoClick}/>
                <h1 id="logo-text">ReactFacts</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
function handleLogoClick() {
    alert("Welcome to react logo")
}