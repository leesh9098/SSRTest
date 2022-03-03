import Link from "next/link";
import Style from "../../styles/Style.module.css";

export default function ResetButton({ href, setScore }) {
    const reset = () => {
        // window.sessionStorage.clear();
        setScore(0);
    }

    return (
        <>
            {href ? 
            <Link href={href}>
                <button className={Style.retrybutton} onClick={reset} />
            </Link> :
                <button className={Style.retrybutton} onClick={reset} />
            }
        </>
    )
}