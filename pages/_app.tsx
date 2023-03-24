import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import '../public/fonts.css';
import { ThemeProvider } from 'components'

const App = ({ Component, pageProps }: AppProps) => {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
       </ThemeProvider>
      </>

  );
};


export default App;
