import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const getScore = (sc) => {
    let param;
    if (sc <= 40) {
        param = "level1";
    } else if (sc <= 70) {
        param = "level2";
    } else if (sc <= 90) {
        param = "level3";
    } else if (sc === 100) {
        param = "level4";
    }
    return param;
}

export default function Loading({ score }) {
    const [loadingMessage, setLoagingMessage] = useState("채점 중");
    const navigate = useNavigate();

    const resultPage = getScore(score);

    useEffect(() => {
        window.sessionStorage.setItem("score", score);
        const lm = setTimeout(() => {
            setLoagingMessage((message) => message + ".");
        }, 500)
        return () => clearTimeout(lm);
    }, [loadingMessage, score]);

    useEffect(() => {
        setTimeout(() => navigate(`/event/univtest/result/${resultPage}`), 2000);
    }, [navigate, resultPage]);

    return (
        <div className="wrap">
            <p style={{fontSize: '30px', fontWeight: 'bold' }}>{loadingMessage}</p>
            <ScaleLoader height="160px" width="32px" color="rgb(193, 2, 48)" radius="8px" />
        </div>
    )
}