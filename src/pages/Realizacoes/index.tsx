import {
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

import BotaoGeral from '../../components/botaoGeral';

export default function Realizacoes() {
  return (
    <Flex color="red.400">
      <Box>
        <Center>
          <Heading as="h1">Realizações da Fomenta Vale</Heading>
          <Heading as="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            facilis excepturi voluptatem nemo ducimus! Debitis ex odio nostrum
            in, iure minima hic aperiam voluptas fuga nam quod quaerat voluptate
            ipsum.
          </Heading>
        </Center>
        <BotaoGeral
          tituloBotao="Cursos"
          corBotao="cor.P3"
          arredondamentoBorda="10px"
          bordaBotao="none"
        />
        <BotaoGeral
          tituloBotao="Hackathon"
          corBotao="cor.P3"
          arredondamentoBorda="10px"
          bordaBotao="none"
        />
        <BotaoGeral
          tituloBotao="Gelada Tech"
          corBotao="cor.P3"
          arredondamentoBorda="10px"
          bordaBotao="none"
        />
        <BotaoGeral
          tituloBotao="Podcast"
          corBotao="cor.P3"
          arredondamentoBorda="10px"
          bordaBotao="none"
        />
      </Box>
    </Flex>
  );
}
