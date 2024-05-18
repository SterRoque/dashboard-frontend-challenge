import { Header } from '@components/Header';
import { Container } from '@chakra-ui/react';
import { SectionMentees } from '@components/SectionMentees';

export function Home() {
   return (
      <Container
         bgColor='gray.100'
         h='100vh'
         maxW='100%'
      >
         <Header />
         <SectionMentees />
      </Container>
   );
}
