import { Center, Flex, GridItem, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import SecaoNavegacao from '../../components/secaoNavegacao/secaoNavegacao';
import Botao from '../../components/botao/botao';
import CartaoConteudo from '../../components/cartaoConteudo/cartaoConteudo';
import { conteudoRealizacoesJson } from './conteudoRealizacoes';

export default function Realizacoes() {
  const [conteudo, setConteudo] = useState(`${conteudoRealizacoesJson.curso}`);

  const informacoesVetor = conteudoRealizacoesJson ?? [];

  const conteudoDescricaoTitulo = conteudoRealizacoesJson.descricaoPrincipal;

  function transformaTexto(texto: string) {
    return texto
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '')
      .replace('ç', 'c')
      .replace('ã', 'a')
      .replace('O', 'o');
  }

  console.log(conteudo);

  const renderizaCartao = (conteudo: typeof conteudoRealizacoesJson.curso) => {
    if (conteudo.atual) {
      return <CartaoConteudo conteudo={conteudo.atual} />;
    }
  };

  return (
    <Flex color="white" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center bg="cor.S1">
        <SecaoNavegacao conteudoSecao={conteudoDescricaoTitulo}>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
            templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
            gap={1}
            rowGap={2}
            marginTop="20px"
            p="1"
            m="2"
          >
            {informacoesVetor.botoes.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Botao
                    href={item.conteudoReferencia}
                    descricao={item.tituloBotao}
                    corFundo="cor.P3"
                    aoClicar={() => {
                      setConteudo(
                        `informacoesVetor.${transformaTexto(item.tituloBotao)}`
                      );
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </SecaoNavegacao>
      </Center>
      <Center>{renderizaCartao(JSON.parse(conteudo))}</Center>
    </Flex>
  );
}
