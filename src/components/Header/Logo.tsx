import NextLink from 'next/link'
import { Heading, Link } from '@chakra-ui/react'
import { useToken } from '@chakra-ui/react'

export const Logo = () => (
  <NextLink href="/" passHref>
    <Link
      mr="8px"
      display="flex"
      alignItems="center"
      borderRadius="base"
      _hover={{ textDecoration: 'none' }}
    >
      <LogoIcon />
      <Heading
        as="span"
        ml={2}
        fontWeight="400"
        fontSize="2xl"
        lineHeight={1}
        mt="6px"
        color="textProminent"
        sx={{
          '@media screen and (max-width: 500px)': {
            display: 'none',
          },
        }}
      >
        Nawrasse Dahman
      </Heading>
    </Link>
  </NextLink>
)

function LogoIcon() {
  const primaryColor = useToken('colors', 'primary')

  return (
    <svg class="icon">
     <use xlink:href="./logo"></use>
    </svg>
  )
}
