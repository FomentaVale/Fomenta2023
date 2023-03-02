import { Center, Heading, Text, Flex } from '@chakra-ui/react';
import BannerNavegacao from '../../components/bannerNavegacao/bannerNavegacao';

export default function Realizacoes() {
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

  return (
    <Flex color="white" justifyContent="center" flexDir={{ base: 'column' }}>
      <Center bg="cor.S1">
        <BannerNavegacao
          tituloBanner="Realizações da Fomenta Vale"
          informacoesBotoesNavegacao={informacoesBotoesNavegacao}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            facilis excepturi voluptatem nemo ducimus! Debitis ex odio nostrum
            in, iure minima hic aperiam voluptas fuga nam quod quaerat voluptate
            ipsum.
          </Text>
        </BannerNavegacao>
      </Center>
    </Flex>
  );
}
