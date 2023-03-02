import { Flex, Heading, Text } from '@chakra-ui/react';
import Botao from '../botao/botao';

interface PropriedadesInformacoesBotoes {
  conteudoReferencia: string;
  tituloBotao: string;
}

interface BannerNavegacaoProps {
  tituloBanner: string;
  subtituloBanner: string;
  informacoesBotoesNavegacao: Array<PropriedadesInformacoesBotoes>;
}

export default function BannerNavegacao(props: BannerNavegacaoProps) {
  return (
    <Flex alignItems="center" flexDir="column">
      <Heading>{props.tituloBanner}</Heading>
      <Text>{props.subtituloBanner}</Text>
      {props.informacoesBotoesNavegacao.map((item, index) => {
        return (
          <Botao
            key={index}
            href={item.conteudoReferencia}
            descricao={item.tituloBotao}
            borda="solid 2px rgba(255, 255, 255, 0.5)"
          />
        );
      })}
    </Flex>
  );
}
