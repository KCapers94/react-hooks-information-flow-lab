import React from "react"





function Header ({onDarkModeClick, isDarkMode}) {

    return (
        <div className={`App ${isDarkMode ? "dark" : "light"}`}>
            <header>
                <h2>Shopster</h2>
                <button onClick= {e => onDarkModeClick(!isDarkMode)} >
                {isDarkMode ? "Dark Mode" : "Light Mode"}
                </button>
            </header>
        </div>
    )
    
}

export default Header