/* eslint-disable react/no-unknown-property */
import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import './style.css';

export default function OqueSomos() {
  const dataAnos1 = [
    {
      caminho: '',
      ano: '2019',
      image: '/public/img/oqueSomos/ItemH1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2021',
      image: '/public/img/oqueSomos/ItemH1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2023',
      image: '/public/img/oqueSomos/ItemH2.png',
      temaLaranja: false,
    },
  ];

  const dataAnos2 = [
    {
      caminho: '',
      ano: '2020',
      image: '/public/img/oqueSomos/ItemH1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2022',
      image: '/public/img/oqueSomos/ItemH2.png',
      temaLaranja: false,
    },
    {
      caminho: '',
      ano: '2024',
      image: '/public/img/oqueSomos/ItemH2.png',
      temaLaranja: false,
    },
  ];

  const dataRevista1 = [
    {
      titulo: 'Revista 2019',
      caminho: '',
    },
    {
      titulo: 'Revista 2020',
      caminho: '',
    },
    {
      titulo: 'Revista 2021',
      caminho: '',
    },
  ];

  const dataRevista2 = [
    {
      titulo: 'Revista 2022',
      caminho: '',
    },
    {
      titulo: 'Revista 2023',
      caminho: '',
    },
    {
      titulo: 'Revista 2024',
      caminho: '',
    },
  ];
  return (
    <>
      {/* Section O que somos */}
      <Flex
        className="oqueSomos-container"
        h="100%"
        alignItems="center"
        justifyContent="center"
        margin={{ base: '30px 0px' }}
        padding="50px"
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '20px', lg: '0px' }}
        >
          <Flex
            flexDir="column"
            alignItems={{ base: 'center' }}
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            padding={{ base: '10px', lg: '0px' }}
            w={{ lg: '50%' }}
          >
            <Heading fontFamily="Gotham-Black">
              <Highlight
                query="FOMENTA"
                styles={{ fontFamily: 'Gotham-Light', color: 'cor.P2' }}
              >
                O que é a FOMENTA
              </Highlight>
              <Highlight query="VALE?" styles={{ color: 'cor.P2' }}>
                &nbsp;VALE?
              </Highlight>
            </Heading>
            <Flex
              bg="cor.S1"
              flexDir={{ base: 'column' }}
              color="white"
              gap={{ base: '15px' }}
              padding={{ base: '20px' }}
              borderRadius={{ base: '10px', xl: '10px 0px 0px 10px' }}
              textAlign={{ base: 'left' }}
            >
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eveniet quibusdam omnis magnam soluta harum tempora
                voluptatibus maxime facere. Ducimus consectetur in quas.
                Similique molestias enim impedit culpa quae. Mollitia.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, sapiente cupiditate odio voluptate ducimus minus
                nobis esse aut mollitia ullam quaerat dolores inventore dolore
                expedita minima laboriosam quam sint delectus.
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <iframe
              className="oqueSomos-video"
              height="290"
              width="100%"
              src="https://www.youtube.com/embed/gv_3Rt3Eq9o"
              title="Legado Fomenta Vale: Começo de uma Ideia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
      {/* Section Trajetoria */}
      <Flex
        bg="cor.S1"
        flexDir={{ base: 'column-reverse', lg: 'column' }}
        padding={{ base: '10px' }}
        gap={{ base: '100px', lg: '50px' }}
      >
        <Flex
          h={{ base: '100%' }}
          alignItems="center"
          justifyContent="center"
          fontFamily="Gotham-Medium"
        >
          <Flex
            w="45%"
            h={{ base: '100vh' }}
            alignItems={{ base: 'flex-start' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start' }}
              w="100%"
              h="80%"
            >
              {dataAnos1.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                >
                  <Link
                    w={{ base: '45%' }}
                    href={item.caminho}
                    _hover={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Button
                      bg={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                      color={item.temaLaranja ? 'black' : 'white'}
                      border="2px solid white"
                      w="100%"
                      textDecoration="none"
                      fontSize={{ base: '12px' }}
                      _hover={{
                        bg: 'white',
                        textDecoration: 'none',
                        color: 'black',
                      }}
                    >
                      {item.ano}
                    </Button>
                  </Link>
                  <Image h="10px" src={item.image} />
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            w="10%"
          >
            <Image
              h="full"
              src="/public/img/oqueSomos/TrajetoriaV1.png"
              alt="Inicio da linha do tempo"
            ></Image>
            <Image
              h="full"
              src="/public/img/oqueSomos/TrajetoriaV2.png"
              alt="Fim da linha do tempo"
            ></Image>
          </Flex>
          <Flex w="45%" h="100vh" alignItems={{ base: 'flex-end' }}>
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-end' }}
              w="100%"
              h="80%"
            >
              {dataAnos2.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                >
                  <Image h="10px" src={item.image} />
                  <Link
                    w={{ base: '45%' }}
                    href={item.caminho}
                    _hover={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Button
                      border="2px solid white"
                      bg={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                      color={item.temaLaranja ? 'black' : 'white'}
                      w="100%"
                      fontSize={{ base: '12px' }}
                      _hover={{
                        bg: 'white',
                        textDecoration: 'none',
                        color: 'black',
                      }}
                    >
                      {item.ano}
                    </Button>
                  </Link>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems={{ base: 'center' }}
          flexDir={{ base: 'column' }}
          fontFamily="Gotham-Medium"
          color="white"
          gap={{ base: '20px' }}
        >
          <Heading>A nossa história</Heading>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            gap={{ base: '20px' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              gap={{ base: '20px' }}
            >
              {dataRevista1.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                  color="black"
                >
                  <Link
                    w="100%"
                    href={item.caminho}
                    _hover={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Button
                      fontSize={{ base: '14px' }}
                      bg="cor.P3"
                      border="2px solid white"
                      w="100%"
                      _hover={{ bg: 'white', textDecoration: 'none' }}
                    >
                      {item.titulo}
                    </Button>
                  </Link>
                </Flex>
              ))}
            </Flex>
            <Text>Baixe e saiba mais!</Text>
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              gap={{ base: '20px' }}
            >
              {dataRevista2.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                  color="white"
                >
                  <Link
                    w="100%"
                    href={item.caminho}
                    _hover={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Button
                      fontSize={{ base: '14px' }}
                      bg="cor.P2"
                      border="2px solid white"
                      w="100%"
                      _hover={{
                        bg: 'white',
                        color: 'black',
                        textDecoration: 'none',
                      }}
                    >
                      {item.titulo}
                    </Button>
                  </Link>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
