import React, {useEffect} from 'react';
import HeadComponent from "@/Pages/Head/Head";
import {Inertia} from "@inertiajs/inertia";


export default function Dashboard({user}) {

    useEffect(() => {
       console.log(user)
    });

    const logout = () => {
        Inertia.post('/logout');
    };

    return (
        <div>
            <HeadComponent/>
            <h1>WORK</h1>
            <button onClick={logout} className={"bg-red-300"}>
                LogOut
            </button>
        </div>
    );
}
