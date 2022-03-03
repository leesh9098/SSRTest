// import { useEffect } from "react";
// import KakaoTalkIcon from "../../images/kakaotalkicon.png";
// import { useScript } from "../../useScript";
// import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon } from "react-share";
// import CopyToClipboard from "react-copy-to-clipboard";

import { useRouter } from "next/router";
import ResultData from "../../data/ResultData";
import Style from "../../styles/Style.module.css";

export default function SocialShareButton() {
    const router = useRouter();
    const { result } = router.query;
    const currentUrl = `http://localhost:3000/${router.query.result}`;

    // const setResultUrl = () => {
    //     let resultUrl;
    //     if (currentUrl.includes('level1')) {
    //         resultUrl = 'https://trepick.page.link/lv1'
    //     } else if (currentUrl.includes('level2')) {
    //         resultUrl = 'https://trepick.page.link/lv2'
    //     } else if (currentUrl.includes('level3')) {
    //         resultUrl = 'https://trepick.page.link/lv3'
    //     } else {
    //         resultUrl = 'https://trepick.page.link/lv4'
    //     }
    //     return resultUrl;
    // }

    const copyUrl = () => {
        if (navigator.share) {
            navigator.share({
                title: ResultData[result]['ogTitle'],
                text: ResultData[result]['ogDescription'],
                url: currentUrl
            })
        } else {
            alert("공유하기를 지원하지 않는 기기입니다.");
        }
    }

    // ****************kakao API*****************
    // const kakao = window.Kakao;
    // const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

    // useEffect(() => {
    //     if (status === "ready" && window.Kakao) {
    //         // 중복 initialization 방지
    //         if (!window.Kakao.isInitialized()) {
    //             // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
    //             window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    //         }
    //     }
    // }, [status]);

    // const createKakaoButton = () => {
    //     kakao.Link.sendScrap({
    //         requestUrl: currentUrl
    //     });
    // }

    return (
        <div>
            {/* <FacebookShareButton url={currentUrl} style={{ marginRight: '10px' }}>
                <FacebookIcon size={50} round={true} />
            </FacebookShareButton> */}
            {/* <TwitterShareButton url={currentUrl} style={{ marginRight: '10px' }}>
                <TwitterIcon size={50} round={true} />
            </TwitterShareButton> */}
            {/*************카카오톡 공유버튼*************
                <button
                    style={{
                        width: '50px',
                        height: '50px',
                        padding: '0',
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                    onClick={createKakaoButton}
                >
                        <img
                        src={KakaoTalkIcon}
                        alt="카카오톡 공유하기"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%'
                        }}
                </button>
            /> */}
            {/* <CopyToClipboard text={currentUrl} onCopy={() => alert("복사되었습니다")}> */}
                <button className={Style.urlcopybutton} onClick={copyUrl} />
            {/* </CopyToClipboard> */}
        </div>
    )
}