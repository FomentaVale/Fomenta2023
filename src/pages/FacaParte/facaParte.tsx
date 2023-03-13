import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import SecaoNavegacao from '../../components/secaoNavegacao/secaoNavegacao';
import { useState } from 'react';
import Botao from '../../components/botao/botao';
import ConteudoFacaParte from '../../components/ConteudoFacaParte/ConteudoFacaParte';
import { Center, Square, Circle } from '@chakra-ui/react';

export default function FacaParte() {
  const [indice, setIndice] = useState(0);
  const informacoesBotoesNavegacao = [
    {
      tituloBotao: 'Banco de Talentos',
      conteudoReferencia: '#bancodetalentos',
    },
    {
      tituloBotao: 'Apoiadores',
      conteudoReferencia: '#apoiadores',
    },
    {
      tituloBotao: 'Estagiários',
      conteudoReferencia: '#estagiarios',
    },
    {
      tituloBotao: 'Incubação',
      conteudoReferencia: '#incubacao',
    },
  ];

  const conteudoSecao = {
    titulo: 'FAÇA PARTE DA FOMENTA VALE',
    descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Sint, magni distinctio dolores pariatur beatae iste repellendus 
    harum qui molestiae, veniam sit cupiditate!`,
  };

  const conteudoPagina = [
    {
      titulo: 'Banco de Talentos',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Sint, magni distinctio dolores pariatur beatae iste repellendus 
        harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
        laboriosam assumenda, sunt temporibus fuga. Quis.`,
    },
    {
      titulo: 'Apoiadores',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`,
    },
    {
      titulo: 'Estagiários',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`,
    },
    {
      titulo: 'Incubação',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`,
    },
  ];

  return (
    <Flex color="white" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center bg="cor.S1">
        <SecaoNavegacao conteudoSecao={conteudoSecao}>
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
                    aoClicar={() => {
                      setIndice(index);
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </SecaoNavegacao>
      </Center>
      <Center>
        <ConteudoFacaParte conteudo={conteudoPagina[indice]} />
      </Center>
    </Flex>
  );
}
