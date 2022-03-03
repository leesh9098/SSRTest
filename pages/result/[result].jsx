import Head from "next/head";
import { useRouter } from "next/router";
import ResetButton from "../../components/button/ResetButton";
import SocialShareButton from "../../components/button/SocialShareButton";
import Footer from "../../components/Footer";
import ResultSection from "../../components/ResultSection";
import ResultData from "../../data/ResultData";
import Style from "../../styles/Style.module.css";

export default function ResultPage({ score, setScore }) {
    const router = useRouter();
    const { result } = router.query;
    const currentUrl = `http://localhost:3000/${router.query.result}`;

    return (
        <>
            <Head>
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={ResultData[result]["ogTitle"]} />
                <meta property="og:description" content={ResultData[result]["ogDescription"]} />
                <meta property="og:image" content={ResultData[result]["ogImage"]} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="trepick" />
                <meta name="twitter:title" content={ResultData[result]["ogTitle"]} />
                <meta name="twitter:description" content={ResultData[result]["ogDescription"]} />
                <meta name="twitter:image" content={ResultData[result]["ogImage"]} />
            </Head>
            <div className={Style.resultwrap}>
                <ResultSection param={result} score={score} />
                <ResetButton href={"/"} setScore={setScore} />
                <SocialShareButton />
                <Footer />
            </div>
        </>
    )
}