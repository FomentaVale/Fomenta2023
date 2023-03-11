import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import EquipeCard from '../../components/equipeCard/equipeCard';

export default function QuemSomos() {
  const empresas = [
    {
      logo: '/public/img/logos/Parceiros/Almeida_Nogueira.png',
      alt: 'Logo Almeida e Nogueira',
      site: 'https://almeidaenogueira.com.br/',
      fundo: 'black',
    },
    {
      logo: '/public/img/logos/Parceiros/CasaDiConti.png',
      alt: 'Logo Casa di Conti',
      site: 'https://www.casadiconti.com.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/LEVEROS.png',
      alt: 'Logo Leveros',
      site: 'https://www.leveros.com.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/NOVAMERICA.png',
      alt: 'Logo NovAmerica',
      site: 'https://www.novamerica.com.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/fema.png',
      alt: 'Logo FEMA',
      site: 'https://fema.edu.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/FATEC.png',
      alt: 'Logo FATEC',
      site: 'https://www.fatecassis.edu.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/unesp.png',
      alt: 'Logo UNESP',
      site: 'https://www.assis.unesp.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/GAD.png',
      alt: 'Logo GAD',
      site: 'https://gadarquiteturaedesign.com/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/Cabonnet.png',
      alt: 'Logo Cabonnet',
      site: 'https://cabonnet.com.br/cidade/assis-sp',
      fundo: 'white',
    },

    {
      logo: '/public/img/logos/Parceiros/SandrinPlanejados.png',
      alt: 'Logo Sandrin Planejados',
      site: 'https://www.sandrin.com.br/',
      fundo: 'white',
    },
    {
      logo: '/public/img/logos/Parceiros/NOMADS.png',
      alt: 'Logo Nomads360',
      site: 'https://www.nomads360.com/',
      fundo: 'black',
    },
  ];

  const historicoEquipe = [
    {
      nome: 'Kelvin Brancalhão',
      cargo: 'Gestor Tecnologia',
      linkedin: 'https://www.linkedin.com/in/kelvin-brancalh%C3%A3o/',
    },
    {
      nome: 'Lucas Yudi',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/lucasyudi/',
    },
    {
      nome: 'Maria Vitoria Macruz',
      cargo: 'Estagiária',
      linkedin: 'https://www.linkedin.com/in/vickmacruz/',
    },
    {
      nome: 'Paulo Soares',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/paulo-soares-865951211/',
    },
    {
      nome: 'João Pedro Vicentin',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/joaopedrovicentin/',
    },
    {
      nome: 'Afonso José',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Wellington',
      cargo: 'Gestor',
      linkedin: '',
    },
    {
      nome: 'Claudinei Santos',
      cargo: 'Gestor',
      linkedin: '',
    },
    {
      nome: 'Fulano',
      cargo: 'Gestor',
      linkedin: '',
    },
    {
      nome: 'Siclano',
      cargo: 'Estagiário',
      linkedin: '',
    },
  ];

  const cardEquipe = [
    {
      imagem: '/img/quemSomos/Equipe/Guilherme.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/GuilhermeContainer.png',
      alt: 'Foto do estagiário Guilherme',
      nome: 'Guilherme Cardoso',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/guicardososilva/',
      github: 'https://github.com/Relayzinho',
    },
    {
      imagem: '/img/quemSomos/Equipe/JoaoPedro.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/JoaoPedroContainer.png',
      alt: 'Foto do estagiário João Pedro',
      nome: 'João Pedro Caetano',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/caetanojpo/',
      github: 'https://github.com/caetanojpo',
    },
    {
      imagem: '/img/quemSomos/Equipe/Lucas.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/LucasContainer.png',
      alt: 'Foto do estagiário Lucas',
      nome: 'Lucas Brancalhão',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/lucas-brancalhao/',
      github: 'https://github.com/lucas51512',
    },
    {
      imagem: '/img/quemSomos/Equipe/Nicolas.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/NicolasContainer.png',
      alt: 'Foto do estagiário Nicolas',
      nome: 'Nicolas Penga',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/nicolasppenga/',
      github: 'https://github.com/TNDNS',
    },
    {
      imagem: '/img/quemSomos/Equipe/Rodrigo.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/RodrigoContainer.png',
      alt: 'Foto do estagiário Rodrigo',
      nome: 'Rodrigo Rocha',
      cargo: 'Estagiário',
      linkedin: 'https://www.linkedin.com/in/rodrigorochajose/',
      github: 'https://github.com/rodrigorochajose',
    },
    {
      imagem: '/img/quemSomos/Equipe/Almir.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/AlmirContainer.png',
      alt: 'Foto do gestor Almir',
      nome: 'Almir Camolesi',
      cargo: 'Gestor',
      linkedin: 'https://www.linkedin.com/in/almircamolesi/',
      github: 'https://github.com/arcamolesi',
    },
    {
      imagem: '/img/quemSomos/Equipe/Daniela.png',
      imagemContainer: '/img/quemSomos/Equipe/Container/DanielaContainer.png',
      alt: 'Foto da agilista Daniela',
      nome: 'Daniela Camolesi',
      cargo: 'Agilista',
      linkedin: 'https://www.linkedin.com/in/danielaantoniocamolesi/',
      github: 'https://github.com/danycamolesi',
    },
  ];

  return (
    <>
      {/* Section O que Somos*/}
      <Flex
        as="section"
        h={{ base: '100%', lg: '100vh' }}
        bg="cor.S1"
        flexDir={{ base: 'column' }}
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
        gap={{ base: '40px', lg: '60px' }}
        padding={{ base: '20px', lg: '0px 150px' }}
        color="white"
        textAlign={{ base: 'justify' }}
        fontFamily="Gotham-Light"
      >
        <Heading
          fontSize={{ base: '28px', lg: '48px' }}
          fontFamily="Gotham-Black"
        >
          QUEM SOMOS
        </Heading>
        <Text w={{ lg: '70%' }}>
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
        padding={{ base: '20px', lg: '0px 40px' }}
        fontFamily="Gotham-Light"
        gap={{ lg: '50px' }}
      >
        <Flex
          flexDir="column"
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
          textAlign={{ base: 'center', lg: 'justify' }}
          gap={{ base: '10px' }}
          w={{ lg: '50%' }}
        >
          <Heading
            w="80%"
            borderBottom="2px solid"
            borderColor="cor.P2"
            textAlign={{ base: 'center' }}
            fontFamily="Gotham-Black"
            fontSize={{ base: '28px', lg: '48px' }}
          >
            EQUIPE ATUAL
          </Heading>
          <Text fontSize={{ lg: '20px' }}>
            Composto por 2 especialistas na área de educação, tecnologia e
            gestão de pessoas, e um grupo de jovens universitários em processo
            de aceleração profissional.
          </Text>
        </Flex>
        <Flex
          mt={{ base: '20px' }}
          flexDirection={{ base: 'column' }}
          gap={{ base: '50px' }}
        >
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={{ lg: 'center' }}
            gap={{ base: '10px', lg: '0px' }}
          >
            {cardEquipe.map((item, index) => (
              <Flex key={index} flexDirection={{ base: 'column' }}>
                <EquipeCard
                  imagem={item.imagem}
                  imagemContainer={item.imagemContainer}
                  alt={item.alt}
                  nome={item.nome}
                  cargo={item.cargo}
                  linkedin={item.linkedin}
                  github={item.github}
                />
              </Flex>
            ))}
          </Flex>

          <Heading
            fontFamily="POLYA"
            textAlign="center"
            color="cor.P1"
            fontSize={{ lg: '46', '2xl': '56' }}
            fontWeight={400}
          >
            NOSSO VALE É UM AMBIENTE FÉRTIL DE OPORTUNIDADES
          </Heading>
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
        padding={{ base: '20px', lg: '50px 20px' }}
        gap={{ base: '20px', lg: '50px' }}
        fontFamily="Gotham-Light"
      >
        <Heading
          fontFamily="Gotham-Black"
          fontSize={{ base: '24px', lg: '48px' }}
          w={{ base: '100%', lg: '70%' }}
          borderBottom="3px solid"
          borderColor="cor.S3"
          textAlign="center"
        >
          GRANDES EMPRESAS CONOSCO!
        </Heading>
        <Grid
          templateRows="repeat(auto, 1fr)"
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={{ base: 6, lg: 20 }}
        >
          {empresas.map((item, index) => (
            <GridItem
              key={index}
              as="a"
              target="_blank"
              href={item.site}
              colSpan={{ base: 1, lg: 1 }}
              bg={item.fundo}
              borderRadius="16px"
              padding={{ base: '10px' }}
              transition="0.5s"
              _hover={{ transform: 'scale(1.2)' }}
            >
              <Image
                maxH={{ base: '100px', lg: '120px' }}
                maxW={{ base: '100px', lg: '120px' }}
                src={item.logo}
                alt={item.alt}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>

      {/* Section Histórico */}

      <Flex
        as="section"
        mt="50px"
        mb="50px"
        flexDir="column"
        justifyContent={{ base: 'center' }}
        alignItems={{ base: 'center' }}
        padding={{ base: '20px' }}
        gap={{ base: '20px', lg: '50px' }}
        fontFamily="Gotham-Light"
      >
        <Heading
          fontFamily="Gotham-Black"
          fontSize={{ base: '24px', lg: '48px' }}
          w={{ base: '100%', lg: '60%' }}
          borderBottom="3px solid"
          borderColor="cor.P2"
          textAlign="center"
        >
          QUEM PASSOU POR AQUI
        </Heading>
        <Grid
          templateRows="repeat(auto, 1fr)"
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={{ base: 6, lg: 10 }}
        >
          {historicoEquipe.map((item, index) => (
            <GridItem
              key={index}
              as="a"
              target="_blank"
              href={item.linkedin}
              colSpan={{ base: 1 }}
              bgColor="cor.P2"
              padding="10px"
              color="white"
              _hover={{ bgColor: 'cor.S3' }}
              w={{ lg: '100%' }}
              minH={{ base: '90px', lg: '80px' }}
            >
              <Stack textAlign="center" h="100%">
                <Text fontSize={{ base: '14px', lg: '16px' }}>{item.nome}</Text>
                <Text fontSize={{ base: '12px', lg: '12px' }}>
                  {item.cargo}
                </Text>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
