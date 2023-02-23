import { Flex, Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function Rodape() {
  return (
    <>
      <Flex bg="#003829" h="100%" flexDir={{ base: 'column' }}>
        <Flex
          flexDir={{ base: 'column' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
        >
          <Image
            w={{ base: '100px !important' }}
            src="/img/logos/logoFV 2.png"
          />
          <Flex>
            <Flex>
              <Icon icon="ic:baseline-pin-drop" color="white" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
