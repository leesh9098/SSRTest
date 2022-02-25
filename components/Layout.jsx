import Style from "../styles/Style.module.css";

export default function Layout(props) {
    return (
        <div className={Style.wrap}>
            {props.children}
        </div>
    )
}