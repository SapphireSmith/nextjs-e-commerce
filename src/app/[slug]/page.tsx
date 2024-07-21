import Add from '@/components/Add'
import CustomizeProduct from '@/components/CustomizeProduct'
import ProductImages from '@/components/ProductImages'
import { wixClientServer } from '@/lib/wixClientServer'
import DOMPurify from 'isomorphic-dompurify'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

const SinglePage = async ({ params }: { params: { slug: string } }) => {

  const wixClient = await wixClientServer();
  const products = await wixClient.products.queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
          <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        {/* THIS CREATE Error: Hydration failed because the initial UI does not match what was rendered on the server. */}
        <div className='text-gray-500' dangerouslySetInnerHTML={{ __html: product.description || '' }}></div>
        {/* THIS WILL DOES NOT CREATE ANY ERROR */}
        {/* <p className='text-gray-500'> {product.description}</p> */}

        <div className='h-[2px] bg-gray-100' />
        {
          product.price?.price === product.price?.discountedPrice ? (
            <h3 className='text-xl text-gray-500 line-through'>Rs.{product.price?.price}</h3>
          ) : (
            <div className='flex items-center gap-4'>
              <h3 className='text-xl text-gray-500 line-through'>Rs.{product.price?.price}</h3>
              <h2 className='font-medium text-gray-500 text-2xl'>Rs.{product.price?.discountedPrice}</h2>
            </div>
          )
        }

        <div className='h-[2px] bg-gray-100' />
        {product.variants && product.productOptions ? (
          <CustomizeProduct
            productId={product._id!}
            variants={product.variants!}
            productOptions={product.productOptions!}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId={"00000000-0000-0000-0000-000000000000"}
            stockNumber={product.stock?.quantity || 0}
          />
        )
        }
        <div className='h-[2px] bg-gray-100' />

        {
          product.additionalInfoSections?.map((section: any) => (
            <div className='text-sm' key={section.title}>
              <h4 className='font-medium mb-4'>{section.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: section.description }}></div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SinglePage;
