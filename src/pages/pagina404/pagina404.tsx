import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Navbar from '../../components/navbar/navbar';

export default function Pagina404() {
  return (
    <Flex h="100%" flexDirection="column" alignItems="center">
      <Navbar bgColor="cor.S1" />
      <Flex
        h={{ base: '100%', lg: '90vh' }}
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgImage="url(/img/bg404.png)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Text fontFamily="POLYA" fontSize={{ base: '82px', lg: '200px' }}>
          404
        </Text>
        <Box width={{ base: '100%', lg: '40%' }} textAlign="center">
          <Text
            fontFamily="Gotham-Light"
            fontSize={{ base: '14px', lg: '24px' }}
          >
            Desculpe. O conteúdo que você está procurando não existe.
          </Text>
        </Box>
        <Flex margin="20px 0px">
          <Botao to="/" descricao="HOME" larguraBotao={{ base: '150px' }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
