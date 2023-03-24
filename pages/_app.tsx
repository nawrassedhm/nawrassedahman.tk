import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import '../public/fonts.css';
import { ThemeProvider } from 'components'
import { DefaultSeo, ThemeProvider } from 'components'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import * as gtag from 'utils/analytics'
import '../public/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
     <>
      <NextSeo
        title="Lazar Nikolov - Developer, designer, course creator."
        description="Full-stack Engineer, UI Designer, and Open Source Advocate."
        twitter={{
          cardType: "summary_large_image",
          handle: "@NikolovLazar",
        }}
        openGraph={{
          url: "https://nikolovlazar.com",
          title: "Lazar Nikolov - Developer, designer, course creator.",
          description:
            "Full-stack Engineer, UI Designer, and Open Source Advocate.",
          locale: "en_US",
          images: [
            {
              url: "https://nikolovlazar.com/assets/images/social.png",
              width: 1200,
              height: 630,
              alt: "Lazar Nikolov",
              type: "image/png",
            },
          ],
        }}
      />
       <ThemeProvider>
        <Component />
       </ThemeProvider>
      </>

  );
};
