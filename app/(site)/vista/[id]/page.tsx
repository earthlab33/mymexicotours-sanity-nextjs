'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface VistaFields {
    title: string;
    description: string;
    images: { url: string; width: number; height: number }[];
  }

const SingleVista = () => {
    const [loading, setLoading] = useState(true);
    const [vista, setVista] = useState<VistaFields | null>(null);
    const [error, setError] = useState<null | string>(null);
    const pathname = usePathname()
const pathSegments = pathname.split("/");  // Split the path by "/"
const id = pathSegments[pathSegments.length - 1]; // Get the last segment

async function fetchVista(id: string) {
    try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Vistas/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const vistaData = await response.json();
        console.log(vistaData.fields);
        setVista(vistaData.fields);
        setLoading(false);
    } catch (error: unknown) {
        console.error("Error fetching data:", error, "For ID:", id);
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("An error occurred");
        }
    }
}

useEffect(() => {
    if (id) {  
        fetchVista(id);
    }
}, [id]);
  
if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error}</div>;
}

if (vista) {
    return (
      <div id="content" className="py-8 px-10">
        <Head>
          <title>{vista.title}</title>
          <meta name="description" content={`My Mexico Tours Vistas: ${vista.title}`}></meta>
        </Head>
        <main>
            <div className="mt-12 mx-20">
          <Link href="/vistas/">
            ← Back to Vistas
          </Link>
          </div>
          <h1 className="text-red-700 text-2xl font-extrabold text-center mt-12">{vista.title}</h1>
          <div className="text-center mt-5 text-lg text-black">
                  <p>{vista.description}</p>
              </div>
          <div className="xl:w-[992px] lg:w-[992px] md:w-768 sm:w-full h-auto mx-auto mt-10">
            {vista.images && vista.images[0] && 
            <Image 
            src={vista.images[0].url} 
            alt={vista.title}  
            className="w-full h-auto"
            width={vista.images[0].width}
            height={vista.images[0].height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" 
            />}
          </div>
        </main>
      </div>
    );
} else {
    return null;
}
};

export default SingleVista;
