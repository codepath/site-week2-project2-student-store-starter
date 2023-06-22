import React from 'react';
import { useDisclosure, Button, ScaleFade, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Categories = ({ options, selectedOption, handleOptionClick }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <div className='flex w-2/3 justify-around items-center'>
      <Button onClick={onToggle}>
        <HamburgerIcon />
      </Button>
      {options.map((option) => {
        let underLine;
        if (option.index === selectedOption.index) {
          underLine = 'border-b border-green-500 font-semibold';
        } else {
          underLine = 'font-semibold';
        }
        return (
          <ScaleFade key={option.index} initialScale={0.9} in={isOpen}>
            <Box
              p='5px'
              color='black'
              mt='12px'
              bg='teal.500'
              rounded='md'
              shadow='md'
              cursor='pointer'
              className={underLine}
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </Box>
          </ScaleFade>
        );
      })}
    </div>
  );
};

export default Categories;