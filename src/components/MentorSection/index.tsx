import { Box, Flex, Grid, Icon, Text } from '@chakra-ui/react';
import { MentorProfileCard } from '../MentorProfileCard';
import { MentorAboutCard } from '../MentorAboutCard';
import { MentorInformationsCard } from '../MentorInformationsCard';
import { FaArrowLeft } from 'react-icons/fa6';

export function MentorSection() {
   return (
      <Box>
         <Flex
            justify='space-between'
            py='14px'
         >
            <Text
               fontSize='1.25rem'
               fontWeight={700}
            >
               Mentorados
            </Text>
            <Flex
               align='center'
               gap='0.625rem'
               cursor='pointer'
            >
               <Icon as={FaArrowLeft} />
               <Text>Voltar</Text>
            </Flex>
         </Flex>
         <Grid
            w='100%'
            h='100%'
            bgColor='gray.100'
            gridTemplateColumns='1fr 1fr'
            gridTemplateRows='0.5fr'
            gap='0.9375rem'
         >
            <MentorProfileCard />

            <MentorAboutCard />

            <MentorInformationsCard />
         </Grid>
      </Box>
   );
}
