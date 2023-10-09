import React from "react";
import Image from 'next/image';
import Link from 'next/link';

interface VistaFields {
  title: string;
  images: {
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
  // Check if image exists and has the expected structure
  const imageUrl = vista.fields.images && vista.fields.images[0] && vista.fields.images[0].thumbnails && vista.fields.images[0].thumbnails.large && vista.fields.images[0].thumbnails.large.url;

  return (
    <Link href={`/vista/${vista.id}`} passHref className="relative block w-full h-60 group cover fill"> 
      {/* Render the Image component only if imageUrl exists */}
      {imageUrl && (
        <Image 
          src={imageUrl} 
          className="w-full h-auto"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={vista.fields.title}
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"> 
        <span className="text-white bg-black bg-opacity-50 p-2 rounded">
          {vista.fields.title}
        </span>
      </div>
    </Link>
  );
}