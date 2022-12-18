import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbOldPortfolio from '../public/images/contents/kvn-netlify-app.png'
import thumbChessGame from '../public/images/contents/chess-gemink-netlify-app.png'
import thumbSolitaire from '../public/images/contents/solitairuuuu-netlify-app.png'

const Posts = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Chess gemink"
            thumbnail={thumbChessGame}
            href="https://chess-gemink.netlify.app/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Solitaire"
            thumbnail={thumbSolitaire}
            href="https://solitairuuuu.netlify.app/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My old web portfolio"
            thumbnail={thumbOldPortfolio}
            href="https://kvn.netlify.app/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
