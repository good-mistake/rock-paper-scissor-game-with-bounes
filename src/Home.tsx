import React from "react";
import { ReactComponent as Paper } from "./images/icon-paper.svg";
import { ReactComponent as Rock } from "./images/icon-rock.svg";
import { ReactComponent as Scissors } from "./images/icon-scissors.svg";
import { useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Rules } from "./images/image-rules.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
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
const Home = () => {
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
  const handleBonusPage = () => {
    navigate("/bonus-page");
  };
  function getRandomItem(delay) {
    return new Promise((resolve) => {
      const items = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random() * items.length);
      const randomItem = items[randomNumber];
      setTimeout(() => {
        resolve(randomItem);
      }, delay);
    });
  }

  const handleOptionChange = (event) => {
    dispatch({ type: "SET_USER_CHOICE", payload: event.target.value });
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
    if (housePick === "paper") {
      return (
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
      );
    } else if (housePick === "rock") {
      return (
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
      );
    } else {
      return (
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
      );
    }
  }

  const handleWinner = (user: string, house: string) => {
    if (user === house) {
      dispatch({ type: "SET_WINNER_RESULT", payload: "TIE" });
    } else if (
      (user === "rock" && house === "scissors") ||
      (user === "paper" && house === "rock") ||
      (user === "scissors" && house === "paper")
    ) {
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
  }, [housePick, isLoadingHousePick, userChoice]);
  const handlePlayAgain = () => {
    dispatch({ type: "SET_USER_CHOICE", payload: "" });
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_WINNER_RESULT", payload: "" });
    dispatch({ type: "SET_HOUSE_PICK", payload: "" });

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
      <div className="container">
        <header>
          <Logo />

          <ul id="scoreList">
            <li>
              Score <span id="score">{score}</span>
            </li>
          </ul>
        </header>
        <main>
          <section className={userChoice.length > 1 ? "close" : "open"}>
            <div>
              {" "}
              <input
                type="radio"
                id="paper"
                name="options"
                value="paper"
                checked={userChoice === "paper"}
                onChange={handleOptionChange}
              />
              <label
                className="option paper"
                htmlFor="paper"
                onClick={() =>
                  dispatch({ type: "SET_USER_CHOICE", payload: "paper" })
                }
              >
                <Paper />
              </label>
              <input
                type="radio"
                id="scissors"
                name="options"
                value="scissors"
                checked={userChoice === "scissors"}
                onChange={handleOptionChange}
              />
              <label
                htmlFor="scissors"
                className="option scissors"
                onClick={() =>
                  dispatch({ type: "SET_USER_CHOICE", payload: "scissors" })
                }
              >
                <Scissors />
              </label>
            </div>
            <div>
              {" "}
              <input
                type="radio"
                id="rock"
                name="options"
                value="rock"
                checked={userChoice === "rock"}
                onChange={handleOptionChange}
              />
              <label
                className="option rock"
                htmlFor="rock"
                onClick={() =>
                  dispatch({ type: "SET_USER_CHOICE", payload: "rock" })
                }
              >
                <Rock />
              </label>
            </div>
          </section>{" "}
          {showModal && (
            <>
              {" "}
              <div className="overlay" onClick={() => toggleModal()}></div>
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
          <button onClick={() => handleBonusPage()}>Bonus</button>{" "}
          <button onClick={() => toggleModal()}>Rules</button>
        </footer>
      </div>
    </>
  );
};

export default Home;
