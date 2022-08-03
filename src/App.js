import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [History, setHistory] = useState('');
    const [Data, setData] = useState('');
    const [Res, setRes] = useState([]);
    let key = 1;
    const [Count, SetCount] = useState(0);
    useEffect(() => {
        if (Count < 2) {
            SetCount((prev) => (prev = prev + 1));
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${Data.toLowerCase()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then((res) => res.json())
                .then((data) =>
                    setRes((prev) => [
                        ...prev,
                        `muneeb@me# `,
                        `Name: ${data.name}`,
                        `Height: ${data.height}m`,
                        `Weight: ${data.weight}kgs`,
                        `Types: ${(data.types.map(ele => ele.type.name)).join(',')}`
                    ])
                )
                .catch((err) => {
                    setRes((prev) => [
                        ...prev,
                        'muneeb@me# Enter a valid poke`mon'
                    ]);
                    console.log(err);
                });
        }
        return () => {};
    }, [Data]);

    const test = (e) => {
        const { value } = e.target;
        if (e.code === `Enter`) {
            setRes((prev) => [...prev, ...verify(value)]);
            e.target.value = '';
        }
    };

    const verify = (key) => {
        setHistory((prev) => [...prev, key]);
        switch (key.split(' ')[0]) {
            case `help`:
                return [
                    `muneeb@me# whois - Find more about Mohd Muneeb, a Full Stack Developer who works with ReactJS. />`,
                    `about -  About the Technologies used while making this Web App />`,
                    `srccode - view the source code for this WebApp on Github`,
                    `sudo - Don't go sudo unless you are root`,
                    `help - Get a list of all the available commands`,
                    `info - Get more info on this WebApp`,
                    `search - Search a poke'mon you wish to gain info about. The syntax for search is : search "poke'mon_name_"`,
                    `clear - Clear your screen`,
                    `history - View the list of commands used in this session`,
                    `protfolio - visit my portfolio!`
                ];

            case `clear`:
                setRes([]);
                return [''];

            case `whois`:
                return [
                    `muneeb@me# the author of this project is me, Muneeb Mohd. To know more about me visit my portfolio! Use the portfolio command to take a look at it`
                ];

            case `about`:
                return [
                    `muneeb@me# I would like to start this by thanking omDb who's API service made this app possible. A huge thanks to them! Do visit them on url`
                ];

            case `search`:
                FetchMovieData(key.split(' ')[1]);
                return '';

            case `portfolio`:
                window.open(`http://www.mohdmuneeb.live`, `_blank`);
                break;
            case `history`:
                return [
                    `muneeb@me# History for this current session :- ${History}`
                ];
            default:
                return [
                    `muneeb@me# Wrong Command has been entered, please use <help> command to guide you with this website`
                ];
        }
    };

    function FetchMovieData(title) {
        setData(title);
    }

    return (
        <div className="App">
            {Res.map((e) => (
                <p className="display" key={key++}>
                    {e}
                </p>
            ))}
            <div className="cli">
                <p>~$</p>
                <input
                    className="input-terminal"
                    onKeyUp={test}
                    placeholder="Insert cmd here"
                ></input>
            </div>
        </div>
    );
}

export default App;
