'use client';
// import { getPage } from '../../../sanity/sanity-utils';
import { getPage } from "@/sanity/sanity-utils";
import { Page } from "@/types/Page";
import { PortableText } from '@portabletext/react';
// import htm from 'htm'
// import vhtml from 'vhtml'
// import {toHTML, uriLooksSafe} from '@portabletext/to-html'
import Image from 'next/image';
import Link from 'next/link';
import {Media, Video } from '@vidstack/player-react';


type Props = {
    params: { slug: string, title: string, mediaUrl: string, buttonUrl: string, buttonText: string, content: PortableTextBlock[], content2: PortableTextBlock[], content3: PortableTextBlock[], content4: PortableTextBlock[], image1: string, image1Alt: string, image2: string, image2Alt: string }
}

export default async function Page({params}: Props) {
//   const page = await getPage(params.slug);
  const page: Page | null = await getPage(params.slug);

  if (!page) {
    return <div>Page not found</div>;  // or some other error handling
  }

return (
    <div className="max-w-6xl pt-10 mx-auto sm:px-3.5 md:px-20">
        {page.title && (<h1 className="text-red-700 text-2xl font-extrabold text-center mt-12">{page.title}</h1>)}
        {page.image1 && <div className="mt-5 w-1/2 float-left px-12 py-2"><Image src={page.image1} alt={page.image1Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        {page.content && (<div className={`mt-5 float-left text-lg text-white ${page.image2 ? 'w-1/2' : ''}`}><PortableText value={page.content} /></div>)}
         {page.content && <div className="mt-5 text-lg text-white"><PortableText value={page.content} /></div>}  
        <div className="clear-both"></div>
        {page.content2 && (<div className={`mt-5 float-left text-lg text-white ${page.image2 ? 'w-1/2' : ''}`}><PortableText value={page.content2} /></div>)}
        {page.image2 && <div className="mt-5 float-left px-12 py-2"><Image src={page.image2} alt={page.image2Alt} width={300} height={Math.round(300 / .75)}  /></div>}
        <div className="clear-both"></div>
         {page.content3 && <div className="mt-5 text-lg text-white"><PortableText value={page.content3} /></div>}  
         {page.content4 && <div className="mt-5 text-lg text-white"><PortableText value={page.content4} /></div>}  

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