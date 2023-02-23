import { Flex, Image, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function Rodape() {
  return (
    <>
      <Flex
        bg="#003829"
        h="500px"
        flexDir={{ base: 'column' }}
        p={{ base: '20px' }}
        w="100vw"
        color="white"
        fontSize={{ base: '10px' }}
      >
        <Flex
          flexDir={{ base: 'column' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
        >
          <Image w={{ base: '200px' }} src="/img/logos/logoFV 2.png" />
          <Flex
            gap="10px"
            flexDir={{ base: 'column' }}
            textAlign="center"
            justifyContent={{ base: 'center' }}
          >
            <Flex gap="10px" alignItems={{ base: 'center' }}>
              <Icon icon="ic:baseline-pin-drop" color="white" />
              <Text>
                Av. Nove de Julho, 106 - Centro, Assis - SP, 19800-020
              </Text>
            </Flex>
            <Flex gap="10px" flexDir={{ base: 'column' }}>
              <Flex gap="10px" alignItems={{ base: 'center' }}>
                <Icon
                  icon="material-symbols:phone-iphone-outline"
                  color="white"
                />
                <Text>(18) 99692-2667</Text>
              </Flex>
              <Flex gap="10px" alignItems={{ base: 'center' }}>
                <Icon icon="material-symbols:mail-outline" color="white" />
                <Text>contato@fomentavale.com.br</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
