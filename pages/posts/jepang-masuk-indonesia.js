import {
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Image,
  Stack,
  VStack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Masuknya Jepang Ke Indonesia">
    <Container>
      <Title>
        Masuknya Jepang Ke Indonesia <Badge>1941-1945</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/posts/jepang.png" alt="icon" />
      </Center>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Penulis</Meta>
          <span>Kevin Yardan Fauzan</span>
        </ListItem>
        <ListItem>
          <Meta>Created At</Meta>
          <span>19/12/2022</span>
        </ListItem>
      </List>
      <Stack spacing={4}>
        <P>
          Sejarah masuknya Jepang ke Indonesia dimulai pada awal abad ke-20,
          ketika Jepang merupakan salah satu negara yang sedang berkembang pesat
          di Asia. Pada tahun 1942, Jepang menyerang Indonesia dan berhasil
          mengendalikan sebagian besar wilayah Indonesia, termasuk Jakarta,
          hingga tahun 1945.
        </P>
        <P>
          Sebelum masuk ke Indonesia, Jepang telah melakukan penjajahan terhadap
          berbagai negara di Asia, seperti Korea, Taiwan, dan Filipina. Pada
          tahun 1941, Jepang menyerang Amerika Serikat di Pearl Harbor, yang
          kemudian memicu Perang Dunia II.
        </P>
        <P>
          Pada tahun 1942, Jepang menyerang Indonesia dan berhasil menguasai
          wilayah-wilayah strategis, seperti Jakarta, Surabaya, dan Medan.
          Jepang menggunakan tentara dan para pemimpin militer untuk
          mengendalikan Indonesia, yang pada saat itu merupakan wilayah kolonial
          Belanda.
        </P>
        <P>
          Setelah masuk ke Indonesia, Jepang mulai memperkenalkan budaya dan
          adat kebiasaan Jepang ke masyarakat Indonesia. Mereka juga
          memperkenalkan sistem pemerintahan yang berbeda dari yang sebelumnya
          digunakan oleh Belanda.
        </P>
        <p>
          Selama masa penjajahan Jepang, banyak warga Indonesia yang dipaksa
          bekerja keras di pabrik-pabrik dan pertanian untuk memproduksi
          barang-barang yang dibutuhkan oleh Jepang untuk memenangkan Perang
          Dunia II. Banyak warga Indonesia juga dipaksa untuk bergabung dengan
          tentara Jepang atau menjadi pekerja paksa di pabrik-pabrik Jepang.
        </p>
        <P>
          Pada tahun 1945, setelah Jepang kalah dalam Perang Dunia II, tentara
          Sekutu berhasil membebaskan Indonesia dari penjajahan Jepang. Setelah
          itu, Indonesia menjadi negara merdeka dan mulai membangun kembali
          negara yang hancur akibat perang.
        </P>
      </Stack>
      <VStack mt={10}>
        <WorkImage src="/images/posts/japanis.png" alt="japanis" />
      </VStack>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
