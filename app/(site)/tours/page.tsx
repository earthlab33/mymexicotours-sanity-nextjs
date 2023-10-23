'use client';
import React, { useState, useEffect } from 'react';
import { getTours } from '@/sanity/sanity-utils';
import { Tour } from "@/types/Tour";
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export default function Tours() {
    const [tours, setTours] = useState<Tour[]>([]); 

    useEffect(() => {
        async function fetchTours() {
            const toursData = await getTours();
            setTours(toursData);
        }
        fetchTours();
    }, []);
     
    return (
      <div className="max-w-6xl pt-10 mx-auto">
          <h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12 pb-12">Tours</h1>
      <div className="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 grid-flow-row w-auto 2xl:h-auto 2xl:square">
            {tours.map((tour) => (
                <div className="max-w-sm rounded drop-shadow-lg hover:drop-shadow-xl border" key={tour._id}>
                    {tour.image1 && (
                        <Link href={`/blog/${tour.slug}`} rel="noreferrer" passHref>
                            <Image className="w-full" src={tour.image1}
                            alt={tour.title}
                            width={350}
                            height={300} />
                        </Link>
                    )}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{tour.title}</div>
                        <div className="text-gray-700 text-base overflow-hidden">
                            {tour.excerpt}
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link href={`/blog/${tour.slug}`} rel="noreferrer" passHref className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-grey-100">
                            Read More ...
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
