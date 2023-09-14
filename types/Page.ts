import { PortableTextBlock } from 'sanity';

export type Page = {
    _id: string,
    _createdAt: Date,
    title: string,
    slug: string,
    content: PortableTextBlock[],
    content2: PortableTextBlock[],
    content3: PortableTextBlock[],
    content4: PortableTextBlock[],
    image1: string,
    image1Alt: string,
    image2: string,
    image2Alt: string,
    mediaUrl: string,
    buttonUrl: string,
    buttonText: string
};
