import React from "react";
import {Inertia} from "@inertiajs/inertia";

function Navbar() {

    const logout = () => {
        Inertia.post('/logout');
    };

    return (
        <div className={"mobile:w-full grid justify-center items-center text-[#3b4a54] font-[15px] sm:w-[193px] h-[200px] bg-white shadow-lg rounded-lg absolute mobile:top-14 sm:top-24 md:top-16 xl:top-12 mobile:right-0 sm:right-2"}>
            <p>Grup Baru</p>
            <p>Komunitas Baru</p>
            <p>Pesan Berbintang</p>
            <p>Setelan</p>
            <button className={"text-left"} onClick={logout}>
                Keluar
            </button>
        </div>
    )
}

export default Navbar;
