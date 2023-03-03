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

interface InformacoesBotoes {
  tituloBotao: string;
  conteudoReferencia: string;
}

interface BannerNavegacaoProps {
  tituloBanner: string;
  informacoesBotoesNavegacao: Array<InformacoesBotoes>;
}

export default function BannerNavegacao(
  props: PropsWithChildren<BannerNavegacaoProps>
) {
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Heading>{props.tituloBanner}</Heading>
        <Text>{props.children}</Text>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
          templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
          gap={2}
          marginTop="20px"
          p="1"
          m="2"
        >
          {props.informacoesBotoesNavegacao.map((item, index) => {
            return (
              <GridItem key={index}>
                <Botao
                  href={item.conteudoReferencia}
                  descricao={item.tituloBotao}
                  larguraBotao="100%"
                  alturaBotao="120%"
                  cor="cor.P3"
                />
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
}
