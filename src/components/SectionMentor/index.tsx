import { Grid } from '@chakra-ui/react';
import { MentorProfile } from '../MentorProfileCard';
import { AboutMentorCard } from '../AboutMentorCard';

export function SectionMentor() {
   return (
      <Grid
         w='100%'
         h='100%'
         bgColor='gray.100'
         templateRows='repeat(2, 1fr)'
         templateColumns='repeat(2, 1fr)'
         gap='24px'
      >
         <MentorProfile />

         <AboutMentorCard />
      </Grid>
   );
}
