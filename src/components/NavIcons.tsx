"use client"

import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CartModal from './CartModal';
import { useWixClient } from '@/hooks/useWixCient';
import Cookies from 'js-cookie';
import { useCartStore } from '@/hooks/useCartStore';

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoading, isSetLoading] = useState(false);

    const router = useRouter();
    const pathName = usePathname();
    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn()

    // const isLoggedIn = true

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        } else {
            setIsProfileOpen((prev) => !prev)
        }
    }


    // AUTH WITH WIX-MANAGED AUTH

    // const wixClient = useWixClient()
    // const login =  async () => {
    //     const loginRequestData = wixClient.auth.generateOAuthData(
    //         "http://localhost:3000",
    //     );
    //     console.log(loginRequestData);
    //     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
    //     const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)
    //     window.location.href = authUrl
    // }

    const handleLogout = async () => {
        isSetLoading(true)
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href)
        isSetLoading(false);
        setIsProfileOpen(false)
        router.push(logoutUrl);
    }


    const { cart, counter, getCart } = useCartStore();

    useEffect(() => {

        getCart(wixClient);

    }, [wixClient, getCart])

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image src={"/profile.png"}
                alt=''
                width={22}
                height={22}
                className='cursor-pointer'
                onClick={handleProfile}
            // onClick={login}
            />
            {isProfileOpen && <div className='absolute p-4 bg-white rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                <Link href="/">Profile</Link>
                <div className='mt-2 cursor-pointer' onClick={handleLogout}>{isLoading ? "logging out" : "Logout"}</div>
            </div>}

            <Image src={"/notification.png"} alt='' width={22} height={22} className='cursor-pointer' />

            <div className='relative cursor-pointer'
                onClick={() => { setIsCartOpen((prev) => !prev) }}
            >
                <Image
                    src={"/cart.png"}
                    alt=''
                    width={22}
                    height={22}
                    className='cursor-pointer'

                />
                <div className='absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center'>
                    {counter}
                </div>
            </div>

            {
                isCartOpen && <CartModal />
            }
        </div>
    )
}

export default NavIcons