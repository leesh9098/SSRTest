import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prolog from "./page/Prolog";
import Quiz from "./page/Quiz";
import Loading from "./page/Loading";
import TestResult from "./result/TestResult";
import EventQuiz from "./page/EventQuiz";
import Submit from "./page/Submit";

function QuizTestApp() {
    const [hitCount, setHitCount] = useState(0);
    const [score, setScore] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/event/univtest" element={<Prolog hitCount={hitCount} setHitCount={setHitCount} />} />
                <Route path="/event/univtest/quiz" element={<Quiz score={score} setScore={setScore} setHitCount={setHitCount} />} />
                <Route path="/event/univtest/loading" element={<Loading score={score} />} />
                <Route path="/event/univtest/result/:param" element={<TestResult score={score} setScore={setScore} />} />
                <Route path="/event/univtest/eventquiz" element={<EventQuiz />} />
                <Route path="/event/univtest/submit" element={<Submit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default QuizTestApp;