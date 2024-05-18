import { Box, Flex, Text } from '@chakra-ui/react';
import { Button } from '../Button';
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';

export function MentorAboutCard() {
   const [showFullText, setShowFullText] = useState<boolean>(false);

   const toggleShowText = () => {
      setShowFullText(!showFullText);
   };

   const text =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores assumenda praesentium odit pariatur a, consequuntur enim ad expedita magni odio placeat numquam blanditiis quaerat laborum doloremque explicabo hic possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores assumenda praesentium odit pariatur a, consequuntur enim ad expedita magni odio placeat numquam blanditiis quaerat laborum doloremque explicabo hic possimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores assumenda praesentium odit pariatur a, consequuntur enim ad expedita magni odio placeat numquam blanditiis quaerat laborum doloremque explicabo hic possimus!';

   const about = showFullText ? text : `${text.substring(0, 380)}...`;
   const fullAbout = text.length < 380 ? text : about;

   return (
      <Box
         p='1.5625rem'
         bgColor='white'
         borderRadius='1rem'
         h={showFullText ? '100%' : '16.5rem'}
         w='100%'
         borderColor='gray.50'
         borderWidth='0.0625rem'
      >
         <Flex
            justify='space-between'
            align='center'
         >
            <Text fontWeight={700}>Sobre</Text>
            <Button icon={FaPen} />
         </Flex>
         <Box>
            <Text
               style={
                  !showFullText && text.length >= 380
                     ? {
                          maskImage:
                             'linear-gradient(to bottom, black 50%, transparent 100%)',
                       }
                     : {}
               }
            >
               {fullAbout}
            </Text>

            {text.length >= 380 && (
               <Text
                  onClick={toggleShowText}
                  variant='link'
                  colorScheme='blue'
                  mt={2}
                  color='indigo.500'
                  cursor='pointer'
               >
                  {showFullText ? 'Ler menos' : 'Ler mais'}
               </Text>
            )}
         </Box>
      </Box>
   );
}
