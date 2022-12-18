import React, {lazy, Suspense, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import LoadingProfileImage from "../../../img/load.png";
import {show, close} from '../../features/modalBoxChat';

const NavbarChat = lazy(() => import('../../Pages/NavbarChat/NavbarChat'));

function Chat() {

    const box = useSelector(state => state.modalBox.value);
    const navbarChatUser = useSelector(state => state.modalBoxChatUser.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(navbarChatUser);
    });

    return (
        <div className={`${box ? 'block' : 'hidden'} scrollbar-hide overflow-y-scroll w-full h-full bg-white`}>
            <div className={"min-h-[59px] flex justify-between relative items-center p-2 bg-[#F0F2F5] sticky top-[-1px]"}>
                <div className={"flex items-center gap-2"}>
                    <div className={"w-[40px] h-[40px] rounded-full bg-white overflow-hidden"}>
                        <img referrerPolicy="no-referrer" className={"w-full h-full"}
                             src={`${LoadingProfileImage}`} alt=""/>
                    </div>
                    <p>Rinaldi</p>
                </div>
                <div>
                    <div onClick={() => dispatch(navbarChatUser ? close() : show())} className={`cursor-pointer hover:bg-[#D9DBDF] hover:rounded-full hover:w-[32px] hover:h-[32px] hover:flex justify-center items-center`}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                             className="text-[#54656F]" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </div>
                </div>
            </div>
            <div className={`overflow-scroll scrollbar-hide bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]`}>
                <Suspense fallback={<h1>Loading</h1>}>
                    <NavbarChat/>
                </Suspense>
                <div className={"h-[638px] scrollbar-hide overflow-y-scroll"}>
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
            <div className={"bg-[#F0F2F5] p-1 flex h-[62px] sticky bottom-0"}>
                <div className={"w-[94px] grid justify-center items-center h-full"}>
                    <div>
                        <svg viewBox="0 0 24 24" height="32" width="32" preserveAspectRatio="xMidYMid meet"
                             className="ekdr8vow dhq51u3o text-[#54656F] cursor-pointer" version="1.1" x="0px" y="0px"
                             enable-background="new 0 0 24 24"><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
                    </div>
                </div>
                <div className={"w-[892.925px] flex h-full bg-yellow-400"}>
                    <div className={"w-[832.925px] bg-white flex items-center h-[42px]"}>
                        <input type="text" className={"w-full h-full border-0 outline-none"} placeholder={"Ketik Pesan"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
