import React from "react";
import { useSelector } from 'react-redux'
import ScreenTop from "@/Pages/ScreenTop/ScreenTop";
import LoadingProfileImage from "../../../img/load.png";

function Chat() {

    const box = useSelector(state => state.modalBox.value);

    return (
        <div className={`${box ? 'block' : 'hidden'} overflow-y-scroll relative w-full h-full bg-white`}>
            <div className={"min-h-[59px] p-2 bg-[#F0F2F5] sticky top-0"}>
                <div className={"w-[40px] h-[40px] rounded-full bg-white overflow-hidden"}>
                    <img referrerPolicy="no-referrer" className={"w-full h-full"}
                         src={`${LoadingProfileImage}`} alt=""/>
                </div>
            </div>
            <div className={`overflow-scroll bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]`}>
                <div className={"h-[700px] overflow-y-scroll"}>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                    <p>TEST</p>
                </div>
            </div>
        </div>
    )
}

export default Chat;
