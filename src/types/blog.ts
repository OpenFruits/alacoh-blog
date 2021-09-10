import type { ListContentsResponse, ContentResponse } from "./api";

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title: string;
  category: CategoryResponse;
  discription: string;
  body: string;
  ogimage: ImageResponse;
  writer: WriterResponse;
}>;

export type CategoryResponse = ContentResponse<{ name: string }>;

export type ImageResponse = {
  url: string;
  height: number;
  width: number;
};

export type WriterResponse = ContentResponse<{
  name: string;
  text: string;
  image: ImageResponse;
}>;
