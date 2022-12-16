import LoadingProfileImage from "../../../img/load.png";
import React from "react";

function ScreenTop() {
    return (
        <div className={"min-h-[59px] p-2 bg-[#F0F2F5] sticky top-0"}>
            <div className={"w-[40px] h-[40px] rounded-full bg-white overflow-hidden"}>
                <img referrerPolicy="no-referrer" className={"w-full h-full"}
                     src={`${LoadingProfileImage}`} alt=""/>
            </div>
        </div>
    )
}

export default ScreenTop;
