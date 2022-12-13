import React from "react";
import { useSelector } from 'react-redux'

function Chat() {

    const box = useSelector(state => state.modalBox.value);

    return (
        <div className={`${box ? 'block' : 'hidden'} absolute w-full h-full bg-white`}>
            <h1>WORK</h1>
        </div>
    )
}

export default Chat;
