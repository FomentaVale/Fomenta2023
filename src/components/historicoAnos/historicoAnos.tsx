import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import './style.css';

interface Props {
  temaClaro: boolean;
  id: string;
  ano?: string;
  tituloQuadro1: string;
  textQuadro1: string;
  tituloQuadro2: string;
  textQuadro2: string;
}

export default function HistoricoAnos({
  temaClaro,
  id,
  ano,
  tituloQuadro1,
  textQuadro1,
  tituloQuadro2,
  textQuadro2,
}: Props) {
  const [eMaiorQue768] = useMediaQuery('screen and (min-width:768px');

  return (
    <>
      <Flex
        id={id}
        className={temaClaro ? 'temaClaro' : 'temaEscuro'}
        backgroundColor={temaClaro ? 'white' : 'cor.S1'}
        color={temaClaro ? 'black' : 'white'}
        flexDir={{ base: 'column' }}
        gap={{ base: '20px' }}
        padding={{ base: '10px 0px', lg: '50px' }}
        border="1px solid red"
        w="100%"
        alignItems={{ base: 'center' }}
      >
        {ano ? (
          <Heading
            width="fit-content"
            borderBottom="2px solid"
            borderColor="cor.P2"
          >
            {ano}
          </Heading>
        ) : (
          ''
        )}

        <Flex
          justifyContent={{ base: 'center' }}
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '20px' }}
          padding={{ lg: '50px' }}
        >
          <Flex w={{ lg: '50%' }} flexDir={{ base: 'column', lg: 'row' }}>
            {eMaiorQue768 ? (
              <Flex flexDir={{ base: 'row' }} gap="10px">
                <Image w="70%" src="/public/img/oqueSomos/Historico/5.jpeg" />
                <Flex gap="10px" flexDir={{ base: 'column' }}>
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
          <Flex
            flexDir={{ base: 'column' }}
            alignItems={{ base: 'center' }}
            gap={{ base: '10px' }}
            w={{ lg: '50%' }}
          >
            <Heading
              width="50%"
              borderBottom="3px solid"
              borderColor="cor.P2"
              textAlign="center"
            >
              {tituloQuadro1}
            </Heading>
            <Text>{textQuadro1}</Text>
          </Flex>
        </Flex>

        <Flex
          justifyContent={{ base: 'center' }}
          flexDir={{ base: 'column', lg: 'row-reverse' }}
          gap={{ base: '20px' }}
          padding={{ lg: '50px' }}
        >
          <Flex w={{ lg: '50%' }} flexDir={{ base: 'column', lg: 'row' }}>
            {eMaiorQue768 ? (
              <Flex flexDir={{ base: 'row' }} gap="10px">
                <Image w="70%" src="/public/img/oqueSomos/Historico/5.jpeg" />
                <Flex gap="10px" flexDir={{ base: 'column' }}>
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
          <Flex
            flexDir={{ base: 'column' }}
            alignItems={{ base: 'center' }}
            gap={{ base: '10px' }}
            w={{ lg: '50%' }}
          >
            <Heading
              width="50%"
              borderBottom="3px solid"
              borderColor="cor.P2"
              textAlign="center"
            >
              {tituloQuadro2}
            </Heading>
            <Text>{textQuadro2}</Text>
          </Flex>
        </Flex>
      </Flex>
      ;
    </>
  );
}
