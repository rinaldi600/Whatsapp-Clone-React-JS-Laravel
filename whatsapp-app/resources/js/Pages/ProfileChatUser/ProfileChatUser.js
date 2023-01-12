import React, {useEffect, useRef, useState} from "react";
import {show} from "@/features/modalBox";
import {useDispatch, useSelector} from 'react-redux'
import {close} from "@/features/modalBoxChat";
import {getDetail} from '@/features/getDetailUser';
import {chatsFetch} from '@/features/getChats';
import axios from "axios";
import {addNotifications} from "@/features/getNotifications";

function ProfileChatUser({profile, name, idUser, id, chat}) {

    const dispatch = useDispatch();
    const userCurrent = JSON.parse(sessionStorage.getItem('userDetail'));
    const chatLatest = useRef(null);
    const userInChatBox = useSelector(state => state.chatBoxUserDetail.value);
    // const [readMessage, setRead] = useState('');
    const [idChat, setIdChat] = useState('');
    const [chatLatestText, getChatLatest] = useState('');
    const notifications = useSelector(state => state.notificationsSlice.value);

    const chatUser = () => {
        if (idUser !== '') {
            axios.get(`/chats/${userCurrent?.id_user}/${idUser}`)
                .then((success) => {
                    dispatch(chatsFetch(success.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        dispatch(getDetail({
            id,
            idUser,
            name,
            profile
        }));
        dispatch(close());
        dispatch(show());

        // try {
        //     if (chatLatest.current.childNodes.length > 0) {
        //         chatLatest.current.childNodes[0].classList.remove("font-medium");
        //     }
        // } catch (e) {
        //     console.log("Tidak ada pesan terbaru")
        // }

        if (idChat) {
            axios.post('/read_chat', {
                id_chat : idChat,
            })
                .then((success) => {
                    // if (success.data.res === 1) {
                    //
                    // }
                    console.log(success);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };

    useEffect(() => {
        if (notifications.hasOwnProperty(idUser)) {
            chatLatest.current.classList.add('font-medium');
            getChatLatest(notifications[idUser].detail.message);
            setIdChat(notifications[idUser].detail.id_chat);
            // if (userInChatBox.hasOwnProperty(idUser)) {
            //     getChatLatest(notifications[idUser].detail.message);
            // }
        }
    });

    return (
        <div onClick={chatUser} className={"flex hover:bg-[#F5F6F6] hover:rounded-[5px] mb-3 hover:p-2 gap-3 items-center cursor-pointer bg-white"}>
            <div className={"w-[45px] h-[45px] overflow-hidden rounded-full bg-yellow-400"}>
                <img referrerpolicy="no-referrer" className={"w-full h-full"} src={profile} alt=""/>
            </div>
            <div className={"flex justify-between w-[80%] border-b-[0.5px] border-[#E9EDEF]"}>
                <div className={"mb-1"}>
                    <p className={"font-medium text-[#111b21] text-lg"}>{name}</p>
                    {/*<p ref={chatLatest} className={"text-[#3b4a54] text-sm"}>{readMessage ? readMessage : chat}</p>*/}
                    {/*<p ref={chatLatest} className={"text-[#3b4a54] text-sm"}>*/}
                    <p className={"text-[#3b4a54] text-sm"}>
                        <span ref={chatLatest}>{chat}</span>
                    </p>
                </div>
                <div>
                    <p className={"text-[#1FA855] text-xs font-semibold"}>19.40</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileChatUser;
