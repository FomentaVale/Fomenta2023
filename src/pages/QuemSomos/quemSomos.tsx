import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import EquipeCard from '../../components/equipeCard/equipeCard';

export default function QuemSomos() {
  const empresas = [
    {
      logo: '/public/img/logos/Parceiros/avatar-removebg-preview.png',
      caminho: '',
    },
    {
      logo: '/public/img/logos/Parceiros/Casa_Di_Conti_logo cdc azul.png',
      caminho: '',
    },
    {
      logo: '/public/img/logos/Parceiros/download-removebg-preview 1.png',
      caminho: '',
    },
    {
      logo: '/public/img/logos/Parceiros/Sandrin - Logo-01.png',
      caminho: '',
    },
    {
      logo: '/public/img/logos/Parceiros/verkom 1.png',
      caminho: '',
    },
    {
      logo: '/public/img/logos/Parceiros/wm10.png',
      caminho: '',
    },
  ];
  return (
    <>
      {/* Section O que Somos*/}
      <Flex
        as="section"
        h="100vh"
        w="100%"
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
        mt="50px"
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
              top="230px"
              left="100px"
              nomeMembro="Guilherme C."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/guicardososilva/"
              github="https://github.com/Relayzinho"
            />
            <EquipeCard
              imagemMembro="/img/quemSomos/Lucas.png"
              top="160px"
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
              top="170px"
              left="100px"
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
              top="160px"
              left="100px"
              nomeMembro="Rodrigo R."
              cargoMembro="Estagiário"
              linkedin="https://www.linkedin.com/in/rodrigorochajose/"
              github="https://github.com/rodrigorochajose"
            />
            <EquipeCard
              imagemMembro="/img/quemSomos/Almir.png"
              top="220px"
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
              cargoMembro="Agilista"
              linkedin="https://www.linkedin.com/in/danielaantoniocamolesi/"
              github=""
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Section Empresas */}

      <Flex
        as="section"
        mt="50px"
        flexDir="column"
        justifyContent={{ base: 'center' }}
        alignItems={{ base: 'center' }}
        bgColor="cor.S1"
        color="white"
        padding={{ base: '20px' }}
        gap={{ base: '20px' }}
      >
        <Heading
          fontSize={{ base: '24px' }}
          w="100%"
          borderBottom="2px solid"
          borderColor="cor.P2"
          textAlign="center"
        >
          GRANDES EMPRESAS CONOSCO!
        </Heading>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {empresas.map((item, index) => (
            <GridItem
              key={index}
              as="a"
              target="_blank"
              href={item.caminho}
              colSpan={{ base: 1, lg: 2 }}
              bg="#D9D9D9"
              borderRadius="16px"
              padding="10px"
            >
              <Image src={item.logo} />
            </GridItem>
          ))}
        </Grid>
      </Flex>

      {/* Section Histórico */}

      <Flex
        as="section"
        mt="50px"
        flexDir="column"
        justifyContent={{ base: 'center' }}
        alignItems={{ base: 'center' }}
        padding={{ base: '20px' }}
        gap={{ base: '20px' }}
      >
        <Heading
          fontSize={{ base: '24px' }}
          w="100%"
          borderBottom="2px solid"
          borderColor="cor.P2"
          textAlign="center"
        >
          QUEM PASSOU POR AQUI
        </Heading>
      </Flex>
    </>
  );
}
