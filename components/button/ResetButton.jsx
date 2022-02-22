import { Link } from "react-router-dom";

export default function ResetButton({ to, setScore }) {
    const reset = () => {
        window.sessionStorage.clear();
        setScore(0)
    }

    return (
        <>
            {to ? 
            <Link to={to}>
                <button className="retrybutton" onClick={reset} />
            </Link> :
            <button className="retrybutton" onClick={reset} />
            }
        </>
    )
}