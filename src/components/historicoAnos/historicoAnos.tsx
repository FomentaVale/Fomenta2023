import {
  border,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import './style.css';

interface Props {
  temaClaro: boolean;
  id: string;
  ano?: string;
  imagemsSecundariasQuadro1: Array<string>;
  tituloQuadro1: string;
  textQuadro1: string;
  imagemSecundariaQuadro2A: string;
  imagemSecundariaQuadro2B: string;
  imagemSecundariaQuadro2C: string;
  tituloQuadro2: string;
  textQuadro2: string;
}

export default function HistoricoAnos(props: Props) {
  const [larguraTelaMaior768] = useMediaQuery('screen and (min-width:768px');

  const [imagemPrincipalQuadro1, setImagemPrincipalQuadro1] = useState(
    props.imagemsSecundariasQuadro1[0]
  );

  const [imagemPrincipalQuadro2, setImagemPrincipalQuadro2] = useState(
    props.imagemSecundariaQuadro2A
  );

  return (
    <>
      <Flex
        id={props.id}
        className={props.temaClaro ? 'temaClaro' : 'temaEscuro'}
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
          gap={{ base: '20px', lg: '100px' }}
          w="100%"
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
                    <Image w="100%" src={imagemPrincipalQuadro1} />
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
                          src={item}
                          h="30%"
                          cursor="pointer"
                          onClick={() => {
                            setImagemPrincipalQuadro1(item);
                          }}
                          border={
                            imagemPrincipalQuadro1 == item ? '6px solid' : ''
                          }
                          borderColor={
                            imagemPrincipalQuadro1 == item ? 'cor.P3' : ''
                          }
                        />
                      );
                    })}
                  </Flex>
                </Flex>
              ) : (
                <Flex>
                  <Image src={props.imagemsSecundariasQuadro1[0]} />
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
              <Heading
                width="50%"
                borderBottom="3px solid"
                borderColor="cor.P2"
                textAlign="center"
              >
                {props.tituloQuadro1}
              </Heading>
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
                <Flex
                  w="100%"
                  h="100%"
                  flexDir={{ base: 'row', lg: 'row-reverse' }}
                  gap="10px"
                >
                  <Flex w="80%">
                    <Image
                      w="100%"
                      src={
                        imagemPrincipalQuadro2 || props.imagemSecundariaQuadro2A
                      }
                    />
                  </Flex>

                  <Flex
                    w="30%"
                    gap="10px"
                    flexDir={{ base: 'column' }}
                    justifyContent="space-around"
                  >
                    <Image
                      src={props.imagemSecundariaQuadro2A}
                      h="30%"
                      cursor="pointer"
                      onClick={() => {
                        setImagemPrincipalQuadro2(
                          props.imagemSecundariaQuadro2A
                        );
                      }}
                      border={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2A
                          ? '6px solid'
                          : ''
                      }
                      borderColor={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2A
                          ? 'cor.P3'
                          : ''
                      }
                    />
                    <Image
                      src={props.imagemSecundariaQuadro2B}
                      h="30%"
                      cursor="pointer"
                      onClick={() => {
                        setImagemPrincipalQuadro2(
                          props.imagemSecundariaQuadro2B
                        );
                      }}
                      border={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2B
                          ? '6px solid'
                          : ''
                      }
                      borderColor={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2B
                          ? 'cor.P3'
                          : ''
                      }
                    />
                    <Image
                      src={props.imagemSecundariaQuadro2C}
                      h="30%"
                      cursor="pointer"
                      onClick={() => {
                        setImagemPrincipalQuadro2(
                          props.imagemSecundariaQuadro2C
                        );
                      }}
                      border={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2C
                          ? '6px solid'
                          : ''
                      }
                      borderColor={
                        imagemPrincipalQuadro2 == props.imagemSecundariaQuadro2C
                          ? 'cor.P3'
                          : ''
                      }
                    />
                  </Flex>
                </Flex>
              ) : (
                <Flex>
                  <Image src={props.imagemSecundariaQuadro2A} />
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
              <Heading
                width="50%"
                borderBottom="3px solid"
                borderColor="cor.P2"
                textAlign="center"
              >
                {props.tituloQuadro2}
              </Heading>
              <Text textAlign={{ lg: 'justify' }}>{props.textQuadro2}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      ;
    </>
  );
}
