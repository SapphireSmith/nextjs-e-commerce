"use client"
import Image from 'next/image'
import React, { useState } from 'react'

// const images = [
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/27086057/pexels-photo-27086057/free-photo-of-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/20441817/pexels-photo-20441817/free-photo-of-statue-on-a-roof-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/26245674/pexels-photo-26245674/free-photo-of-chateau-burg-eltz.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/26977824/pexels-photo-26977824/free-photo-of-in-the-historical-center-of-cusco-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     }

// ]
const ProductImages = ({ items }: { items: any }) => {

    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative ">
                <Image src={items[index].image?.url}
                    alt=''
                    fill
                    sizes='30vw'
                    className='object-cover rounded-md' />
            </div>
            <div className=" flex justify-between gap-4 mt-8">
                {
                    items.map((item: any, i: number) => (
                        <div key={item._id} className='cursor-pointer w-1/4 h-32 relative gap-4 mt-8'
                            onClick={() => setIndex(i)}
                        >
                            <Image src={item.image?.url}
                                alt=''
                                fill
                                sizes='30vw'
                                className='object-cover rounded-md' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages