'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Photo } from "@/types/Photo";
import { getPhotos } from '@/sanity/sanity-utils';
import RingLoader from "react-spinners/RingLoader";

export default function Photos() {
    const [photos, setPhotos] = useState<Photo[]>([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchPhotos() {
          const photosData = await getPhotos();
          setPhotos(photosData);
          setLoading(false);
      }
      fetchPhotos();
  }, []);
    
        return (
          <>
          <div className="mt-12">
            <div className="text-center px-20">
            </div>
              <h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12">
                Photos 
              </h1>
              <div className="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-0 grid-flow-row w-auto 2xl:h-auto 2xl:square">
            {photos.map((photo) => (
                <div className="max-w-sm rounded mx-auto drop-shadow-lg hover:drop-shadow-xl border relative group" key={photo._id}>
                    {photo.image1 && (
                        <Link href={`/photo/${photo.slug}`} rel="noreferrer" passHref className="block w-full h-48 group cover fill cursor-pointer">
                            <Image className="w-full" src={photo.image1}
                            alt={photo.title}
                            width={350}
                            height={350} />
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"> {/* Title that appears on hover */}
          <span className="text-white bg-black bg-opacity-50 p-2 rounded">
            {photo.title}
          </span>
        </div>
                        </Link>
                    )}
                </div>
            ))}
        </div>
  {loading && (
              <RingLoader
                color="#eccf10"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mx-auto my-10"
              />
            )}
  </div>
          </>
        );
      }