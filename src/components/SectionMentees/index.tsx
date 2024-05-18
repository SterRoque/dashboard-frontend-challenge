import {
   Box,
   Container,
   Flex,
   Grid,
   Icon,
   Image,
   Text,
} from '@chakra-ui/react';
import { MenteesProfile } from '../MenteesProfile';

export function SectionMentees() {
   return (
      <Grid
         w='100%'
         h='100%'
         bgColor='red'
         templateRows='repeat(2, 1fr)'
         templateColumns='repeat(2, 1fr)'
         gap='24px'
      >
         <MenteesProfile />
      </Grid>
   );
}
