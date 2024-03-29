import React, {lazy, Suspense, useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {show, close} from '../../features/modalBoxChat';
import {Inertia} from "@inertiajs/inertia";
import { addNotifications } from "@/features/getNotifications";
import { getUserInChatBox, removeIdUser } from '../../features/chatBoxUserDetail'

const NavbarChat = lazy(() => import('../../Pages/NavbarChat/NavbarChat'));

function Chat() {

    const box = useSelector(state => state.modalBox.value);
    const chatSlice = useSelector(state => state.chatSlice.value);
    const userCurrent = JSON.parse(sessionStorage.getItem('userDetail'));
    const navbarChatUser = useSelector(state => state.modalBoxChatUser.value);
    const [currentRealTimeChat, setRealTimeChat] = useState([]);
    const userSlice = useSelector(state => state.userSlice.value);
    const dispatch = useDispatch();
    const [getMessage, setValueMessage] = useState('');
    const inputRef = useRef(null);
    const chatContainer = useRef(null);

    useEffect(() => {
        Echo.private(`App.Models.User.${userCurrent?.id}`)
            .notification((notification) => {
                console.log(notification);
                dispatch(addNotifications(notification));
            });
        Echo.private(`users.${userSlice?.id}`)
            .listen('MessagePrivateEvent', (e) => {
                if (userCurrent?.id_user !== e.message?.to_this) {
                    return false;
                }
                setRealTimeChat(oldArray => [...oldArray, e])
            });
    });

    useEffect(() => {
        chatContainer.current.scrollIntoView(false);
    });

    const sendMessage = () => {
        Inertia.post('/post/chat',{
            'to_this' : userSlice?.idUser,
            'message' : getMessage
        });
        setRealTimeChat(oldArray => [...oldArray, {
            'to_this' : userSlice?.idUser,
            'message' : getMessage
        }]);
        inputRef.current.value = '';
    };

    const getUserFast = () => {
        if (box) {
            const addUser = {
                idUser : userSlice.idUser,
                open : true
            };
            dispatch(removeIdUser());
            dispatch(getUserInChatBox(addUser));
        }
        setRealTimeChat([]);

    };

    return (
        <div onLoad={getUserFast} className={`${box ? 'block' : 'hidden'} scrollbar-hide overflow-y-scroll w-full h-full bg-white`}>
            <div className={"min-h-[59px] flex justify-between relative items-center p-2 bg-[#F0F2F5] sticky top-[-1px]"}>
                <div className={"flex items-center gap-2"}>
                    <div className={"w-[40px] h-[40px] rounded-full bg-white overflow-hidden"}>
                        <img referrerPolicy="no-referrer" className={"w-full h-full"}
                             src={`${userSlice.photo_profile}`} alt=""/>
                    </div>
                    <p>{userSlice.name}</p>
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
                <div className={"h-[638px] text-sm text-[#111b21] scrollbar-hide overflow-y-scroll"}>
                    <div ref={chatContainer} className={"w-[90%] min-h-full mx-auto"}>
                        {
                            chatSlice.map((chat) => (
                                <div className={`p-1 w-full flex ${chat?.from_this === userCurrent?.id_user ? 'justify-end' : 'justify-start' } mt-1 mb-1 rounded-lg`}>
                                    <div className={`${chat?.from_this === userCurrent?.id_user ? 'bg-[#D9FDD3]' : 'bg-white' } p-2 rounded-lg`}>
                                        <p className={"break-words"}>{chat.message}</p>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            currentRealTimeChat.length <= 0 ?
                                ''
                                :
                                currentRealTimeChat.map((chatReal) => (
                                    <div className={`p-1 w-full flex ${chatReal.hasOwnProperty('id') ? 'justify-start' : 'justify-end' } mt-1 mb-1 rounded-lg`}>
                                        <div className={`${chatReal.hasOwnProperty('id') ? 'bg-white' : 'bg-[#D9FDD3]' } p-2 rounded-lg`}>
                                            <p className={"break-words"}>{chatReal.hasOwnProperty('id') ? chatReal.message.message : chatReal.message}</p>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={"bg-[#F0F2F5] p-2 flex h-[62px] sticky bottom-0"}>
                <div className={"w-[94px] grid justify-center items-center h-full"}>
                    <div>
                        <svg viewBox="0 0 24 24" height="32" width="32" preserveAspectRatio="xMidYMid meet"
                             className="ekdr8vow dhq51u3o text-[#54656F] cursor-pointer" version="1.1" x="0px" y="0px"
                             enable-background="new 0 0 24 24"><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
                    </div>
                </div>
                <div className={"w-[892.925px] flex h-full rounded-lg overflow-hidden"}>
                    <div className={"w-[832.925px] bg-transparent flex items-center h-full"}>
                        <input ref={inputRef} onChange={(e) => setValueMessage(e.target.value)} type="text" className={"w-full rounded-lg font-normal h-full bg-white border-transparent focus:border-transparent focus:ring-0"} placeholder={"Ketik Pesan"}/>
                    </div>
                    <div className={"w-[37px] flex items-center justify-center"}>
                        <button onClick={sendMessage}>
                            <span data-testid="send" data-icon="send" className="text-[#54656F] cursor-pointer"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                            </svg>
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
