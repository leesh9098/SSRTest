import { useParams } from "react-router-dom";
import ResultSection from "../components/ResultSection";
import SocialShareButton from "../components/button/SocialShareButton";
import ResultData from "../data/ResultData";
import ResetButton from "../components/button/ResetButton";
import Footer from "../components/Footer";
import Head from "next/head";

export default function TestResult({ score, setScore }) {
    const { param } = useParams();
    const currentUrl = window.location.href;

    return (
        <>
            <Head>
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={ResultData[param]["ogTitle"]} />
                <meta property="og:description" content={ResultData[param]["ogDescription"]} />
                <meta property="og:image" content={ResultData[param]["ogImage"]} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="trepick" />
                <meta name="twitter:title" content={ResultData[param]["ogTitle"]} />
                <meta name="twitter:description" content={ResultData[param]["ogDescription"]} />
                <meta name="twitter:image" content={ResultData[param]["ogImage"]} />
            </Head>
            <div className="resultwrap">
                <ResultSection param={param} score={score} />
                <ResetButton to={"/event/univtest?utm_source=univtest&utm_medium=retry"} setScore={setScore} />
                <SocialShareButton />
                <Footer />
            </div>
        </>
    )
}
