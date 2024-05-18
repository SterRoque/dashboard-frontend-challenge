import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import instagramIcon from '@assets/icons/instagram.svg';
import facebookIcon from '@assets/icons/facebook.svg';
import youtubeIcon from '@assets/icons/youtube.svg';

import imageMentor from '@assets/images/image-mentor.png';
import { FaPen } from 'react-icons/fa';

export function MenteesProfile() {
   return (
      <Flex
         bgColor='white'
         h='264px'
         borderRadius='16px'
         p='25px'
      >
         <Flex
            gap='32px'
            align='center'
            w='100%'
         >
            <Image
               src={imageMentor}
               w='200px'
               h='200px'
               borderRadius='16px'
            />
            <Flex
               align='start'
               justify='space-between'
               w='100%'
            >
               <Box>
                  <Text
                     fontSize='24px'
                     fontWeight='700'
                  >
                     Italo Souza Pereira
                  </Text>
                  <Text fontSize='16px'>Lead Marketing Digital</Text>

                  <Flex
                     gap='18px'
                     mt='32px'
                  >
                     <Image src={instagramIcon} />
                     <Image src={facebookIcon} />
                     <Image src={youtubeIcon} />
                  </Flex>
               </Box>
               <Flex
                  bgColor='indigo.500'
                  w='40px'
                  h='40px'
                  align='center'
                  justify='center'
                  borderRadius='8px'
                  cursor='pointer'
               >
                  <Icon
                     as={FaPen}
                     w='18px'
                     h='18px'
                     color='white'
                  />
               </Flex>
            </Flex>
         </Flex>
      </Flex>
   );
}
