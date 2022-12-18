import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Jokowi 😍😍😍">
    <Container>
      <Title>
        Jokowi 😍😍😍 <Badge>2006-2200</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/posts/jokowi.png" alt="icon" />
      </Center>
      <P>Asepan kuda</P>
      <P>Abdi Jokowi enjoyer</P>
      <P>dom jelek</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript Enjoyer</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://kvn.netlify.app/">
            v1.0.0
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://kvn.netlify.app/">
            <Badge mr={2}>lorem</Badge>
            lorem gemink
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          User reviews&nbsp;
          <Link
            target="_blank"
            href="https://kvn.netlify.app/"
          >
            from Ngaps
          </Link>
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Apa coba</Badge>
          <span>iyadeh ngaps</span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>boleh</Badge>
          <span>apa apaan</span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>apabila</Badge>
          <span>facter</span>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/posts/jokowi-keren.png" alt="Jokowi" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
