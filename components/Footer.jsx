import Style from "../styles/Style.module.css";

export default function Footer() {
    return (
        <div className={Style.footerwrap}>
            <p className={`${Style.suitRegular} ${Style.footertext}`}>Copyright 2022 (주)블루프로그 All rights reserved</p>
        </div>
    )
}