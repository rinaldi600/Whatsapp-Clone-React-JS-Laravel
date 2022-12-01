import { Head } from '@inertiajs/inertia-react'
import React from "react";
import LogoWhatApp from '../../../img/whatsapp.png';

function HeadComponent() {
    return (
        <Head>
            <title>WhatsApp Clone</title>
            <meta name="description" content="Your page description" />
            <link rel={"icon"} href={LogoWhatApp}/>
        </Head>
    )
}

export default HeadComponent;
