import { getProject } from "../../../../sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    params: { project: string }
};


export default async function Project({params} : Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
    <div>
        <header className="flex items-center justlfy-between">
        <h1 className="flex mt-2 font-extrabold text-gray-500 text-4xl">{project.name}</h1>
        <Link href={`${project.url}`} target="_blank" rel="noreferrer"passHref className="flex flex-end bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap">
            Read More...
        </Link>
        </header>
        <div className="text-lg text-white mt-5"><PortableText value={project.content} /></div>
        <Image
        src={project.image}
        alt={project.name}
        width={700}
        height={500}
        className="mt-10 object-cover rounded-xl"
        />
        </div>)
}