import { Box, Flex, Image, Text } from '@chakra-ui/react';
import instagramIcon from '@assets/icons/instagram.svg';
import facebookIcon from '@assets/icons/facebook.svg';
import youtubeIcon from '@assets/icons/youtube.svg';
import imageMentor from '@assets/images/image-mentor.png';
import { FaPen } from 'react-icons/fa';
import { Button } from '../Button';

export function MentorProfileCard() {
   return (
      <Flex
         bgColor='white'
         w='100%'
         h='16.5rem'
         borderRadius='1rem'
         p='1.5625rem'
         borderColor='gray.50'
         borderWidth='0.0625rem'
      >
         <Flex
            gap='2rem'
            align='center'
            w='100%'
         >
            <Image
               src={imageMentor}
               w='12.5rem'
               h='12.5rem'
               borderRadius='1rem'
            />
            <Flex
               align='start'
               justify='space-between'
               w='100%'
            >
               <Box>
                  <Text
                     fontSize='1.5rem'
                     fontWeight='700'
                  >
                     Italo Souza Pereira
                  </Text>
                  <Text fontSize='1rem'>Lead Marketing Digital</Text>

                  <Flex
                     gap='1.125rem'
                     mt='2rem'
                  >
                     <Image
                        src={instagramIcon}
                        cursor='pointer'
                     />
                     <Image
                        src={facebookIcon}
                        cursor='pointer'
                     />
                     <Image
                        src={youtubeIcon}
                        cursor='pointer'
                     />
                  </Flex>
               </Box>
               <Button icon={FaPen} />
            </Flex>
         </Flex>
      </Flex>
   );
}
