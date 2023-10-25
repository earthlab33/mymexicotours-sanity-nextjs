import {getProjects} from '../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="grid mt-16">
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 w-full">
        {projects.map((project) => (
          <div key={project._id} className="relative group bg-gray-900">
            <Link href={`${project.url}`} key={project._id}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="responsive"
                  width={750}
                  height={300}
                  className="block object-cover group-hover:opacity-50"
                />
              )}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-center text-2xl text-white">
                  {project.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
