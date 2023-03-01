import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import './style.css';

interface Props {
  temaClaro: boolean;
  id: string;
  ano?: string;
  imagemPQuadro1: string;
  imagemSQuadro1A: string;
  imagemSQuadro1B: string;
  tituloQuadro1: string;
  textQuadro1: string;
  imagemPQuadro2: string;
  imagemSQuadro2A: string;
  imagemSQuadro2B: string;
  tituloQuadro2: string;
  textQuadro2: string;
}

export default function HistoricoAnos(props: Props) {
  const [eMaiorQue768] = useMediaQuery('screen and (min-width:768px');

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
        {props.ano ? (
          <Heading
            width="fit-content"
            borderBottom="2px solid"
            borderColor="cor.P2"
          >
            {props.ano}
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
                <Image w="70%" src={props.imagemPQuadro1} />
                <Flex gap="10px" flexDir={{ base: 'column' }}>
                  <Image src={props.imagemSQuadro1A} />
                  <Image src={props.imagemSQuadro1B} />
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
          padding={{ lg: '50px' }}
        >
          <Flex w={{ lg: '50%' }} flexDir={{ base: 'column', lg: 'row' }}>
            {eMaiorQue768 ? (
              <Flex flexDir={{ base: 'row', lg: 'row-reverse' }} gap="10px">
                <Image w="70%" src={props.imagemPQuadro2} />
                <Flex gap="10px" flexDir={{ base: 'column' }}>
                  <Image src={props.imagemSQuadro2A} />
                  <Image src={props.imagemSQuadro2B} />
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
      ;
    </>
  );
}
