import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  Tag,
  Avatar,
  TagLabel,
  Stack,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an full-stack developer!
        {/* indie app developer based in Void! */}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kevin Yardan Fauzan
          </Heading>
          <p>Full-stack developer ( Android / Web / UI&UX )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/cirno.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Kevin is a full-stack developer{/* based in Void*/} with a passion for
          building digital services/stuff he wants. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code. When not online, he loves
          playing game.{' '}
          {/* <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink> */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Void, hueco mundo.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Kuring asup SD
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Kuring asup SMP
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Study at SMK Wikrama Bogor
        </BioSection>
      </Section> */}

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skill
        </Heading>
        <Stack gap={3}>
          <Flex gap={2}>
            <Text fontSize={18} fontWeight="bold">
              Front-end
            </Text>
            <Tag size="lg" colorScheme="yellow" borderRadius="full">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>JavaScript</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="blue" borderRadius="full">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>React JS</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="white" borderRadius="full">
              <Avatar
                src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>Next JS</TagLabel>
            </Tag>
          </Flex>
          <Flex gap={2}>
            <Text fontSize={18} fontWeight="bold">
              Back-end
            </Text>
            <Tag size="lg" colorScheme="green" borderRadius="full">
              <Avatar
                src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>Node JS</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="red" borderRadius="full">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>Laravel</TagLabel>
            </Tag>
          </Flex>
          <Flex gap={2}>
            <Text fontSize={18} fontWeight="bold">
              Android
            </Text>
            <Tag size="lg" colorScheme="blue" borderRadius="full">
              <Avatar
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/flutter_I6JGxZE.jpg"
                size="xs"
                ml={-1}
                mr={2}
              />
              <TagLabel>Flutter</TagLabel>
            </Tag>
          </Flex>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Game,{' '}
          <Link href="https://www.instagram.com/__kevnnn_/" target="_blank">
            Photography
          </Link>
          , Programming, Machine Learning, and Design.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Marjan02" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Marjan02
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/__kevnnn_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @__kevnnn_
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://youtu.be/dQw4w9WgXcQ"
            title="Cirno keren coyyyyy"
            thumbnail={thumbCirno}
          >
            My YouTube channel (&gt;100M subs)
          </GridItem>
          <GridItem
            href="https://youtu.be/dQw4w9WgXcQ"
            title="Kvn.netlify.app"
            thumbnail={thumbKvn}
          >
            My old portfolio website
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
