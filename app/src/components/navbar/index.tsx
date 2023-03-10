import React from 'react';
import { Flex } from '@chakra-ui/react';
import { ServerOptions } from './serverOptions';
import { Navigation } from './navigation';
import { Paths } from '@/utils/paths';
import { TbPlanet } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';

export const Navbar: React.FC = () => {
  return (
    <Flex direction='column' h='full' justifyContent='space-between'>
      <Flex direction='column'>
        <ServerOptions />
        <Navigation page={Paths.fileList} className='mt-5'>
          <div className='w-5 mr-2'>
            <TbPlanet className='text-xl text-app-text' />
          </div>
          Overview
        </Navigation>
        <Navigation page={Paths.settings}>
          <div className='w-5 mr-2'>
            <IoSettingsOutline className='text-lg text-app-text' />
          </div>
          Settings
        </Navigation>
      </Flex>
    </Flex>
  );
};
