import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import mainBanner from "../assets/img/mainbanner.png"

export function Home() {
    const { user, logOut } = UserAuth();
    const onLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            <div className='  w-full bg-cover bg-top  p-60'
                style={{backgroundImage: `url(${mainBanner})`}}>
                <button className="absolute top-0 right-0 bg-black rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4 bg-opacity-50 " style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={onLogOut}>
                    Cerrar Sesion
                </button>
            </div>

            <h1>Home</h1>


        </>
    );
}