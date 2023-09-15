import React from "react";
import Image from 'next/image';
import Link from 'next/link';

interface VistaFields {
  title: string;
  thumb: {
    thumbnails: {
      large: {
        url: string;
      };
    };
  }[];
}

interface VistaProps {
  vista: {
    id: string;
    fields: VistaFields;
  };
}

export default function Vista({ vista }: VistaProps) {
  return (
    <Link href={`/vista/${vista.id}`} passHref className="relative block w-full h-48 group cover fill"> 
        <Image 
          src={vista.fields.thumb[0].thumbnails.large.url} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={vista.fields.title}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"> {/* Title that appears on hover */}
          <span className="text-white bg-black bg-opacity-50 p-2 rounded">
            {vista.fields.title}
          </span>
        </div>
    </Link>
  );
}
