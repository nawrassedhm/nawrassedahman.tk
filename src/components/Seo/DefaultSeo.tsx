import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import React from 'react'
import config from './config'

interface Props {
  title?: string
}

export const DefaultSeo = (props: Props) => (
  <React.Fragment>
    <NextDefaultSeo
      title={props.title || config.title}
      description={config.description}
      canonical={config.url}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: config.url,
        title: config.title,
        description: config.description,
        images: [
          {
            url: config.image,
            alt: config.title,
            width: 1280,
            height: 720,
          },
        ],
      }}
      twitter={{
        handle: config.twitter,
        site: config.twitter,
        cardType: 'summary_large_image',
      }}
    />
    
  </React.Fragment>
)
