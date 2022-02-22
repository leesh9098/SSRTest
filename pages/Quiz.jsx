import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { quiz } from "./data/Quiz";
import countapi from "countapi-js";

export default function Quiz({ score, setScore, setHitCount }) {
    const [stageNumber, setStageNumber] = useState(1);
    // const [score, setScore] = useState(parseInt(window.atob(window.sessionStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))) || 0);
    const [leftQuiz, setLeftQuiz] = useState(quiz.length - 3);
    const [answerList, setAnswerList] = useState("");
    const [scoreData, setScoreData] = useState(0);
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(false);

    let sc = score;

    let navigate = useNavigate();

    const handleAnswerList = (e) => {
        setAnswerList(e.target.value);
        setChecked(true);
    }

    const handleAnswer = () => {
        // *******************입력형 퀴즈**********************

        // if (typeof window === 'object') {
            // if (stageNumber === 5) {
            //     if (document.getElementById("quiz5").value === quiz[4].answers[0].text) {
            //         setScore(score + quiz[4].answers[0].score);
            //         setLeftQuiz(leftQuiz - 1);
            //         setStageNumber(stageNumber + 1);
            //     } else if (document.getElementById("quiz5").value === "") {
            //         alert("정답을 입력해주세요");
            //     } else {
            //         setChecked(false);
            //         setScore(score);
            //         setLeftQuiz(leftQuiz - 1);
            //         setStageNumber(stageNumber + 1);
            //     }
            // } else {
            if (stageNumber === 10) {
                setChecked(false);
                setScore(sc + scoreData);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1)
                countapi.update('numberofuser', 'users', 1)
                    .then(res => setHitCount(res.value))
                navigate('/event/univtest/loading');
            } else {
                setChecked(false);
                setScore(sc + scoreData);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1)
            };
            // }
        // }
    }

    // const showResult = () => {
    //     setChecked(false);
    //     setScore(sc + scoreData);
    //     setLeftQuiz(leftQuiz - 1);
    //     setStageNumber(stageNumber + 1);
    //     countapi.update('numberofuser', 'users', 1)
    //     .then(res => setHitCount(res.value))
    //     navigate('/loading');
    // }

    useEffect(() => {
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            e.returnValue = ''
        });
    }, [])

    // **************event감지**************
    useEffect(() => {

        // ************다음 퀴즈로 넘어갈 때 checked의 state를 false로 초기화************
        if (!checked) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [checked]);

    return (
        <div className="wrap">
            {
                // ****************입력형 퀴즈******************
                // stageNumber === 5 ? 
                // <>
                //     <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                //     <div className="namebox">
                //         <div className="museumMedium nametext1">이름</div>
                //         <div className="museumMedium nametext2">김상상</div>
                //     </div>
                //     <div className="line"></div>
                //     <div className="questionbox">
                //         <p className="museumMedium questiontext">{quiz[4].question}</p>
                //     </div>
                //     <div className="inputtextarea">
                //         <input type="text" id="quiz5" className="suitExtraBold inputtext" placeholder="정답 입력" />
                //     </div>
                // </>
                // : 

                // ****************버튼형 퀴즈*****************
                <>
                    <div style={{ width: '280px' }}>
                        <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                        <div className="namebox">
                            <div className="museumMedium nametext1">이름</div>
                            <div className="museumMedium nametext2">김상상</div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="questionbox">
                        <p className="museumMedium questiontext">{quiz[stageNumber - 1].question}</p>
                    </div>
                    <div className="answerarea">
                        {quiz[stageNumber - 1].answers.map((answer) => (
                            <div className="answerbuttonbox" key={answer.text} onClick={() => setScoreData(answer.score)} >
                                <div
                                    className={
                                        answerList === answer.quiznumber ?
                                        'answerradiobox answerradiochecked' :
                                        'answerradiobox'
                                    }
                                >
                                    <input
                                        type="radio"
                                        className="answerradio"
                                        value={answer.quiznumber}
                                        id={answer.quiznumber}
                                        checked={answerList === answer.quiznumber}
                                        onChange={handleAnswerList}
                                        required
                                    />
                                    <label className="suitExtraBold" htmlFor={answer.quiznumber}>✓</label>
                                </div>
                                <label
                                    className={
                                        `museumBold ${answerList === answer.quiznumber ?
                                        'answertext answerradiochecked' :
                                        'answertext'}`
                                    }
                                    htmlFor={answer.quiznumber}
                                >
                                    {answer.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </>
            }
            {/* ***********진행 버튼*********** */}
            <button
                className="suitExtraBold nextbutton"
                onClick={handleAnswer}
                disabled={disable === false}
            >
                다음
            </button>
            <p className="suitRegular leftquiz">{`${leftQuiz}개 문제 남음`}</p>
        </div>
    )
}