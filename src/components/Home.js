import React, { useState, useEffect} from "react";
import useWindowSize from '@reactutils/use-windows-size';
import "../styles/home.css";
import Confetti from 'react-confetti';

function Home() {

    const { width, height } = useWindowSize();
    const[boxClickCls, setBoxClickCls] = useState("not_clicked");
    const [xo, setXO] = useState("x");
    const[player1, setPlayer1] = useState("player1");
    const[player2, setPlayer2] = useState("player2");
    const[playerFlag, setPlayerFlag] = useState({player1: true,  player2: false});

    const[isDraw, setIsDraw] = useState(false);

    const[winner, setWinner] = useState("");
    const[isWin, setIsWin] = useState(false);
    const[totalClickedBoxes, setTotalClickedBoxes] = useState(0);

    const[boxState, setBoxState] = useState({
        1: "", 
        2: "", 
        3: "", 
        4: "", 
        5: "", 
        6: "", 
        7: "", 
        8: "", 
        9: "",
    });


    const[boxCollection, setBoxCollection] = useState({
        box1: {
            isClicked: false,
            content: ""
        },
        box2: {
            isClicked: false,
            content: ""
        },
        box3: {
            isClicked: false,
            content: ""
        },
        box4: {
            isClicked: false,
            content: ""
        },
        box5: {
            isClicked: false,
            content: ""
        },
        box6: {
            isClicked: false,
            content: ""
        },
        box7: {
            isClicked: false,
            content: ""
        },
        box8: {
            isClicked: false,
            content: ""
        },
        box9: {
            isClicked: false,
            content: ""
        },
    });
    

    useEffect(() => {
        function winner() {

            function resetState() {
                setTimeout(() => {
                    setBoxState(() =>{
                        return {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""};
                    });
                }, 4000)
                setPlayerFlag(() => {
                    return {player1: true, player2: false};
                });
                setBoxCollection(() => {
                    return {
                    box1: {
                        isClicked: false,
                        content: ""
                    },
                    box2: {
                        isClicked: false,
                        content: ""
                    },
                    box3: {
                        isClicked: false,
                        content: ""
                    },
                    box4: {
                        isClicked: false,
                        content: ""
                    },
                    box5: {
                        isClicked: false,
                        content: ""
                    },
                    box6: {
                        isClicked: false,
                        content: ""
                    },
                    box7: {
                        isClicked: false,
                        content: ""
                    },
                    box8: {
                        isClicked: false,
                        content: ""
                    },
                    box9: {
                        isClicked: false,
                        content: ""
                    },
                };
                });
                setXO("x");
                setTotalClickedBoxes(0);
            }


            function winP1() {
                setIsWin(true);
                setWinner(player1);
                setTimeout(() => {
                    setIsWin(false);
                    setWinner("");
                }, 4000);
            }

            function winP2() {
                setIsWin(true);
                setWinner(player2);
                setTimeout(() => {
                    setIsWin(false);
                    setWinner("");
                }, 4000);
            }

            if(boxState[1] === "x" && boxState[2] === "x" && boxState[3] === "x") {
                winP1();
                resetState();
            
            
            
            } else if(boxState[4] === "x" && boxState[5] === "x" && boxState[6] === "x") {
                winP1();
                resetState();
                

            
            
            } else if(boxState[7] === "x" && boxState[8] === "x" && boxState[9] === "x") {
                winP1();
                resetState();
                

            } else if(boxState[1] === "x" && boxState[4] === "x" && boxState[7] === "x") {
                winP1();
                resetState();
                

            } else if(boxState[2] === "x" && boxState[5] === "x" && boxState[8] === "x") {
                winP1();
                resetState();

            } else if(boxState[3] === "x" && boxState[6] === "x" && boxState[9] === "x") {
                winP1();
                resetState();
                

            } else if(boxState[1] === "x" && boxState[5] === "x" && boxState[9] === "x"){
                winP1();
                resetState();
                

            } else if(boxState[3] === "x" && boxState[5] === "x" && boxState[7] === "x") {
                winP1();
                resetState();
                

            } 
            
            
            
            else if(boxState[1] === "o" && boxState[2] === "o" && boxState[3] === "o") {
                winP2();
                resetState();
                

            } else if(boxState[4] === "o" && boxState[5] === "o" && boxState[6] === "o") {
                winP2();
                resetState();
                
                

            } else if(boxState[7] === "o" && boxState[8] === "o" && boxState[9] === "o") {
                winP2();
                resetState();
                
                

            } else if(boxState[1] === "o" && boxState[4] === "o" && boxState[7] === "o") {
                winP2();
                resetState();
                
                

            } else if(boxState[2] === "o" && boxState[5] === "o" && boxState[8] === "o") {
                winP2();
                resetState();
                
                

            } else if(boxState[3] === "o" && boxState[6] === "o" && boxState[9] === "o") {
                winP2();
                resetState();
                
                

            } else if(boxState[1] === "o" && boxState[5] === "o" && boxState[9] === "o"){
                winP2();
                resetState();
                
                

            } else if(boxState[3] === "o" && boxState[5] === "o" && boxState[7] === "o") {
                winP2();
                resetState();


            } else if(totalClickedBoxes === 9) {
                resetState();
                setIsDraw(true);
                setTimeout(() => {
                    setIsDraw(false);
                }, 2000);

            }
        }

    
       winner();
        
    }, [boxState]);
    


    function boxClick(e) {
        setBoxClickCls(`home__body__content__board__box_${e.target.id}_clicked`);

        if(boxCollection[`box${e.target.id}`]?.isClicked === false && boxState[e.target.id] === "") {
            setBoxState((prev) => {
                return {...prev, [e.target.id]: xo};
            });
            setBoxCollection((prev) => {
                return {...prev, [`box${e.target.id}`]: {isClicked: true, content: xo}};
            });
            setXO(
                (prev) => {
                    if(prev === "x") {
                        return "o";
                    } else {
                        return "x";
                    }
                }
            );

            setPlayerFlag((prev) => {
                if(prev.player1) {
                    return {player1: false, player2: true};
                } else {
                    return {player1: true, player2: false};
                }
            });
            setTotalClickedBoxes((prev) => {
                return prev + 1;
            });

        }

    }

    function names(e) {
        if(e.target.id === "p1") {
            setPlayer1(e.target.value);
        } else {
            setPlayer2(e.target.value);
        }
    }

    

    return(
        <div className="home">
            {isWin && <Confetti width={width} height={height}/>}
            <div className="header">
                <div className="header__text">
                    <h1>xo</h1>
                    <div className="header__text__line"></div>
                </div>
            </div>
            <div className="body">
                
                <div className="home__body__names">
                    <div className="home__body__names__player_1">
                        <input type="text" placeholder="Player 1" id="p1" onChange={names} value={player1}/>
                        <h1>:X</h1>
                    </div>
                    <div className="home__body__names__player_2">
                        <input type="text" placeholder="Player 2" id="p2" onChange={names} value={player2}/>
                        <h1>:O</h1> 
                    </div>
                </div>
                <div className="home__body__content">
                    <div className="home__body__content__playing">
                        <h2>{(isDraw || isWin) ? (isDraw ? "Draw. Wait till the board Refreshes" : `The Winner is ${winner}`) : `Playing: ${playerFlag.player1 && player1 || playerFlag.player2 && player2}`}</h2>
                    </div>
                    <div className="home__body__content__board">
                        <div id="1" className={`home__body__content__board__box_1 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[1]}</p>
                        </div>

                        <div id="2" className={`home__body__content__board__box_2 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[2]}</p>
                        </div>

                        <div id="3" className={`home__body__content__board__box_3 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[3]}</p>
                        </div>

                        <div id="4" className={`home__body__content__board__box_4 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[4]}</p>
                        </div>

                        <div id="5" className={`home__body__content__board__box_5 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[5]}</p>
                        </div>

                        <div id="6" className={`home__body__content__board__box_6 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[6]}</p>
                        </div>
                        
                        <div id="7" className={`home__body__content__board__box_7 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[7]}</p>
                        </div>
                        
                        <div id="8" className={`home__body__content__board__box_8 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[8]}</p>
                        </div>
                        
                        <div id="9" className={`home__body__content__board__box_9 ${boxClickCls} home__body__content__board__box`} onClick={boxClick}>
                            <p>{boxState[9]}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;


