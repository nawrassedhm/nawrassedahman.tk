import { Box, Heading, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { DashDivider, WritingPreview } from 'components'
import MaxWhitmoreDiary from 'images/MaxWhitmoreDiary.png'
import TheBlast from 'images/TheBlast.png'
import { Layout } from 'layout'
import { PreviewImageKeys, WritingPosts } from 'utils/getFrontMatter'

const WritingImages: Record<PreviewImageKeys, StaticImageData> = {
  MaxWhitmoreDiary,
  TheBlast
}

export const WritingLayout = ({ posts }: WritingPosts) => (
  <Layout>
    <SlideFade in={true} offsetY="12px">
      <Box maxW="720px">
        <Heading as="h1" fontSize={['40px', '48px', '56px']}>
          Writing
        </Heading>
      </Box>
      <Text>
        Some Of The Short Horror Stories I Wrote In My FreeTime
      </Text>
      <DashDivider my="8" />
      <SimpleGrid columns={[1, 2]} minChildWidth="300px" spacing="8">
        {posts.map((post) => {
          if (post.data.flag) return null

          return (
            <WritingPreview
              previewImage={WritingImages[post.data.previewImage]}
              key={post.slug}
              {...post}
            />
          )
        })}
      </SimpleGrid>
    </SlideFade>
  </Layout>
)
