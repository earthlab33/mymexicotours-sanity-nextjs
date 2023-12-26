import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '859n8uf6',
    dataset: "production",
    title: "My Mexico Tours",
    apiVersion: '2023-12-20',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
});

// Path: sanity.d.ts

export default config;