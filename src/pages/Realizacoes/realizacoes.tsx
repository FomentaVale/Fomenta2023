import { Center, Flex, GridItem, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import SecaoNavegacao from '../../components/secaoNavegacao/secaoNavegacao';
import Botao from '../../components/botao/botao';
import CartaoConteudo from '../../components/cartaoConteudo/cartaoConteudo';

export default function Realizacoes() {
  const [indice, setIndice] = useState(0);

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

  const conteudoSecao = {
    titulo: 'Realizações da Fomenta Vale',
    descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Sint, magni distinctio dolores pariatur beatae iste repellendus 
    harum qui molestiae, veniam sit cupiditate!`
  };

  const conteudoPagina = [
    {
      titulo: 'Curso de Python',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Sint, magni distinctio dolores pariatur beatae iste repellendus 
        harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
        laboriosam assumenda, sunt temporibus fuga. Quis.`
    },
    {
      titulo: 'Hackaton',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`
    },
    {
      titulo: 'Geladatech',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`
    },
    {
      titulo: 'Podcast',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`
    },
    {
      titulo: 'Formação de inovadores',
      descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Sint, magni distinctio dolores pariatur beatae iste repellendus 
      harum qui molestiae, veniam sit cupiditate! Quibusdam unde 
      laboriosam assumenda, sunt temporibus fuga. Quis.`
    }
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
        <CartaoConteudo conteudo={conteudoPagina[indice]} />
      </Center>
    </Flex>
  );
}
