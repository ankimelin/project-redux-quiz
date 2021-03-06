import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { LastImage } from './LastImage'

// import friends from "./images/friends.jpg";

export const Summary = () => {
    const answersCorrect = useSelector(
        (state) =>
            state.quiz.answers.filter((answer) => answer.isCorrect === true).length
    );

    const dispatch = useDispatch();

    const restart = () => {
        dispatch(quiz.actions.restart());
    };

    const lastImg = () => {
        if (answersCorrect === 7) {
            return (<LastImage />)
        }
    }

    if (answersCorrect === 6 && answersCorrect === 7) {
        return (
            <p>
                <div>{lastImg()}</div>
                {/* <img src={friends} alt="friends"></img> */}
        You must really love Friends! You got all of the questions right! You
        could play again but I guess there is no point. Find something else to
        do.
            </p>
        );
    }

    return (
        <div className="summary">
            <h1>Thanks for playing the Friends quiz!</h1>
            <div><LastImage /></div>
            <p>You've got some right, some wrong, but that doesn't matter! Go and re-watch another season of world's best show. </p>
            <button className="restart-button" type="button" onClick={restart}>
                Play again!
      </button>
        </div>
    );
};
