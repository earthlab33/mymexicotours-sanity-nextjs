import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { Tour } from "@/types/Tour";
import { Post } from "@/types/Post";


export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      content2,
      content3,
      content4,
      "image1": image1.asset->url,
      image1Alt,
      "image2": image2.asset->url,
      image2Alt,
      mediaUrl,
      buttonUrl,
      buttonText
    }`,
    { slug }
  )
}

export async function getTours(): Promise<Tour[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "tour"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      upcoming,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
    }`
  )
}

export async function getTour(slug: string): Promise<Tour> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "tour" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      content2,
      content3,
      content4,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
      "image1": image1.asset->url,
      image1Alt,
      "image2": image2.asset->url,
      image2Alt,
      mediaUrl,
      buttonUrl,
      buttonText
    }`,
    { slug }
  )
}

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image1": image1.asset->url,
      content,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      content2,
      content3,
      content4,
      "image1": image1.asset->url,
      "image2": image2.asset->url,
      "image1Alt": image1.alt,
      "image2Alt": image2.alt,
      "buttonUrl": buttonUrl,
      "buttonText": buttonText,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
    }`,
    { slug }
  )
}