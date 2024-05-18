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
         h='88px'
         align='center'
         justify='space-between'
         pr='80px'
         pl='56px'
         borderBottomColor='gray.50'
         borderBottomWidth='1px'
      >
         <Flex
            align='center'
            gap='16px'
         >
            <Image
               src={image}
               w='50px'
               h='50px'
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
                        w='18px'
                        h='18px'
                        ml='25px'
                     />
                  </Flex>
               </PopoverTrigger>
               <PopoverContent w='250px'>
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                     Are you sure you want to have that milkshake?
                  </PopoverBody>
               </PopoverContent>
            </Popover>
         </Flex>

         <Flex>
            <Flex gap='12px'>
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
