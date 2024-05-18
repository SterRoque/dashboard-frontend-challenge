import { As, Flex, Icon, Text } from '@chakra-ui/react';

type ButtonProps = {
   icon?: As | undefined;
   title?: string;
   w?: number | string;
   h?: number | string;
   color?: string;
   bgColor?: string;
};
export function Button({
   icon,
   title,
   w = '40px',
   h = '40px',
   color = 'white',
   bgColor = 'indigo.500',
}: ButtonProps) {
   return (
      <Flex
         bgColor={bgColor}
         align='center'
         justify='center'
         borderRadius='10px'
         w={w}
         h={h}
         cursor='pointer'
      >
         <Icon
            as={icon}
            w='18px'
            h='18px'
            color={color}
         />
         <Text color={color}>{title}</Text>
      </Flex>
   );
}
