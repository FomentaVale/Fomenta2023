import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import logoTeste from '../../../public/img/logos/logo_FV_branco.png';

interface CartaoConteudoProps {
  conteudo: {
    titulo: string;
    descricao: string;
  };
}

export default function CartaoConteudo(props: CartaoConteudoProps) {
  return (
    <Flex id="#curso">
      <Box>
        <Image src={logoTeste} alt="testandoImagem" />
      </Box>
      <Box>
        <Heading color="black">{props.conteudo.titulo}</Heading>
        <Text color="black">{props.conteudo.descricao}</Text>
      </Box>
    </Flex>
  );
}
