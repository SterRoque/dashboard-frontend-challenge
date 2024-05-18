import { Header } from '@components/Header';
import { Container } from '@chakra-ui/react';
import { MentorSection } from '@components/MentorSection';

export function Home() {
   return (
      <Container
         bgColor='gray.100'
         h='100vh'
         maxW='100%'
      >
         <Header />
         <MentorSection />
      </Container>
   );
}
