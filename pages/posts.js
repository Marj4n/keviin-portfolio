import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbJokowi from '../public/images/posts/jokowi.png'
import thumbTomodachi from '../public/images/posts/TomodachiTumb.png'

const Works = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <PostGridItem
          id="tomodachi"
          thumbnail={thumbTomodachi}
          title="Tomodachi Company Web Design">
            built with figma
          </PostGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <PostGridItem
            id="jokowi"
            thumbnail={thumbJokowi}
            title="Oooooomagaaa"
          >
            apayah ngaps
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
