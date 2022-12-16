import React, {lazy, Suspense} from "react";
import { useSelector, useDispatch } from 'react-redux';
import LoadingProfileImage from "../../../img/load.png";

const NavbarChat = lazy(() => import('../../Pages/NavbarChat/NavbarChat'));

function Chat() {

    const box = useSelector(state => state.modalBox.value);
    const dispatch = useDispatch();

    return (
        <div className={`${box ? 'block' : 'hidden'} scrollbar-hide overflow-y-scroll w-full h-full bg-white`}>
            <div className={"min-h-[59px] flex justify-between items-center p-2 bg-[#F0F2F5] sticky top-[-1px]"}>
                <div className={"flex items-center gap-2"}>
                    <div className={"w-[40px] h-[40px] rounded-full bg-white overflow-hidden"}>
                        <img referrerPolicy="no-referrer" className={"w-full h-full"}
                             src={`${LoadingProfileImage}`} alt=""/>
                    </div>
                    <p>Rinaldi</p>
                </div>
                <div>
                    <div className={"cursor-pointer"}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                             className="text-[#54656F]" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </div>
                </div>
            </div>
            <div className={`overflow-scroll relative scrollbar-hide bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]`}>
                <Suspense fallback={<h1>Loading</h1>}>
                    <NavbarChat/>
                </Suspense>
                <div className={"h-[600px] scrollbar-hide overflow-y-scroll"}>
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
            <div className={"bg-white h-[100px] sticky bottom-0"}>

            </div>
        </div>
    )
}

export default Chat;
