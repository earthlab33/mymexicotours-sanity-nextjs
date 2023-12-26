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
    content5: PortableTextBlock[],
    content6: PortableTextBlock[],
    image1: string,
    image1Alt: string,
    image2: string,
    image2Alt: string,
    image3: string,
    image3Alt: string,
    image4: string,
    image4Alt: string,
    image5: string,
    image5Alt: string,
    image6: string,
    image6Alt: string,
    mediaUrl: string,
    buttonUrl: string,
    buttonText: string
};
