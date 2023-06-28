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
            <p
              className={`text-md font-bold p-1 mt-2 cursor-pointer ${underLine}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </p>
          </ScaleFade>
        );
      })}
    </div>
  );
};

export default Categories;