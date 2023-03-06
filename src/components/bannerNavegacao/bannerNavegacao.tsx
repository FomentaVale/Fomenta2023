import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Botao from '../botao/botao';

interface BannerNavegacaoProps {
  informacoesBannerNavegacao: { tituloBanner: string; descricaoBanner: string };
  children?: JSX.Element;
}

export default function BannerNavegacao(props: BannerNavegacaoProps) {
  console.log(props);
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Heading>{props.informacoesBannerNavegacao.tituloBanner}</Heading>
        <Text>{props.informacoesBannerNavegacao.descricaoBanner}</Text>
        {props.children}
      </Flex>
    </Container>
  );
}
