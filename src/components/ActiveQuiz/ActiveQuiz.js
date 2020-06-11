import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.module.sass';

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                <strong>{props.id}.  </strong>
                {props.question}
                </span>
                <small> {props.answerNum} из {props.quizLength}</small>
            </p>
            <AnswersList answers={props.answers}
            state={props.state}
            onAnswerClick={props.onAnswerClick} />
        </div>
    )
}

export default ActiveQuiz