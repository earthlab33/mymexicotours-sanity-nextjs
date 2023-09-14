const page = {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'image1',
            title: 'Image1',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'content2',
            title: 'Content2',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'content3',
            title: 'Content3',
            type: 'array',
            of: [{ type: 'block' }],
        },      
        {
            name: 'content4',
            title: 'Content4',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'mediaUrl',
            title: 'Media URL',
            type: 'url',
        },
        {
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'url',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ],
};

export default page;