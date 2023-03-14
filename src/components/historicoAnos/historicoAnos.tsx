import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import './style.css';

interface Props {
  temaClaro: boolean;
  id: string;
  ano?: string;
  imagemsSecundariasQuadro1: Array<Imagens>;
  tituloQuadro1: string;
  textQuadro1: string;
  imagemsSecundariasQuadro2: Array<Imagens>;
  tituloQuadro2: string;
  textQuadro2: string;
}

interface Imagens {
  src: string;
  alt: string;
}

export default function HistoricoAnos(props: Props) {
  const [larguraTelaMaior768] = useMediaQuery('screen and (min-width:768px');

  const [imagemPrincipalQuadro1, setImagemPrincipalQuadro1] = useState(
    props.imagemsSecundariasQuadro1[0].src
  );

  const [altPrincipalQuadro1, setAltPrincipalQuadro1] = useState(
    props.imagemsSecundariasQuadro1[0].alt
  );

  const [imagemPrincipalQuadro2, setImagemPrincipalQuadro2] = useState(
    props.imagemsSecundariasQuadro2[0].src
  );

  const [altPrincipalQuadro2, setAltPrincipalQuadro2] = useState(
    props.imagemsSecundariasQuadro2[0].alt
  );

  return (
    <>
      <Flex
        id={props.id}
        backgroundColor={props.temaClaro ? 'white' : 'cor.S1'}
        color={props.temaClaro ? 'black' : 'white'}
        flexDir={{ base: 'column' }}
        gap={{ base: '20px' }}
        padding={{ base: '15px', lg: '50px' }}
        w="100%"
        alignItems={{ base: 'center' }}
      >
        <Heading
          width="fit-content"
          borderBottom="2px solid"
          borderColor="cor.P2"
        >
          {props.ano}
        </Heading>
        <Flex
          flexDir={{ base: 'column' }}
          gap={{ base: '120px' }}
          w="100%"
          className={props.temaClaro ? 'temaClaro' : 'temaEscuro'}
        >
          <Flex
            justifyContent={{ base: 'center' }}
            flexDir={{ base: 'column', lg: 'row' }}
            gap={{ base: '20px' }}
            padding={{ lg: '20px' }}
          >
            <Flex w={{ lg: '100%' }} flexDir={{ base: 'column', lg: 'row' }}>
              {larguraTelaMaior768 ? (
                <Flex flexDir={{ base: 'row' }} gap="10px">
                  <Flex w="100%">
                    <Image
                      w="100%"
                      src={imagemPrincipalQuadro1}
                      alt={altPrincipalQuadro1}
                    />
                  </Flex>

                  <Flex
                    w="30%"
                    gap="10px"
                    flexDir={{ base: 'column' }}
                    justifyContent="space-around"
                  >
                    {props.imagemsSecundariasQuadro1.map((item, index) => {
                      return (
                        <Image
                          key={index}
                          src={item.src}
                          h="30%"
                          cursor="pointer"
                          onClick={() => {
                            setImagemPrincipalQuadro1(item.src);
                            setAltPrincipalQuadro1(item.alt);
                          }}
                          border={
                            imagemPrincipalQuadro1 == item.src
                              ? '6px solid'
                              : ''
                          }
                          borderColor={
                            imagemPrincipalQuadro1 == item.src ? 'cor.P3' : ''
                          }
                          alt={item.alt}
                        />
                      );
                    })}
                  </Flex>
                </Flex>
              ) : (
                <Flex flexDir="column">
                  <Image
                    src={props.imagemsSecundariasQuadro1[0].src}
                    alt={props.imagemsSecundariasQuadro1[0].alt}
                  />
                  <Flex w="100%" justifyContent="flex-end">
                    <Heading as="h5" fontSize="15px">
                      {props.tituloQuadro1}
                    </Heading>
                  </Flex>
                </Flex>
              )}
            </Flex>
            <Flex
              flexDir={{ base: 'column' }}
              alignItems={{ base: 'center' }}
              gap={{ base: '10px' }}
              w={{ lg: '50%' }}
              padding={{ lg: '0px 50px' }}
            >
              {larguraTelaMaior768 ? (
                <Heading
                  width="50%"
                  borderBottom="3px solid"
                  borderColor="cor.P2"
                  textAlign="center"
                >
                  {props.tituloQuadro1}
                </Heading>
              ) : (
                ''
              )}

              <Text textAlign={{ lg: 'justify' }}>{props.textQuadro1}</Text>
            </Flex>
          </Flex>

          <Flex
            justifyContent={{ base: 'center' }}
            flexDir={{ base: 'column', lg: 'row-reverse' }}
            gap={{ base: '20px' }}
            padding={{ lg: '20px' }}
          >
            <Flex w="100%" flexDir={{ base: 'column', lg: 'row' }}>
              {larguraTelaMaior768 ? (
                <Flex flexDir={{ base: 'row', lg: 'row-reverse' }} gap="10px">
                  <Flex w="100%">
                    <Image
                      w="100%"
                      src={imagemPrincipalQuadro2}
                      alt={altPrincipalQuadro2}
                    />
                  </Flex>

                  <Flex
                    w="30%"
                    gap="10px"
                    flexDir={{ base: 'column' }}
                    justifyContent="space-around"
                  >
                    {props.imagemsSecundariasQuadro2.map((item, index) => {
                      return (
                        <Image
                          key={index}
                          src={item.src}
                          h="30%"
                          cursor="pointer"
                          onClick={() => {
                            setImagemPrincipalQuadro2(item.src);
                            setAltPrincipalQuadro2(item.alt);
                          }}
                          border={
                            imagemPrincipalQuadro2 == item.src
                              ? '6px solid'
                              : ''
                          }
                          borderColor={
                            imagemPrincipalQuadro2 == item.src ? 'cor.P3' : ''
                          }
                          alt={item.alt}
                        />
                      );
                    })}
                  </Flex>
                </Flex>
              ) : (
                <Flex flexDir="column">
                  <Image
                    src={props.imagemsSecundariasQuadro2[0].src}
                    alt={props.imagemsSecundariasQuadro2[0].alt}
                  />
                  <Flex w="100%" justifyContent="flex-end">
                    <Heading as="h5" fontSize="15px">
                      {props.tituloQuadro2}
                    </Heading>
                  </Flex>
                </Flex>
              )}
            </Flex>
            <Flex
              flexDir={{ base: 'column' }}
              alignItems={{ base: 'center' }}
              gap={{ base: '10px' }}
              w={{ lg: '50%' }}
              padding={{ lg: '0px 50px' }}
            >
              {larguraTelaMaior768 ? (
                <Heading
                  width="100%"
                  borderBottom="3px solid"
                  borderColor="cor.P2"
                  textAlign="center"
                >
                  {props.tituloQuadro2}
                </Heading>
              ) : (
                ''
              )}

              <Text textAlign={{ lg: 'justify' }}>{props.textQuadro2}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
