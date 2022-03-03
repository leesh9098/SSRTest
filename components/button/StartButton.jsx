// import axios from "axios";
import { useRouter } from "next/router";
import Style from "../../styles/Style.module.css";

// const openTime = "2022-02-01 09:00:00";
// const closeTime = "2022-02-24 21:00:00";

export default function StartButton() {
    const router = useRouter();

    const getServerTime = () => {
        // axios.get(`https://devapi.trepick.com/serverTime`)
        //     .then((success) => {
        //         let opening = new Date(openTime);
        //         let closing = new Date(closeTime);
        //         const client = new Date();
        //         const server = success.data.serverTime;
        //         if (!openTime) {
        //             opening = new Date();
        //         } else if (!closeTime) {
        //             closing = new Date();
        //         } else if (client < opening || client > closing) {
        //             alert("행사 기간이 아닙니다");
        //         } else {
        //             if (server < opening || server > closing) {
        //                 alert("행사 기간이 아닙니다");
        //             } else {
                        router.push('/quiz');
            //         }
            //     }
            // })
    }

    return (
        <button className={Style.nextbutton} onClick={getServerTime}>시작하기</button>
    )
}