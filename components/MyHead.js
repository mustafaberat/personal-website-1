import React from 'react';
import Head from 'next/head';

export const SITE_URL = 'https://mustafaberat.vercel.app';
export const SITE_NAME = 'Mustafa Berat ARU';
export const DEFAULT_DESCRIPTION =
  'Mustafa Berat ARU — Senior Software Engineer. Personal site with resume, about, and contact.';

const MyHead = ({
  title = `${SITE_NAME} — Senior Software Engineer`,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}) => {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = `${SITE_URL}/m-darkBlue.png`;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    email: 'mustafa.berat.aru@gmail.com',
    jobTitle: 'Senior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'ARU SOFT',
      url: 'https://arusoft.vercel.app/',
    },
    sameAs: [
      'https://github.com/mustafaberat/',
      'https://www.linkedin.com/in/mustafaberataru/',
      'https://medium.com/@mustafaberat',
      'https://www.instagram.com/mustafaberataru/',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: ['Mustafa Berat', 'mustafaberat.vercel.app'],
    url: `${SITE_URL}/`,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/m-blue.png" />
      <link rel="apple-touch-icon" href="/m-darkBlue.png" />
      <meta name="theme-color" content="#03061c" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="author" content={SITE_NAME} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />

      {path === '/' && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteJsonLd),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personJsonLd),
            }}
          />
        </>
      )}
    </Head>
  );
};

export default MyHead;
