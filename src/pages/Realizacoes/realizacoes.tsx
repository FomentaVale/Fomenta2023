import { Center, Heading, Text, Flex } from '@chakra-ui/react';

export default function Realizacoes() {
  return (
    <Flex color="red.400" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center>
        <Heading>Realizações da Fomenta Vale</Heading>
      </Center>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis
        excepturi voluptatem nemo ducimus! Debitis ex odio nostrum in, iure
        minima hic aperiam voluptas fuga nam quod quaerat voluptate ipsum.
      </Text>
    </Flex>
  );
}