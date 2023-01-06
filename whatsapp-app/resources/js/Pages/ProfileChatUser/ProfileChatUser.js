import React, {useEffect, useRef, useState} from "react";
import {show} from "@/features/modalBox";
import {useDispatch} from 'react-redux'
import {close} from "@/features/modalBoxChat";
import {getDetail} from '@/features/getDetailUser';
import {chatsFetch} from '@/features/getChats';
import axios from "axios";

function ProfileChatUser({profile, name, idUser, id, chat}) {

    const dispatch = useDispatch();
    const userCurrent = JSON.parse(sessionStorage.getItem('userDetail'));
    const chatLatest = useRef(null);

    const chatUser = () => {
        // if (chatLatest.current.hasChildNodes()) {
        //     // console.log("WORK")
        //     chatLatest.current.childNodes[0].classList.remove("font-medium");
        // }

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
    };


    return (
        <div onClick={chatUser} className={"flex hover:bg-[#F5F6F6] hover:rounded-[5px] mb-3 hover:p-2 gap-3 items-center cursor-pointer bg-white"}>
            <div className={"w-[45px] h-[45px] overflow-hidden rounded-full bg-yellow-400"}>
                <img referrerpolicy="no-referrer" className={"w-full h-full"} src={profile} alt=""/>
            </div>
            <div className={"flex justify-between w-[80%] border-b-[0.5px] border-[#E9EDEF]"}>
                <div className={"mb-1"}>
                    <p className={"font-medium text-[#111b21] text-lg"}>{name}</p>
                    <p ref={chatLatest} className={"text-[#3b4a54] text-sm"}>{chat}</p>
                </div>
                <div>
                    <p className={"text-[#1FA855] text-xs font-semibold"}>19.40</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileChatUser;
