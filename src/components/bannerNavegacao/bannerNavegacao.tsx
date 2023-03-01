import { Flex, Heading, Text } from '@chakra-ui/react';
import Botao from '../botao/botao';

const caminhosBotoesPaginas = {
  tituloBotao: [
    ['Cursos', 'Hackaton', 'Geladatech', 'Podcast', 'Formação de Inovadores'],
    ['Banco de Talentos', 'Apoiadores', 'Estagiários', 'Incubação']
  ],
  caminho: [
    ['#cursos', '#hackaton', '#geladatech', '#podcast', '#formacaoInovadores'],
    ['#bancoTalentos', '#apoiadores', '#estagiarios', '#incubacao']
  ]
};

interface BannerNavegacaoProps {
  tituloBanner: string;
  subtituloBanner: string;
  tipoPagina: string;
}

const geraBotoesDinamicamente = (
  props: BannerNavegacaoProps,
  caminhosBotoesPaginas: any
) => {
  let botoes = [];

  console.log(caminhosBotoesPaginas);

  if (props.tipoPagina == 'realizacoes') {
    botoes = caminhosBotoesPaginas.tituloBotao[0].map(
      (titulo: string, index: number) => (
        <Botao
          key={index}
          href={caminhosBotoesPaginas.caminho[0][index]}
          descricao={titulo}
          borda="solid 2px rgba(255, 255, 255, 0.5)"
        />
      )
    );
  } else if (props.tipoPagina == 'facaParte') {
    botoes = caminhosBotoesPaginas.tituloBotao[1].map(
      (titulo: string, index: number) => (
        <Botao
          key={index}
          href={caminhosBotoesPaginas.caminho[1][index]}
          descricao={titulo}
          cor="cor.P3"
          borda="solid 2px rgba(255, 255, 255, 0.5)"
        />
      )
    );
  }

  return botoes;
};

export default function BannerNavegacao(props: BannerNavegacaoProps) {
  return (
    <Flex alignItems="center" flexDir="column">
      <Heading>{props.tituloBanner}</Heading>
      <Text>{props.subtituloBanner}</Text>
      {geraBotoesDinamicamente(props, caminhosBotoesPaginas)}
    </Flex>
  );
}
