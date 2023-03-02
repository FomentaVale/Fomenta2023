import { Container, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Botao from '../botao/botao';
import { Grid, GridItem } from '@chakra-ui/react';

interface PropiedadadesInformacoesBotoes {
  conteudoReferencia: string;
  tituloBotao: string;
}

interface BannerNavegacaoProps {
  tituloBanner: string;
  subtituloBanner: string;
  informacoesBotoesNavegacao: Array<PropiedadadesInformacoesBotoes>;
}

export default function BannerNavegacao(props: BannerNavegacaoProps) {
  return (
    <>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <Heading textAlign="center" fontSize="25px" padding="5">
            {props.tituloBanner}
          </Heading>
          <Text fontSize="10px">{props.subtituloBanner}</Text>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            templateRows={{ base: 'repeat(2, 1fr)', lg: '' }}
            gap="3"
            marginTop="20px"
            padding="1"
          >
            {props.informacoesBotoesNavegacao.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Botao
                    href={item.conteudoReferencia}
                    descricao={item.tituloBotao}
                    cor="cor.P3"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </>
  );
}
