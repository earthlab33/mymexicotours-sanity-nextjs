import { PortableTextBlock } from 'sanity';

export type Page = {
    _id: string,
    _createdAt: date,
    title: string,
    slug: string,
    content: PortableTextBlock[]

};
