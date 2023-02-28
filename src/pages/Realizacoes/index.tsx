import {
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

import Botao from '../../components/botao';

export default function Realizacoes() {
  return (
    <Flex color="red.400" justifyContent="center" flexDir={{ base: 'column' }}>
      <Heading>Realizações da Fomenta Vale</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis
        excepturi voluptatem nemo ducimus! Debitis ex odio nostrum in, iure
        minima hic aperiam voluptas fuga nam quod quaerat voluptate ipsum.
      </Text>
    </Flex>
  );
}
