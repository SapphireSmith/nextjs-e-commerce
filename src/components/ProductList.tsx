import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href={"/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] '>
                <div className='relative w-full h-80'>
                    <Image
                        src={"https://images.pexels.com/photos/20441817/pexels-photo-20441817/free-photo-of-statue-on-a-roof-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src={"https://images.pexels.com/photos/24374974/pexels-photo-24374974/free-photo-of-an-old-woman-with-colorful-beads-and-a-necklace.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My Description</div>
                <button className='rounded-2xl ring-1 ring-lama w-max text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white '>Add to Cart</button>
            </Link>

            <Link href={"/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] '>
                <div className='relative w-full h-80'>
                    <Image
                        src={"https://images.pexels.com/photos/20441817/pexels-photo-20441817/free-photo-of-statue-on-a-roof-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src={"https://images.pexels.com/photos/24374974/pexels-photo-24374974/free-photo-of-an-old-woman-with-colorful-beads-and-a-necklace.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My Description</div>
                <button className='rounded-2xl ring-1 ring-lama w-max text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white '>Add to Cart</button>
            </Link>

            <Link href={"/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] '>
                <div className='relative w-full h-80'>
                    <Image
                        src={"https://images.pexels.com/photos/20441817/pexels-photo-20441817/free-photo-of-statue-on-a-roof-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src={"https://images.pexels.com/photos/24374974/pexels-photo-24374974/free-photo-of-an-old-woman-with-colorful-beads-and-a-necklace.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My Description</div>
                <button className='rounded-2xl ring-1 ring-lama w-max text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white '>Add to Cart</button>
            </Link>

            <Link href={"/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] '>
                <div className='relative w-full h-80'>
                    <Image
                        src={"https://images.pexels.com/photos/20441817/pexels-photo-20441817/free-photo-of-statue-on-a-roof-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src={"https://images.pexels.com/photos/24374974/pexels-photo-24374974/free-photo-of-an-old-woman-with-colorful-beads-and-a-necklace.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
                        alt='product'
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My Description</div>
                <button className='rounded-2xl ring-1 ring-lama w-max text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white '>Add to Cart</button>
            </Link>

        </div>
    )
}

export default ProductList