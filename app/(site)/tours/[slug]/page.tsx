// import { getPage } from '../../../sanity/sanity-utils';
import { getTour } from "@/sanity/sanity-utils";
import { Tour } from "@/types/Tour";
import { PortableText } from '@portabletext/react';
// import htm from 'htm'
// import vhtml from 'vhtml'
// import {toHTML, uriLooksSafe} from '@portabletext/to-html'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    params: { slug: string, buttonUrl: string, buttonText: string }
}

export default async function Tourpost({params}: Props) {
  const tour = await getTour(params.slug);
  

return (
    <div className="max-w-6xl pt-10 mx-auto px-3.5 md:px-20">
                  <Link href="/tours/">
            ← Back to Tour Index
          </Link>
        <h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12">{tour.title}</h1>
        {tour.image1 && (
  <div className="mt-5 w-auto mx-auto px-12 py-2">
    <Image 
      src={tour.image1} 
      alt={tour.image1Alt} 
      width={700} 
      height={Math.round(700 / .75)} 
      layout="responsive"
    />
  </div>
)}
        <div className="mt-5 text-lg text-slate-100"><PortableText value={tour.content} /></div>
        {tour.image2 && <div className="mt-5 float-left px-12 py-2"><Image src={tour.image2} alt={tour.image2Alt} width={300} height={300} /></div>}
        {tour.content2 && (<div className={`mt-5 text-lg text-slate-100 ${tour.image2 ? 'w-1/2' : ''}`}><PortableText value={tour.content2} /></div>)}
         {tour.content3 && <div className="mt-5 text-lg text-slate-100"><PortableText value={tour.content3} /></div>}   
         {tour.content4 && <div className="mt-5 text-lg text-slate-100"><PortableText value={tour.content4} /></div>}   
         {tour.buttonUrl && <div className="text-center"><Link href={tour.buttonUrl} className="bg-red-700 hover:bg-red-500 drop-shadow-md text-white px-4 py-2 mt-6 rounded inline-block">
                            {tour.buttonText || 'Click Me'}
                        </Link></div>} 
    </div>
)
}
