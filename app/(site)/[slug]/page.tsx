// import { getPage } from '../../../sanity/sanity-utils';
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
  const page = await getPage(params.slug);


return (
    <div>
        <h1 className="text-7xl font-extrabold text-center">{page.title}</h1>
        <div className="mt-5 text-lg text-white"><PortableText value={page.content} /></div>
    </div>
)
}
