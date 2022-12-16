import React from "react";
import {close} from "@/features/modalBox";
import { useDispatch } from 'react-redux';

function NavbarChat() {

    const dispatch = useDispatch();

    return (
        <div className={"text-[#3b4a54] font-[15px] bg-white grid justify-center items-center h-[200px] bg-white shadow-lg rounded-lg absolute top-1 right-1 sm:w-[192px] w-full"}>
            <p>Info Kontak</p>
            <p>Pilih Pesan</p>
            <p>Pesan Berbintang</p>
            <p>Pesan Sementara</p>
            <button onClick={() => dispatch(close())} className={"text-left"}>
                Tutup Chat
            </button>
        </div>
    )
}

export default NavbarChat;
