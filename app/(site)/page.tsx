import {getProjects} from '../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';


export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="grid mt-16">
      <div className="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-rows-2 gap-0 grid-flow-row w-auto 2xl:h-auto 2xl:square">
     {projects.map((project) => (
           <div className="box" key={project._id}>
           <div className="gridimg square lg:aspect-[4/3] sm:aspect-[4/3]">
       <Link 
        href={`/projects/${project.slug}`}
       key={project._id} 
       className="relative block bg-gray-900 group">
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={750}
            height={300}
            className="block h-auto w-full absolute square inset-0 object-cover group-hover:opacity-50"
          />
        )}
       {/* <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>  */}
       <div className="relative p-2">
                    <div className="mt-40">
                      <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="p-2">
                          <h2 className="text-center text-2xl text-white">
                            {project.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
    </Link>
    </div>
    </div>
      ))}
      </div>
    </main>
  )
}
