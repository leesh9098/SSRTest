import axios from "axios";
import { useNavigate } from "react-router";

const openTime = "2022-02-01 09:00:00";
const closeTime = "2022-02-24 21:00:00";

export default function StartButton() {
    const navigate = useNavigate();

    const getServerTime = () => {
        axios.get(`${process.env.REACT_APP_API}/serverTime`)
            .then((success) => {
                let opening = new Date(openTime);
                let closing = new Date(closeTime);
                const client = new Date();
                const server = success.data.serverTime;
                if (!openTime) {
                    opening = new Date();
                } else if (!closeTime) {
                    closing = new Date();
                } else if (client < opening || client > closing) {
                    alert("행사 기간이 아닙니다");
                } else {
                    if (server < opening || server > closing) {
                        alert("행사 기간이 아닙니다");
                    } else {
                        navigate('/event/univtest/quiz');
                    }
                }
            })
    }

    return (
        <button className="nextbutton" onClick={getServerTime}>시작하기</button>
    )
}