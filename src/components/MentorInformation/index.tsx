import { calculateAge } from '@utils/calculate-age';
import { As, Flex, Icon, Text } from '@chakra-ui/react';
import { FaRegTrashAlt } from 'react-icons/fa';

type MentorInformationProps = {
   text: string;
   value: string;
   icon: As;
};

export function MentorInformation({
   text,
   value,
   icon,
}: MentorInformationProps) {
   return (
      <Flex
         w='100%'
         justify='space-between'
         align='center'
      >
         <Flex
            gap='12px'
            align='center'
         >
            <Icon
               as={icon}
               color='gray.500'
               w='32px'
               h='32px'
               p='6px'
               borderColor='gray.300'
               borderWidth='1px'
               borderRadius='6px'
            />
            <Text color='gray.500'>{text}</Text>
         </Flex>

         <Flex
            align='center'
            gap='22px'
            mr='10px'
         >
            <Text
               fontSize='14px'
               fontWeight={600}
               display='flex'
            >
               {text === 'Aniversário' ? (
                  <>
                     <Text
                        color='gray.600'
                        fontWeight={600}
                     >
                        {calculateAge(value)} anos |
                     </Text>
                     &nbsp;{value}
                  </>
               ) : (
                  value
               )}
            </Text>

            <Icon
               as={FaRegTrashAlt}
               color='gray.500'
               cursor='pointer'
               w='18px'
               h='18px'
            />
         </Flex>
      </Flex>
   );
}
