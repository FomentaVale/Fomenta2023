import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import logoTeste from '../../../public/img/logos/logo_FV_branco.png';
import Botao from '../botao/botao';

interface ConteudoFacaParteProps {
  conteudo: {
    titulo: string;
    descricao: string;
  };
}

export default function ConteudoFacaParte(props: ConteudoFacaParteProps) {
  return (
    <Flex id="#bancodetalentos" w="100%" bg="#" justifyContent="center">
      <Flex
        // bg="white"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        w="90%"
        borderRadius="7px"
      >
        <Flex
          //bg="gray.100"//
          w={{ base: '85%', lg: '75%' }}
          flexDir="column"
          alignItems="center"
          m="10px"
        >
          <Heading
            textColor="#005349"
            size={{ base: 'md', lg: 'xl' }}
            borderBottom="2px solid #F37021"
          >
            {props.conteudo.titulo}
          </Heading>
          <Box bg="red.300" w={{ base: '15%', lg: '25%' }} m="10px">
            <Image src={logoTeste} alt="testandoImagem" />
          </Box>
          <Text color="black" textAlign="justify">
            {props.conteudo.descricao}
          </Text>
        </Flex>
        <Botao
          descricao="Inscreva-se"
          corFundo="cor.P3"
          href="https://www.fomentavale.com.br/"
          tamanhoBotao={{ base: '25%' }}
        />
      </Flex>
    </Flex>
  );
}
