import React, { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

export const SEO: FC<Props> = ({ title, description, keywords, image, tags = [] }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      {image && (
        <>
          <meta name='twitter:image' content={image} />
          <meta property='og:image' content={image} />
        </>
      )}
      {keywords && <meta name='keywords' content={keywords} />}
      {tags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      {/* Add favicons */}
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      {/* Add more favicons for different devices if needed */}
    </Head>
  );
};
