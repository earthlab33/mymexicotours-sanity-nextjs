// import { getPage } from '../../../sanity/sanity-utils';
import { getPost } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import { PortableText } from '@portabletext/react';
// import htm from 'htm'
// import vhtml from 'vhtml'
// import {toHTML, uriLooksSafe} from '@portabletext/to-html'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    params: { slug: string, buttonUrl: string, buttonText: string }
}

export default async function Blogpost({params}: Props) {
  const post = await getPost(params.slug);
  

return (
    <div className="max-w-6xl pt-10 mx-auto sm:px-3.5 md:px-20">
                  <Link href="/blog/">
            ← Back to Blog Index
          </Link>
        <h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12">{post.title}</h1>
        {post.image1 && (
  <div className="mt-5 w-[700px] mx-auto px-12 py-2">
    <Image 
      src={post.image1} 
      alt={post.image1Alt} 
      width={700} 
      height={Math.round(700 / .75)} 
      layout="responsive"
    />
  </div>
)}
        <div className="mt-5 text-lg text-slate-100"><PortableText value={post.content} /></div>
        {post.image2 && <div className="mt-5 float-left px-12 py-2"><Image src={post.image2} alt={post.image2Alt} width={300} height={300} /></div>}
        {post.content2 && (<div className={`mt-5 text-lg text-slate-100 ${post.image2 ? 'w-1/2' : ''}`}><PortableText value={post.content2} /></div>)}
         {post.content3 && <div className="mt-5 text-lg text-slate-100"><PortableText value={post.content3} /></div>}   
         {post.content4 && <div className="mt-5 text-lg text-slate-100"><PortableText value={post.content4} /></div>}   
         {post.buttonUrl && <div className="text-center"><Link href={post.buttonUrl} className="bg-red-700 hover:bg-red-500 drop-shadow-md text-white px-4 py-2 mt-6 rounded inline-block">
                            {post.buttonText || 'Click Me'}
                        </Link></div>} 
    </div>
)
}
