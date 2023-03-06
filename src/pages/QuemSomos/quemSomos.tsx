import { Flex, Heading, Text } from '@chakra-ui/react';
import EquipeCard from '../../components/equipeCard/equipeCard';

export default function QuemSomos() {
  const equipeAtual = [
    {
      imagemMembro: '/img/quemSomos/Guilherme.png',
      nomeMembro: 'Guilherme C.',
      cargoMembro: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/guicardososilva/',
      github: 'https://github.com/Relayzinho',
    },
  ];
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
        <Flex
          mt={{ base: '20px' }}
          flexDirection={{ base: 'column' }}
          gap={{ base: '50px' }}
        >
          <Flex flexDirection={{ base: 'column' }} gap={{ base: '50px' }}>
            <EquipeCard
              imagemMembro="/img/quemSomos/Guilherme.png"
              top="250px"
              left="100px"
              nomeMembro="Guilherme C."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/guicardososilva/"
              github="https://github.com/Relayzinho"
            />
            <EquipeCard
              imagemMembro="/img/quemSomos/Lucas.png"
              top="180px"
              left="100px"
              nomeMembro="Lucas B."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/lucas-brancalhao/"
              github="https://github.com/lucas51512"
            />
          </Flex>
          <Flex flexDirection={{ base: 'column' }} gap={{ base: '50px' }}>
            <EquipeCard
              imagemMembro="/img/quemSomos/Nicolas.png"
              top="180px"
              left="110px"
              nomeMembro="Nicolas P."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/nicolasppenga/"
              github="https://github.com/TNDNS"
            />
            <Heading fontFamily="POLYA" textAlign="center" color="cor.P1">
              Nosso Vale é Um ambiente Fértil De Oportunidades
            </Heading>
            <EquipeCard
              imagemMembro="/img/quemSomos/JoaoPedro.png"
              top="200px"
              left="120px"
              nomeMembro="João Pedro C."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/caetanojpo/"
              github="https://github.com/caetanojpo"
            />
          </Flex>
          <Flex flexDirection={{ base: 'column' }} gap={{ base: '50px' }}>
            <EquipeCard
              imagemMembro="/img/quemSomos/Rodrigo.png"
              top="175px"
              left="100px"
              nomeMembro="Rodrigo R."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/rodrigorochajose/"
              github="https://github.com/rodrigorochajose"
            />
            <EquipeCard
              imagemMembro="/img/quemSomos/Almir.png"
              top="250px"
              left="100px"
              nomeMembro="Almir C."
              cargoMembro="Gestor"
              linkedin="https://www.linkedin.com/in/almircamolesi/"
              github=""
            />
            <EquipeCard
              imagemMembro="/img/quemSomos/Daniela.png"
              top="190px"
              left="100px"
              nomeMembro="Daniela C."
              cargoMembro="Scrum Master"
              linkedin="https://www.linkedin.com/in/danielaantoniocamolesi/"
              github=""
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
