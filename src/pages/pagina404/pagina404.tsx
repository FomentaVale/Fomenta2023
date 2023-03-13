import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Navbar from '../../components/navbar/navbar';

export default function Pagina404() {
  return (
    <Flex h="100%" flexDirection="column" alignItems="center">
      <Navbar bgColor="cor.S1" />
      <Flex
        h="90vh"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgImage="url(/img/bg404.png)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Text fontFamily="POLYA" fontSize="200px">
          404
        </Text>
        <Box width="40%" textAlign="center">
          <Text fontFamily="Gotham-Light" fontSize="24px">
            Desculpe. O conteúdo que você está procurando não existe.
          </Text>
        </Box>
        <Flex margin="20px 0px">
          <Botao to="/home" descricao="HOME" larguraBotao={{ base: '150px' }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
