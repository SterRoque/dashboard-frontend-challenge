import {
   Box,
   Flex,
   Image,
   Popover,
   PopoverBody,
   PopoverContent,
   PopoverHeader,
   PopoverTrigger,
   Text,
   Icon,
} from '@chakra-ui/react';
import avatarImage from '@assets/images/avatar.png';
import image from '@assets/images/image.png';
import { IoChevronDownSharp } from 'react-icons/io5';

export function Header() {
   return (
      <Flex
         bgColor='white'
         h='5.5rem'
         align='center'
         justify='space-between'
         pr='5rem'
         pl='3.5rem'
         borderBottomColor='gray.50'
         borderBottomWidth='0.0625rem'
      >
         <Flex
            align='center'
            gap='1rem'
         >
            <Image
               src={image}
               w='3.125rem'
               h='3.125rem'
               borderRadius={8}
            />

            <Popover>
               <PopoverTrigger>
                  <Flex
                     cursor='pointer'
                     align='center'
                  >
                     <Text>Mentoria X</Text>
                     <Icon
                        as={IoChevronDownSharp}
                        w='1.125rem'
                        h='1.125rem'
                        ml='1.5625rem'
                     />
                  </Flex>
               </PopoverTrigger>
               <PopoverContent w='15.625rem'>
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                     Are you sure you want to have that milkshake?
                  </PopoverBody>
               </PopoverContent>
            </Popover>
         </Flex>

         <Flex>
            <Flex gap='0.75rem'>
               <Image src={avatarImage} />
               <Box>
                  <Text>Lucilene</Text>
                  <Text>lucilene@gmail.com</Text>
               </Box>
            </Flex>
         </Flex>
      </Flex>
   );
}
