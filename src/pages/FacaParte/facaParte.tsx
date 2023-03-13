import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react';
import BannerNavegacao from '../../components/bannerNavegacao/bannerNavegacao';
import { Grid, GridItem } from '@chakra-ui/react';

export default function FacaParte() {
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

  return (
    <Box>
      <BannerNavegacao
        tituloBanner="FAÇA PARTE DA FOMENTA VALE"
        subtituloBanner="LOREM SSIASBDL OAKSDKS IDOASJD"
        informacoesBotoesNavegacao={informacoesBotoesNavegacao}
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
        templateRows={{ base: 'repeat(2, 1fr)', lg: '' }}
        gap="3"
        marginTop="20px"
        padding="1"
      >
        {/*Barra*/}
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
        <Flex textAlign="center" padding="3">
          <Text fontSize="10px" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            maximus a mi in tincidunt. Fusce consectetur convallis orci nec
            interdum. Nunc mattis dolor dui, a rutrum purus varius eget. Cras
            lectus ex, varius eget convallis in, posuere a est. Quisque at
            lectus non quam dignissim pulvinar ut at nisl. Vivamus ut elit
            porttitor, semper neque id, suscipit quam.
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
