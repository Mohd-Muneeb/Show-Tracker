import React from 'react';
import '../src/teminal.css';

function NavBar(props) {
    return (
        <nav className="navbar">
            <h1>Welcome to $Cli Poke`dex</h1>
            <div>
                <p className="Intro">
                    This is a place to check out information about all your fav
                    movies in a command line based webapp type "help" to get
                    started with the web app to recieve all the help
                </p>
            </div>
        </nav>
    );
}

export default NavBar;
