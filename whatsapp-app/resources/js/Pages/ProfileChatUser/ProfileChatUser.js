import React, {useEffect} from "react";
import {show} from "@/features/modalBox";
import { useDispatch, useSelector } from 'react-redux'
import {close} from "@/features/modalBoxChat";
import {getDetail} from '@/features/getDetailUser';

function ProfileChatUser({profile, name, idUser}) {

    const dispatch = useDispatch();
    const userSlice = useSelector(state => state.userSlice.value);

    const chatUser = () => {
        dispatch(getDetail({
            idUser,
            name,
            profile
        }));
        dispatch(close());
        dispatch(show());
    };

    useEffect(() => {
       console.log(userSlice);
    });

    return (
        <div onClick={chatUser} className={"flex hover:bg-[#F5F6F6] hover:rounded-[5px] hover:p-2 gap-3 items-center cursor-pointer bg-white"}>
            <div className={"w-[45px] h-[45px] overflow-hidden rounded-full bg-yellow-400"}>
                <img referrerpolicy="no-referrer" className={"w-full h-full"} src={profile} alt=""/>
            </div>
            <div className={"flex justify-between w-[80%] border-b-[0.5px] border-[#E9EDEF]"}>
                <div className={"mb-1"}>
                    <p className={"font-medium text-[#111b21] text-lg"}>{name}</p>
                    <p className={"text-[#3b4a54] text-sm"}>Oke berangkat...</p>
                </div>
                <div>
                    <p className={"text-[#1FA855] text-xs font-semibold"}>19.40</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileChatUser;
