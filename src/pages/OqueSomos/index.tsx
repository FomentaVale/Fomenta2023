/* eslint-disable react/no-unknown-property */
import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { isHtmlElement } from 'react-router-dom/dist/dom';
import './style.css';

export default function OqueSomos() {
  const [eMaiorQue768] = useMediaQuery('screen and (min-width:768px');

  const dadosAnosImpar = [
    {
      caminho: '',
      ano: '2019',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2021',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2023',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosAnosPar = [
    {
      caminho: '',
      ano: '2020',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '',
      ano: '2022',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
    {
      caminho: '',
      ano: '2024',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosRevistaImpar = [
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

  const dadosRevistaPar = [
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

  const anosDeHistoria = [
    {
      ano: '2019',
      titulos: [''],
      texts: [''],
      imagensPrincipais: [''],
      imagensSecundarias: [''],
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
        padding={{ base: '10px', lg: '50px 0px' }}
        gap={{ base: '100px', lg: '150px' }}
      >
        <Flex
          h={{ base: '100%' }}
          alignItems="center"
          justifyContent="center"
          fontFamily="Gotham-Medium"
          flexDirection={{ lg: 'column' }}
        >
          <Flex
            w={{ base: '45%', lg: '100%' }}
            h={{ base: '100vh', lg: '20vh' }}
            flexDir={{ base: 'row', lg: 'column' }}
            alignItems={{ base: 'flex-start' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start' }}
              w={{ base: '100%', lg: '80%' }}
              h={{ base: '80%', lg: '100%' }}
            >
              {dadosAnosImpar.map((item, index) => (
                <Flex
                  flexDir={{ base: 'row', lg: 'column' }}
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  h="100%"
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
                  {eMaiorQue768 ? (
                    <Image h="50px" src={item.imageV} />
                  ) : (
                    <Image h="10px" src={item.imageH} />
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            w={{ base: '10%', lg: '100%' }}
          >
            {eMaiorQue768 ? (
              <>
                <Image
                  w="50%"
                  src="/public/img/oqueSomos/Trajetoria1.png"
                  alt="Inicio da linha do tempo"
                />
                <Image
                  w="50%"
                  src="/public/img/oqueSomos/Trajetoria2.png"
                  alt="Fim da linha do tempo"
                />
              </>
            ) : (
              <>
                <Image
                  src="/public/img/oqueSomos/TrajetoriaV1.png"
                  alt="Inicio da linha do tempo"
                />
                <Image
                  src="/public/img/oqueSomos/TrajetoriaV2.png"
                  alt="Fim da linha do tempo"
                />
              </>
            )}
          </Flex>
          <Flex
            w={{ base: '45%', lg: '100%' }}
            h={{ base: '100vh', lg: '20vh' }}
            flexDir={{ base: 'row', lg: 'column' }}
            alignItems={{ base: 'flex-end' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-end' }}
              w={{ base: '100%', lg: '80%' }}
              h={{ base: '80%', lg: '100%' }}
            >
              {dadosAnosPar.map((item, index) => (
                <Flex
                  flexDir={{ base: 'row', lg: 'column' }}
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  h="100%"
                  justifyContent={{ base: 'space-around' }}
                >
                  {eMaiorQue768 ? (
                    <Image h="50px" src={item.imageV} />
                  ) : (
                    <Image h="10px" src={item.imageH} />
                  )}
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
          gap={{ base: '20px', lg: '50px' }}
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
              {dadosRevistaImpar.map((item, index) => (
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
              {dadosRevistaPar.map((item, index) => (
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

      {/* Section Anos */}
      <Flex h="100vh">
        {anosDeHistoria.map((item, index) => (
          <Flex key={index}>
            <Heading>{item.ano}</Heading>
            <Flex>
              <Flex>
                <Flex></Flex>
                {eMaiorQue768 ? (
                  <Flex>
                    <Image src="/public/img/oqueSomos/Historico/5.jpeg" />
                    <Flex>
                      <Image src="/public/img/oqueSomos/Historico/4.JPG" />
                      <Image src="/public/img/oqueSomos/Historico/3.JPG" />
                    </Flex>
                  </Flex>
                ) : (
                  <Flex>
                    <Image src="/public/img/oqueSomos/Historico/5.jpeg" />
                  </Flex>
                )}
              </Flex>
              <Flex>
                <Heading>{item.titulos}</Heading>
                <Text>{item.texts}</Text>
                <Text>{item.texts}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
