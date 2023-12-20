'use client';
// import { getPage } from '../../../sanity/sanity-utils';
import { getPage } from "@/sanity/sanity-utils";
import { Page } from "@/types/Page";
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
// import htm from 'htm'
// import vhtml from 'vhtml'
// import {toHTML, uriLooksSafe} from '@portabletext/to-html'
import Image from 'next/image';
import Link from 'next/link';
import {Media, Video } from '@vidstack/player-react';


type Props = {
    params: { slug: string, title: string, mediaUrl: string, buttonUrl: string, buttonText: string, content: PortableTextBlock[], content2: PortableTextBlock[], content3: PortableTextBlock[], content4: PortableTextBlock[], content5: PortableTextBlock[], content6: PortableTextBlock[], image1: string, image1Alt: string, image2: string, image2Alt: string, image3: string, image3Alt: string, image4: string, image4Alt: string, image5: string, image5Alt: string, image6: string, image6Alt: string }
}

export default async function Page({params}: Props) {
//   const page = await getPage(params.slug);
  const page: Page | null = await getPage(params.slug);

  if (!page) {
    return <div>Page not found</div>;  // or some other error handling
  }

return (
    <div className="max-w-6xl pt-10 mx-auto px-3.5 md:px-20">
        {page.title && (<h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12">{page.title}</h1>)}
        {page.image1 && <div className="mt-5 w-1/2 float-left px-12 py-2"><Image src={page.image1} alt={page.image1Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        {page.content && (<div className={`mt-5 text-left text-lg text-white ${page.image1 ? 'w-full' : ''}`}><PortableText value={page.content} /></div>)}
        <div className="clear-both"></div>
        {page.content2 && (<div className={`mt-5 text-left text-lg text-white ${page.image2 ? 'w-full' : ''}`}><PortableText value={page.content2} /></div>)}
        {page.image2 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image2} alt={page.image2Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div>
        {page.content3 && (<div className={`mt-5 text-left text-lg text-white ${page.image3 ? 'w-full' : ''}`}><PortableText value={page.content3} /></div>)}
        {page.image3 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image3} alt={page.image3Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div>
        {page.content4 && (<div className={`mt-5 text-left text-lg text-white ${page.image4 ? 'w-full' : ''}`}><PortableText value={page.content4} /></div>)}
        {page.image4 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image4} alt={page.image4Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div>
        {page.content5 && (<div className={`mt-5 text-left text-lg text-white ${page.image5 ? 'w-full' : ''}`}><PortableText value={page.content5} /></div>)}
        {page.image5 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image5} alt={page.image5Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div>
        {page.content6 && (<div className={`mt-5 text-left text-lg text-white ${page.image6 ? 'w-full' : ''}`}><PortableText value={page.content6} /></div>)}
        {page.image6 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image6} alt={page.image6Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div> 

         {page.buttonUrl && <div className="text-center"><Link href={page.buttonUrl} className="bg-red-700 hover:bg-red-500 drop-shadow-md text-white px-4 py-2 mt-6 rounded inline-block">
                            {page.buttonText || 'Click Me'}
                        </Link></div>} 
        {page.mediaUrl && (
             <div className="max-w-6xl pt-10 mx-auto sm:px-3.5 md:px-20">
             <Media>
    <Video loading="visible" controls preload="auto">
        <video
            src={page.mediaUrl}
            preload="none"
            data-video="0"
            controls
        />
    </Video>
  </Media>
      </div>
        )}
    </div>
)
}