import React from 'react'
import { Divider, Box } from '@chakra-ui/react'

import { Layout } from '../components/layout'
import { Favorites, History, Projects, Writing } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Box maxW="4xl" marginX="auto">
        <History />
        <Divider my="60px" variant="dashed" />
        <Projects />
        <Divider my="60px" variant="dashed" />
        <Writing />
        <Divider my="60px" variant="dashed" />
        <Favorites />
      </Box>
    </Layout>
  )
}

export default IndexPage
