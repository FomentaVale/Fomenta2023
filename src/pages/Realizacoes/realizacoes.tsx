import { Center, Text, Flex, GridItem, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import BannerNavegacao from '../../components/bannerNavegacao/bannerNavegacao';
import Botao from '../../components/botao/botao';
import CartaoApresentacao from '../../components/cartaoApresemtacao/cartaoApresentacao';

export default function Realizacoes() {
  const [referenciaDiv, setReferenciaDiv] = useState();

  const informacoesBotoesNavegacao = [
    {
      tituloBotao: 'Cursos',
      conteudoReferencia: '#cursos'
    },
    {
      tituloBotao: 'Hackathon',
      conteudoReferencia: '#hackathon'
    },
    {
      tituloBotao: 'Geladatech',
      conteudoReferencia: '#geladatech'
    },
    {
      tituloBotao: 'Podcast',
      conteudoReferencia: '#podcast'
    },
    {
      tituloBotao: 'Formação de Inovadores',
      conteudoReferencia: '#formacaoDeInovadores'
    }
  ];

  const informacoesBannerNavegacao = {
    tituloBanner: 'Realizações da Fomenta Vale',
    descricaoBanner: 'Lorem'
  };

  return (
    <Flex color="white" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center bg="cor.S1">
        <BannerNavegacao
          informacoesBannerNavegacao={informacoesBannerNavegacao}
        >
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
            templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
            gap={1}
            rowGap={2}
            marginTop="20px"
            p="1"
            m="2"
          >
            {informacoesBotoesNavegacao.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Botao
                    href={item.conteudoReferencia}
                    descricao={item.tituloBotao}
                    corFundo="cor.P3"
                    funcaoEvento={() => {
                      console.log('teste');
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </BannerNavegacao>
      </Center>
      <Center>
        <CartaoApresentacao />
      </Center>
    </Flex>
  );
}
