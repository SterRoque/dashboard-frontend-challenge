import {
   As,
   Icon,
   Button as ButtonUI,
   ButtonProps as ButtonUIProps,
} from '@chakra-ui/react';

type ButtonProps = ButtonUIProps & {
   icon?: As;
};
export function Button({
   icon,
   w = '2.1875rem',
   h = '2.1875rem',
   color = 'white',
   bgColor = 'indigo.500',
   gap = '0.625rem',
   children,
   ...rest
}: ButtonProps) {
   return (
      <ButtonUI
         bgColor={bgColor}
         borderRadius='0.625rem'
         color={color}
         w={w}
         h={h}
         cursor='pointer'
         gap={gap}
         {...rest}
      >
         {icon && (
            <Icon
               as={icon}
               w='1rem'
               h='1rem'
               color={color}
            />
         )}
         {children}
      </ButtonUI>
   );
}
