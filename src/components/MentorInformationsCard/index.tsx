import { Box, Flex, Text } from '@chakra-ui/react';
import { Button } from '../Button';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { MentorInformation } from '../MentorInformation';
import { MdPhoneIphone } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { PiBuildingApartmentFill } from 'react-icons/pi';

export function MentorInformationsCard() {
   return (
      <Box
         bgColor='white'
         p='1.5625rem'
         h='268px'
         borderRadius='1rem'
         borderColor='gray.50'
         borderWidth='0.0625rem'
      >
         <Flex
            justify='space-between'
            mb='12px'
         >
            <Text fontWeight={700}>Informações</Text>
            <Flex gap='10px'>
               <Button
                  icon={FaWhatsapp}
                  w='100%'
                  h='35px'
                  fontSize='0.875rem'
               >
                  Entre em contato
               </Button>

               <Button icon={FaPlus} />
            </Flex>
         </Flex>
         <Flex
            flexDir='column'
            gap='0.9375rem'
         >
            <MentorInformation
               icon={MdPhoneIphone}
               text='Telefone'
               value='(99) 9999-999'
            />
            <MentorInformation
               icon={MdOutlineMailOutline}
               text='Email'
               value='loremimpsum@dolor.sit'
            />
            <MentorInformation
               icon={MdOutlineCalendarToday}
               text='Aniversário'
               value='24/05/2000'
            />
            <MentorInformation
               icon={PiBuildingApartmentFill}
               text='Empresa onde trabalha'
               value='Ifood'
            />
         </Flex>
      </Box>
   );
}
