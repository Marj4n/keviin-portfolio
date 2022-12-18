import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tomodachi Company Design">
    <Container>
      <Title>
        Tomodachi Company Design <Badge>2022-2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/posts/TomodachiTumb.png" alt="icon" />
      </Center>
      <P>Design for my company, made by my self using figma.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>made with</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/08/18</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>The Design</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Home Page</Badge>
          <span>1440px Width & 4350px Height</span>
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/posts/TomodachiHomePage.png"
        alt="Tomodachi Home"
      />

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>About Page</Badge>
          <span>1440px Width & 3072px Height</span>
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/posts/TomodachiAboutPage.png"
        alt="Tomodachi About"
      />

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Service Page</Badge>
          <span>1440px Width & 2252.8px Height</span>
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/posts/TomodachiServicePage.png"
        alt="Tomodachi Service"
      />

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Contact Page</Badge>
          <span>1440px Width & 1228.8px Height</span>
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/posts/TomodachiContactPage.png"
        alt="Tomodachi Contact"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
