import React from 'react';
import "../styles/twoPlayerBlitz.css";
import Header from './Header';
import BlitzPlayground from './BlitzPlayground';


function TwoPlayerBlitz() {
    return (
        <div className='two_player_blitz'>
            <div className='two_player_blitz__header'>
                <Header title="Blitz"/>
            </div>
            <div className='two_player_blitz__body'>
                <BlitzPlayground />
            </div>
        </div>
    );
}

export default TwoPlayerBlitz;

