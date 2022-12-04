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
        <div className={"relative"}>
            <HeadComponent/>
            <div className={"h-[80px] bg-[#00A783]"}>

            </div>
            <div className={"min-h-[680px] bg-[#DFDFDC]"}>
                <div className={"flex mobile:flex-col shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] w-full mobile:h-full sm:h-full xl:w-[95%] bg-white xl:h-[700px] mx-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"}>
                    <div className={"w-[30%] mobile:w-full bg-white mobile:h-[50%] sm:min-h-full"}>
                        <h1>WORK</h1>
                        <button onClick={logout} className={"bg-red-300"}>
                            LogOut
                        </button>
                    </div>
                    <div className={"w-[70%] mobile:w-full bg-[#F0F2F5] mobile:h-[50%] sm:min-h-full"}>

                    </div>
                </div>
            </div>
        </div>
    );
}
