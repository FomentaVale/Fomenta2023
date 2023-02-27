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
      ano: 2019,
      image: '/public/img/oqueSomos/ItemH1.png',
    },
    {
      caminho: '',
      ano: 2021,
      image: '/public/img/oqueSomos/ItemH1.png',
    },
    {
      caminho: '',
      ano: 2023,
      image: '/public/img/oqueSomos/ItemH2.png',
    },
  ];

  const dataAnos2 = [
    {
      caminho: '',
      ano: 2020,
      image: '/public/img/oqueSomos/ItemH1.png',
    },
    {
      caminho: '',
      ano: 2022,
      image: '/public/img/oqueSomos/ItemH2.png',
    },
    {
      caminho: '',
      ano: 2024,
      image: '/public/img/oqueSomos/ItemH2.png',
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
        h={{ base: '100%', lg: '100vh' }}
        bg="cor.S1"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="40%" h="100vh" alignItems={{ base: 'flex-start' }}>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent="space-around"
            alignItems={{ base: 'flex-start' }}
            w="100%"
            h="80%"
          >
            {dataAnos1.map((item, index) => (
              <Link
                key={index}
                href={item.caminho}
                display="flex"
                alignItems="center"
              >
                <Button>{item.ano}</Button>
                <Image w="100%" h="20px" src={item.image} />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDir={{ base: 'column' }}
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
        <Flex
          border="1px solid red"
          w="40%"
          h="100vh"
          alignItems={{ base: 'flex-end' }}
        >
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent="space-around"
            alignItems={{ base: 'flex-end' }}
            border="1px solid white"
            w="100%"
            h="80%"
          >
            {dataAnos2.map((item, index) => (
              <Link key={index} href={item.caminho}>
                <Image src={item.image} />
                <Button>{item.ano}</Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
