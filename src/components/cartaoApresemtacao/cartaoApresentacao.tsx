import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import logoTeste from '../../../public/img/logos/logo_FV_branco.png';

interface CartaoApresentacaoProps {
  caminhoImagem: string;
  descricaoImagem: string;
  tituloApresentacao: string;
  descricaoApresentacao: string;
  conteudoReferenciado: string;
}

export default function CartaoApresentacao() {
  return (
    <Flex id="#curso">
      <Box>
        <Image src={logoTeste} alt="testandoImagem" />
      </Box>
      <Box>
        <Heading color="black">Titulo Teste</Heading>
        <Text color="black">Descricao Teste</Text>
      </Box>
    </Flex>
  );
}
