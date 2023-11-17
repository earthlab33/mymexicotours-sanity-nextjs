import { getPhoto } from "@/sanity/sanity-utils";
import { Photo } from "@/types/Photo";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
// import { Metadata } from "next";

type Props = {
    params: { slug: string, title: string, buttonUrl: string, buttonText: string }
}

export default async function Photo({params}: Props) {
  const photo = await getPhoto(params.slug);
  

return (
    <div className="max-w-6xl pt-12 mx-auto px-3.5 md:px-20">
                  <Link href="/photos/">
            ← Back to Photos Index
          </Link>
        <h1 className="text-slate-200 text-2xl font-extrabold text-center mt-12">{photo.title}</h1>
        <div className="mt-5 text-center text-lg text-slate-200"><PortableText value={photo.content} /></div>
        {photo.image1 && (
  <div className="mt-5 w-auto mx-auto px-12 py-2">
    <Image 
      src={photo.image1} 
      alt={photo.image1Alt} 
      width={700} 
      height={Math.round(700 / .75)} 
      layout="responsive"
    />
  </div>
)}
        {photo.image2 && <div className="mt-5 float-left px-12 py-2"><Image src={photo.image2} alt={photo.image2Alt} width={300} height={300} /></div>}
        {photo.content2 && (<div className={`mt-5 text-lg text-black ${photo.image2 ? 'w-1/2' : ''}`}><PortableText value={photo.content2} /></div>)}
    </div>
)
}
