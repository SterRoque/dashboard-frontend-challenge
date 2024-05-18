import { Grid } from '@chakra-ui/react';
import { MentorProfileCard } from '../MentorProfileCard';
import { MentorAboutCard } from '../MentorAboutCard';

export function MentorSection() {
   return (
      <Grid
         w='100%'
         h='100%'
         bgColor='gray.100'
         templateRows='repeat(2, 1fr)'
         templateColumns='repeat(2, 1fr)'
         gap='24px'
      >
         <MentorProfileCard />

         <MentorAboutCard />
      </Grid>
   );
}
