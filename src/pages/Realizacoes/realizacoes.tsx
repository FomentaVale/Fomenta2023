import { Center, Heading, Text, Flex, Box, Button } from '@chakra-ui/react';
import BannerNavegacao from '../../components/bannerNavegacao/bannerNavegacao';

export default function Realizacoes() {
  const informacoesBotoesNavegacao = [
    {
      tituloBotao: 'Cursos',
      conteudoReferencia: '#cursos',
    },
    {
      tituloBotao: 'Hackaton',
      conteudoReferencia: '#hackaton',
    },
    {
      tituloBotao: 'GeladaTech',
      conteudoReferencia: '#gelada',
    },
    {
      tituloBotao: 'Formação de Inovadores',
      conteudoReferencia: '#fi',
    },
  ];
  return (
    <Box>
      <BannerNavegacao
        tituloBanner="Realizações"
        subtituloBanner="Lorem"
        informacoesBotoesNavegacao={informacoesBotoesNavegacao}
      />

      <Flex justifyContent="left" marginTop="20px">
        <Heading fontSize="20px" marginLeft="10">
          TITULO
        </Heading>
      </Flex>
      <Button
        border="none"
        bg="#F7941D"
        width="23%"
        height="2px"
        marginLeft="7"
        marginTop="-20px"
      ></Button>
      <Flex marginTop="20px">
        <Text fontSize="10px" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus a mi in tincidunt. Fusce consectetur convallis orci nec
          interdum. Nunc mattis dolor dui, a rutrum purus varius eget. Cras
          lectus ex, varius eget convallis in, posuere a est. Quisque at lectus
          non quam dignissim pulvinar ut at nisl. Vivamus ut elit porttitor,
          semper neque id, suscipit quam.
        </Text>
      </Flex>
    </Box>
  );
}
