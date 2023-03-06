import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import EquipeCard from '../../components/equipeCard/equipeCard';

export default function QuemSomos() {
  return (
    <>
      {/* Section O que Somos*/}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          recusandae quaerat cumque rem. Inventore repudiandae, odit magnam vel,
          laudantium at mollitia, veritatis iusto error quam reprehenderit illum
          maxime cupiditate Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam ducimus at ut reprehenderit nisi placeat cum
          praesentium iste earum iure, sapiente perspiciatis ad, voluptates nemo
          delectus distinctio accusamus, suscipit minima.
        </Text>
      </Flex>
      {/* Section Equipe Atual */}
      <Flex
        as="section"
        flexDir="column"
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
        padding={{ base: '20px' }}
      >
        <Flex
          flexDir="column"
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
          textAlign={{ base: 'justify' }}
          gap={{ base: '10px' }}
        >
          <Heading
            w="80%"
            borderBottom="2px solid"
            borderColor="cor.P2"
            textAlign="center"
          >
            EQUIPE ATUAL
          </Heading>
          <Text>
            Composto por 3 especialistas na área de educação, tecnologia e
            gestão de pessoas, e um grupo de jovens universitários em processo
            de aceleração profissional.
          </Text>
        </Flex>
        <Flex>
          <Flex>
            <EquipeCard />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
