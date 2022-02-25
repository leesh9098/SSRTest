import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { quiz } from "../data/Quiz";

export default function EventQuiz() {
    const [stageNumber, setStageNumber] = useState(11);
    const [answerList, setAnswerList] = useState("");
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const router = useRouter();

    const handleAnswerList = (e) => {
        setAnswerList(e.target.value);
        setChecked(true);
    }

    const handleAnswer = () => {
        if (stageNumber === 12) {
            if (correct) {
                setShowErrorMessage(false);
                setChecked(false);
                router("/event/univtest/submit");
            } else {
                setShowErrorMessage(true);
            }
        } else {
            if (correct) {
                setShowErrorMessage(false);
                setChecked(false);
                setStageNumber(stageNumber + 1);
            } else {
                setShowErrorMessage(true);
            }
        }
    }

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
                            <div className="answerbuttonbox" key={answer.text} onClick={() => setCorrect(answer.answer)} >
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
                        {
                            showErrorMessage ?
                            <p className="suitBold incorrectmessage">
                                정답이 아닙니다 다시 풀어보세요!
                            </p> :
                            null
                        }
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
            <Footer />
        </div>
    )
}