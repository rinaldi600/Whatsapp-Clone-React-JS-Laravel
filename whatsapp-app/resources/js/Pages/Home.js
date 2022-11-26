import React from "react";

function Home() {
    return (
        <div className={"min-h-screen"}>
            <div className={"bg-[#00A884] h-[80px] md:min-h-[250px]"}>
                <div className={"h-[80px]"}>
                    <div className={"h-full w-full md:w-[80%] xl:w-[1100px] mx-auto"}>
                        <div className={"flex h-full items-center gap-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
                            <p className={"text-white text-base font-medium font-segoiUI"}>WhatsApp Web</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"bg-white flex justify-center min-h-screen relative font-segoiUI"}>
                <div className={"w-full md:w-[80%] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)] md:rounded-lg bg-white md:absolute md:top-[-100px] xl:w-[1100px] min-h-[700px]"}>
                    <div className={"min-h-[550px] md:min-h-[350px] flex items-stretch md:flex-row flex-col"}>
                        <div className={"w-full min-h-[275px] text-[#41525d] md:min-h-max md:w-[70%]"}>
                            <div className={"max-w-[550px]"}>
                                <p className={"sm:text-2xl text-xl font-light"}>Untuk menggunakan WhatsApp di komputer Anda:</p>
                                <div>
                                    <ol className="list-decimal list-inside text-base md:text-lg">
                                        <li>Buka WhatsApp di telepon Anda</li>
                                        <li>Buka WhatsApp di telepon Anda</li>
                                        <li>Buka WhatsApp di telepon Anda</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full min-h-[275px] md:min-h-max md:w-[30%] bg-blue-300"}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
