import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import EquipeCard from '../../components/equipeCard/equipeCard';

export default function QuemSomos() {
  const [larguraTelaMaior768] = useMediaQuery('screen and (min-width:768px');

  const empresas = [
    {
      logo: '/public/img/logos/Parceiros/avatar-removebg-preview.png',
      site: '',
    },
    {
      logo: '/public/img/logos/Parceiros/Casa_Di_Conti_logo cdc azul.png',
      site: '',
    },
    {
      logo: '/public/img/logos/Parceiros/download-removebg-preview 1.png',
      site: '',
    },
    {
      logo: '/public/img/logos/Parceiros/Sandrin - Logo-01.png',
      site: '',
    },
    {
      logo: '/public/img/logos/Parceiros/verkom 1.png',
      site: '',
    },
    {
      logo: '/public/img/logos/Parceiros/wm10.png',
      site: '',
    },
  ];

  const historicoEquipe = [
    {
      nome: 'Kelvin B.',
      cargo: 'Tech Lead',
      linkedin: 'https://www.linkedin.com/in/kelvin-brancalh%C3%A3o/',
    },
    {
      nome: 'Fulaninho',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Fulanão',
      cargo: 'Gestor',
      linkedin: '',
    },
    {
      nome: 'Siclano',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Beltrano',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Jorge',
      cargo: 'Agilista',
      linkedin: '',
    },
    {
      nome: 'Fulaninho',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Fulanão',
      cargo: 'Gestor',
      linkedin: '',
    },
    {
      nome: 'Siclano',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Beltrano',
      cargo: 'Estagiário',
      linkedin: '',
    },
    {
      nome: 'Jorge',
      cargo: 'Agilista',
      linkedin: '',
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
        <Heading fontFamily="Gotham-Black">QUEM SOMOS</Heading>
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
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={{ lg: 'space-evenly' }}
            gap={{ base: '50px' }}
          >
            <Grid
              w="100%"
              templateRows="repeat(1, 1fr)"
              templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
              gap={{ base: 6, lg: 6 }}
            >
              <GridItem colSpan={{ base: 1, lg: 1 }}>
                <EquipeCard
                  imagem="/img/quemSomos/Equipe/Guilherme.png"
                  imagemMobile="/img/quemSomos/Equipe/Mobile/GuilhermeMobile.png"
                  topMobile="270px"
                  leftMobile="120px"
                  topDesktop="275px"
                  leftDesktop="110px"
                  nome="Guilherme C."
                  cargo="Estagiário"
                  linkedin="https://www.linkedin.com/in/guicardososilva/"
                  github="https://github.com/Relayzinho"
                />
              </GridItem>
              <GridItem colSpan={{ base: 1, lg: 1 }}>
                <EquipeCard
                  imagem="/img/quemSomos/Equipe/Lucas.png"
                  imagemMobile="/img/quemSomos/Equipe/Mobile/LucasMobile.png"
                  topMobile="190px"
                  leftMobile="120px"
                  topDesktop="180px"
                  leftDesktop="120px"
                  nome="Lucas B."
                  cargo="Estagiário"
                  linkedin="https://www.linkedin.com/in/lucas-brancalhao/"
                  github="https://github.com/lucas51512"
                />
              </GridItem>
            </Grid>
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
        padding={{ base: '20px' }}
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
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={{ base: 6, lg: 20 }}
        >
          {empresas.map((item, index) => (
            <GridItem
              key={index}
              as="a"
              target="_blank"
              href={item.site}
              colSpan={{ base: 1, lg: 1 }}
              bg="#D9D9D9"
              borderRadius="16px"
              padding="10px"
            >
              <Image maxH={'120px'} maxW={'120px'} src={item.logo} />
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
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)' }}
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
              w={{ lg: '120px' }}
            >
              <Stack textAlign="center">
                <Text fontSize="16px">{item.nome}</Text>
                <Text fontSize="12px">{item.cargo}</Text>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
