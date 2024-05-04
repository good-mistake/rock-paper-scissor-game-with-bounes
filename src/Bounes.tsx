import React from "react";
import { ReactComponent as Paper } from "./images/icon-paper.svg";
import { ReactComponent as Rock } from "./images/icon-rock.svg";
import { ReactComponent as Scissors } from "./images/icon-scissors.svg";
import { ReactComponent as Spock } from "./images/icon-spock.svg";
import { ReactComponent as Lizard } from "./images/icon-lizard.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Rules } from "./images/image-rules-bonus.svg";
import { ReactComponent as Logo } from "./images/logo-bonus.svg";
import { useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
const initialState = {
  userChoice: "",
  housePick: "",
  score: 0,
  isLoadingHousePick: true,
  winnerResult: "",
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_CHOICE":
      return { ...state, userChoice: action.payload };
    case "SET_HOUSE_PICK":
      return { ...state, housePick: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_LOADING":
      return { ...state, isLoadingHousePick: action.payload };
    case "SET_WINNER_RESULT":
      return { ...state, winnerResult: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
};

const Bounes = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    userChoice,
    housePick,
    score,
    isLoadingHousePick,
    winnerResult,
    showModal,
  } = state;

  const handleHomePage = () => {
    navigate("/");
  };
  const getRandomItem = (delay: number): Promise<string> => {
    return new Promise<string>((resolve) => {
      const items = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random() * items.length);
      const randomItem = items[randomNumber];
      setTimeout(() => {
        resolve(randomItem);
      }, delay);
    });
  };
  const handleOptionChange = (value) => {
    dispatch({ type: "SET_USER_CHOICE", payload: value });
  };
  const handleUserChoice = () => {
    if (userChoice === "paper") {
      return (
        <div>
          {winnerResult === "WIN" ? (
            <div
              className={`${
                winnerResult === "WIN" ? "winnerContainer" : ""
              } option paper `}
            >
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <Paper />
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
            </div>
          ) : (
            <div className="option paper">
              {" "}
              <Paper />
            </div>
          )}
        </div>
      );
    } else if (userChoice === "rock") {
      return (
        <div>
          {winnerResult === "WIN" ? (
            <div
              className={`${
                winnerResult === "WIN" ? "winnerContainer" : ""
              } option rock `}
            >
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <Rock />
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
            </div>
          ) : (
            <div className="option rock">
              {" "}
              <Rock />
            </div>
          )}
        </div>
      );
    } else if (userChoice === "spock") {
      return (
        <div>
          {winnerResult === "WIN" ? (
            <div
              className={`${
                winnerResult === "WIN" ? "winnerContainer" : ""
              } option spock `}
            >
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <Spock />
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
            </div>
          ) : (
            <div className="option spock">
              {" "}
              <Spock />
            </div>
          )}
        </div>
      );
    } else if (userChoice === "lizard") {
      return (
        <div>
          {winnerResult === "WIN" ? (
            <div
              className={`${
                winnerResult === "WIN" ? "winnerContainer" : ""
              } option lizard `}
            >
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <Lizard />
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
            </div>
          ) : (
            <div className="option lizard">
              {" "}
              <Lizard />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {winnerResult === "WIN" ? (
            <div
              className={`${
                winnerResult === "WIN" ? "winnerContainer" : ""
              } option scissors `}
            >
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <Scissors />
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
            </div>
          ) : (
            <div className="option scissors">
              {" "}
              <Scissors />
            </div>
          )}
        </div>
      );
    }
  };
  function handleHousePick() {
    if (isLoadingHousePick) {
      return <div className="loading"></div>;
    }

    return (
      <>
        {housePick === "paper" && (
          <div>
            {winnerResult === "LOSE" ? (
              <div
                className={`${
                  winnerResult === "LOSE" ? "winnerContainer" : ""
                } option paper `}
              >
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <Paper />
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
              </div>
            ) : (
              <div className="option paper">
                {" "}
                <Paper />
              </div>
            )}
          </div>
        )}
        {housePick === "rock" && (
          <div>
            {winnerResult === "LOSE" ? (
              <div
                className={`${
                  winnerResult === "LOSE" ? "winnerContainer" : ""
                } option rock `}
              >
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <Rock />
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
              </div>
            ) : (
              <div className="option rock">
                {" "}
                <Rock />
              </div>
            )}
          </div>
        )}
        {housePick === "spock" && (
          <div>
            {winnerResult === "LOSE" ? (
              <div
                className={`${
                  winnerResult === "LOSE" ? "winnerContainer" : ""
                } option spock `}
              >
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <Spock />
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
              </div>
            ) : (
              <div className="option spock">
                {" "}
                <Spock />
              </div>
            )}
          </div>
        )}
        {housePick === "lizard" && (
          <div>
            {winnerResult === "LOSE" ? (
              <div
                className={`${
                  winnerResult === "LOSE" ? "winnerContainer" : ""
                } option lizard `}
              >
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <Lizard />
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
              </div>
            ) : (
              <div className="option lizard">
                {" "}
                <Lizard />
              </div>
            )}
          </div>
        )}
        {housePick === "scissors" && (
          <div>
            {winnerResult === "LOSE" ? (
              <div
                className={`${
                  winnerResult === "LOSE" ? "winnerContainer" : ""
                } option scissors `}
              >
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <Scissors />
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
              </div>
            ) : (
              <div className="option scissors">
                <Scissors />
              </div>
            )}
          </div>
        )}
      </>
    );
  }

  const handleWinner = (user: string, house: string) => {
    const rules = {
      rock: { beats: ["scissors", "lizard"], losesTo: ["paper", "spock"] },
      paper: { beats: ["rock", "spock"], losesTo: ["scissors", "lizard"] },
      scissors: { beats: ["paper", "lizard"], losesTo: ["rock", "spock"] },
      lizard: { beats: ["spock", "paper"], losesTo: ["rock", "scissors"] },
      spock: { beats: ["scissors", "rock"], losesTo: ["paper", "lizard"] },
    };
    const lowercaseUserChoice = user.toLowerCase();
    if (!rules[lowercaseUserChoice]) {
      console.error("Invalid user choice:", lowercaseUserChoice);
      return;
    }
    if (lowercaseUserChoice === house) {
      dispatch({ type: "SET_WINNER_RESULT", payload: "TIE" });
    } else if (rules[lowercaseUserChoice].beats.includes(house)) {
      dispatch({ type: "SET_SCORE", payload: score + 1 });
      dispatch({ type: "SET_WINNER_RESULT", payload: "WIN" });
    } else {
      dispatch({ type: "SET_WINNER_RESULT", payload: "LOSE" });
    }
  };

  useEffect(() => {
    if (userChoice.length > 1) {
      dispatch({ type: "SET_LOADING", payload: true });
      getRandomItem(1000).then((randomPick) => {
        dispatch({ type: "SET_HOUSE_PICK", payload: randomPick });
        dispatch({ type: "SET_LOADING", payload: false });
      });
    }
  }, [userChoice]);

  useEffect(() => {
    if (housePick && !isLoadingHousePick) {
      const timer = setTimeout(() => {
        handleWinner(userChoice, housePick);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [housePick, isLoadingHousePick]);

  const handlePlayAgain = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_WINNER_RESULT", payload: "" });
    dispatch({ type: "SET_HOUSE_PICK", payload: "" });
    dispatch({ type: "SET_USER_CHOICE", payload: "" });

    getRandomItem(1000).then((randomPick) => {
      dispatch({ type: "SET_HOUSE_PICK", payload: "" }); //fix it here the rendering issue persist
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };
  return (
    <>
      <div className="containerInBounesPage">
        <header>
          <h1>
            <Logo />
          </h1>
          <ul id="scoreList">
            <li>
              Score <span id="score">{score}</span>
            </li>
          </ul>
        </header>
        <main>
          {" "}
          <section className={userChoice.length > 1 ? "close" : "open"}>
            <div>
              <div>
                <input
                  type="radio"
                  id="scissors"
                  name="options"
                  value="scissors"
                  checked={userChoice === "scissors"}
                  onChange={() => handleOptionChange("scissors")}
                />
                <label htmlFor="scissors" className="option scissors">
                  <Scissors />
                </label>
              </div>
              <div>
                {" "}
                <input
                  type="radio"
                  id="spock"
                  name="options"
                  value="spock"
                  checked={userChoice === "spock"}
                  onChange={() => handleOptionChange("spock")}
                />
                <label className="option spock" htmlFor="spock">
                  <Spock />
                </label>{" "}
                <input
                  type="radio"
                  id="paper"
                  name="options"
                  value="paper"
                  checked={userChoice === "paper"}
                  onChange={() => handleOptionChange("paper")}
                />
                <label className="option paper" htmlFor="paper">
                  <Paper />
                </label>
              </div>
              <div>
                {" "}
                <input
                  type="radio"
                  id="lizard"
                  name="options"
                  value="lizard"
                  checked={userChoice === "lizard"}
                  onChange={() => handleOptionChange("lizard")}
                />
                <label className="option lizard" htmlFor="lizard">
                  <Lizard />
                </label>{" "}
                <input
                  type="radio"
                  id="rock"
                  name="options"
                  value="rock"
                  checked={userChoice === "rock"}
                  onChange={() => handleOptionChange("rock")}
                />
                <label className="option rock" htmlFor="rock">
                  <Rock />
                </label>{" "}
              </div>
            </div>
          </section>{" "}
          {showModal && (
            <>
              {" "}
              <div className="overlay" onClick={() => toggleModal()}></div>{" "}
              <div className="modal">
                <h2>RULES</h2>{" "}
                <div onClick={() => toggleModal()} className="closeBtn">
                  <Close />
                </div>
                <div>
                  <Rules />
                </div>
              </div>
            </>
          )}
        </main>
        <div className="resultsContainer">
          {" "}
          {userChoice.length > 1 ? (
            <div className="results">
              <div>
                {" "}
                <h3>YOU PICKED</h3>
                <div> {handleUserChoice()}</div>
              </div>{" "}
              {winnerResult &&
                (winnerResult === "TIE" ? (
                  <div>
                    <h2>It's a tie</h2>
                    <button onClick={handlePlayAgain}>PLAY AGAIN</button>
                  </div>
                ) : (
                  <div>
                    <h2>YOU {winnerResult}</h2>
                    <button onClick={handlePlayAgain}>PLAY AGAIN</button>
                  </div>
                ))}
              <div>
                <h3>THE HOUSE PICKED</h3>
                <div> {handleHousePick()}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <footer>
          <button onClick={() => handleHomePage()}>Home</button>{" "}
          <button onClick={() => toggleModal()}>Rules</button>
        </footer>
      </div>
    </>
  );
};

export default Bounes;
