import { Center, Flex, GridItem, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import SecaoNavegacao from '../../components/secaoNavegacao/secaoNavegacao';
import Botao from '../../components/botao/botao';
import CartaoConteudo from '../../components/cartaoConteudo/cartaoConteudo';
import {
  informacoesPrincipais,
  propriedadesBotoes,
  conteudoRealizacoes,
} from './dadosRealizacoes';

export default function Realizacoes() {
  const [conteudo, setConteudo] = useState(conteudoRealizacoes.curso);

  return (
    <Flex color="white" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center bg="cor.S1">
        <SecaoNavegacao conteudoSecao={informacoesPrincipais}>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
            templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
            gap={1}
            rowGap={2}
            marginTop="20px"
            p="1"
            m="2"
          >
            {propriedadesBotoes.map((item, index) => {
              const realizacao = item.referencia;
              return (
                <GridItem key={index}>
                  <Botao
                    descricao={item.tituloBotao}
                    corFundo="cor.P3"
                    aoClicar={() => {
                      setConteudo(
                        conteudoRealizacoes[
                          realizacao as keyof typeof conteudoRealizacoes
                        ]
                      );
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </SecaoNavegacao>
      </Center>
      {conteudo.atual.titulo ? <div>conteudo atual</div> : ''}
    </Flex>
  );
}
