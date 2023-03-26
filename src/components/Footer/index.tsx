import { Box, Link, Flex } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'

interface ItemProperties {
  href: string
  label: React.ReactNode
}

const Item = ({ href, label }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {label}
  </Link>
)

export const Footer = () => (
  <Box maxW="5xl" marginX="auto" as="footer">
    <DashDivider mt="80px" mb="24px" />
    <Flex gap="12px" wrap="wrap" fontSize="sm">
      <Item
        aria-label="Send Email"
        href="mailto:nawrassedhm@techie.com"
        label="Email"
      />
      /
      <Item
        aria-label="Navigate To Wattpad Profile"
        href="https://www.wattpad.com/nawrassedahman"
        label="Wattpad"
      />
      /
      <Item
        aria-label="Navigate To Letterboxd Profile"
        href="https://www.letterboxd.com/nawrassedahman"
        label="Letterboxd"
      />
      /
      <Item
        aria-label="Navigate To Polywork Profile"
        href="https://www.polywork.com/nawrassedahman"
        label="Polywork"
      />
      /
      <Item
        aria-label="Navigate To GitHub Profile"
        href="https://www.github.com/nawrassedhm"
        label="GitHub"
      />
      /
      <Item
        aria-label="Navigate To LinkedIn Profile"
        href="https://www.linkedin.com/in/nawrassedahman/"
        label="LinkedIn"
      />
    </Flex>
  </Box>
)
