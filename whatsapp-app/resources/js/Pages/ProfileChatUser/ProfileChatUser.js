import React, {useEffect, useRef, useState} from "react";
import {show} from "@/features/modalBox";
import {useDispatch, useSelector} from 'react-redux'
import {close} from "@/features/modalBoxChat";
import {getDetail} from '@/features/getDetailUser';
import {chatsFetch} from '@/features/getChats';
import axios from "axios";

function ProfileChatUser({profile, name, idUser, id, chat}) {

    const dispatch = useDispatch();
    const userCurrent = JSON.parse(sessionStorage.getItem('userDetail'));
    const chatLatest = useRef(null);
    const userInChatBox = useSelector(state => state.chatBoxUserDetail.value);
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

        if (idChat || userInChatBox.hasOwnProperty(idUser)) {
            readChat(idChat)
                .then((success) => {
                    if (success.data.responseUpdate === 1) {
                        chatLatest.current.classList.remove('font-medium');
                    }
                    console.log(success);
                })
                .catch((error) => {
                    console.log(error);
                })
            // axios.post('/read_chat', {
            //     id_chat : idChat,
            // })
            //     .then((success) => {
            //         if (success.data.responseUpdate === 1) {
            //             chatLatest.current.classList.remove('font-medium');
            //         }
            //         console.log(success);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     })
        }
    };

    const readChat = async (idChat) => {
        return axios.post('/read_chat', {
            id_chat : idChat
        })
    };

    useEffect(() => {
        if (notifications.hasOwnProperty(idUser)) {

            axios.get(`/check_chat/${notifications[idUser].detail.id_chat}`)
                .then((success) => {
                    if (success.data.chatCheck.is_read === 0) {
                        chatLatest.current.classList.add('font-medium');
                    } else {
                        chatLatest.current.classList.remove('font-medium');
                    }

                    if (userInChatBox.hasOwnProperty(notifications[idUser].id_user)) {
                        readChat(notifications[idUser].detail.id_chat)
                            .then((success) => {
                                if (success.data.responseUpdate === 1) {
                                    chatLatest.current.classList.remove('font-medium');
                                }
                                console.log(success);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        // chatLatest.current.classList.remove('font-medium');
                    }

                })
                .catch((error) => {
                    console.log(error);
                });

            getChatLatest(notifications[idUser].detail.message);
            setIdChat(notifications[idUser].detail.id_chat);

            axios.post('/read_all_chat', {
                id_chat : notifications[idUser].detail.id_chat,
                from_this : idUser,
                to_this : userCurrent?.id_user,
            })
                .then((success) => {
                    console.log(success);
                })
                .catch((error) => {
                    console.log(error);
                })
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
                        <span ref={chatLatest}>{chatLatestText ? chatLatestText : chat}</span>
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
