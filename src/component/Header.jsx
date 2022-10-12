import { useState } from "react";
import "../style/header.css"

function Header(){
    const [isDark, setIsDark] = useState(false);
    function handleDarkMode() {
        setIsDark(!isDark);
        console.log ("dark mode ", isDark);
    }

    return (
        <div className="header">
            <h1>Where in the world?</h1>
            <button onClick={handleDarkMode}>Dark Mode</button>
        </div>
    )
}

export default Header;