import { Flex, Heading, Text } from '@chakra-ui/react';

export default function QuemSomos() {
  return (
    <Flex
      as="section"
      h="100vh"
      w="100vw"
      bg="cor.S1"
      flexDir={{ base: 'column' }}
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'center' }}
      gap={{ base: '40px' }}
      padding={{ base: '20px' }}
      color="white"
      textAlign={{ base: 'justify' }}
    >
      <Heading>QUEM SOMOS</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae
        quaerat cumque rem. Inventore repudiandae, odit magnam vel, laudantium
        at mollitia, veritatis iusto error quam reprehenderit illum maxime
        cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam ducimus at ut reprehenderit nisi placeat cum praesentium iste
        earum iure, sapiente perspiciatis ad, voluptates nemo delectus
        distinctio accusamus, suscipit minima.
      </Text>
    </Flex>
  );
}
