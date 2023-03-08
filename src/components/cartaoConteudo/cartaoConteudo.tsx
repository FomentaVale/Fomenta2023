import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import logoTeste from '../../../public/img/logos/logo_FV_branco.png';
import Botao from '../botao/botao';

interface CartaoConteudoProps {
  conteudo: {
    titulo: string;
    descricao: string;
  };
}

export default function CartaoConteudo(props: CartaoConteudoProps) {
  return (
    <Flex id="#curso" w="100%" bg="#003B33" justifyContent="center">
      <Flex
        bg="white"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        w="90%"
        borderRadius="7px"
      >
        <Flex
          bg="gray.100"
          w={{ base: '85%', lg: '75%' }}
          flexDir="column"
          alignItems="center"
          m="10px"
        >
          <Heading
            color="black"
            size={{ base: 'md', lg: 'xl' }}
            borderBottom="2px solid #00A99D"
          >
            {props.conteudo.titulo}
          </Heading>
          <Text color="black" textAlign="justify">
            {props.conteudo.descricao}
          </Text>
        </Flex>
        <Botao
          descricao="Inscreva-se"
          corFundo="cor.P3"
          href="https://github.com/"
          tamanhoBotao={{ base: '25%' }}
        />
        <Box bg="red.300" w={{ base: '15%', lg: '25%' }} m="10px">
          <Image src={logoTeste} alt="testandoImagem" />
        </Box>
      </Flex>
    </Flex>
  );
}
