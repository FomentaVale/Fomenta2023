import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface Props {
  imagem: string;
  imagemMobile: string;
  topMobile: string;
  topDesktop: string;
  leftMobile: string;
  leftDesktop: string;
  nome: string;
  cargo: string;
  linkedin: string;
  github: string;
}

export default function EquipeCard(props: Props) {
  const [larguraTelaMaior768] = useMediaQuery('screen and (min-width:768px');
  return (
    <>
      <Flex
        flexDir={{ base: 'row' }}
        bgColor="cor.P3"
        w={{ base: '90vw' }}
        h="70px"
        color="white"
        alignItems="center"
        justifyContent="space-around"
      >
        <Flex
          flexDir={{ base: 'column' }}
          alignItems="center"
          justifyContent="center"
          w="70%"
        >
          <Heading as="h4" fontSize={{ base: '18px' }}>
            {props.nome}
          </Heading>
          <Text>{props.cargo}</Text>
        </Flex>
        <Flex w="30%" justifyContent="center">
          <Icon
            width="40px"
            icon="material-symbols:arrow-circle-down-outline"
            color="white"
          />
        </Flex>
      </Flex>
    </>
  );
}
