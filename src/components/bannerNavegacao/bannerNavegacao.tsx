import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
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
    <Flex flexDirection={'column'}>
      <Heading>{props.tituloBanner}</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        {props.informacoesBotoesNavegacao.map((item, index) => {
          return (
            <Botao
              key={index}
              href={item.conteudoReferencia}
              descricao={item.tituloBotao}
            />
          );
        })}
      </Grid>
      <Text>{props.children}</Text>
    </Flex>
  );
}
