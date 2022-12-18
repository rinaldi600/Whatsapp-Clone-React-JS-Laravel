import React from "react";
import {close} from "@/features/modalBox";
import { useDispatch, useSelector } from 'react-redux';

function NavbarChat() {

    const dispatch = useDispatch();
    const navbarChatUser = useSelector(state => state.modalBoxChatUser.value);

    return (
        <div className={`${navbarChatUser ? 'grid' : 'hidden' } text-[#3b4a54] font-[15px] bg-white justify-center items-center h-[200px] bg-white shadow-lg rounded-lg absolute top-[20%] md:top-[10%] right-1 sm:w-[192px] w-full`}>
            <p>Info Kontak</p>
            <p>Pilih Pesan</p>
            <p>Pesan Berbintang</p>
            <p>Pesan Sementara</p>
            <button onClick={() => dispatch(close())} className={"text-left hover:font-bold"}>
                Tutup Chat
            </button>
        </div>
    )
}

export default NavbarChat;
