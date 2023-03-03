import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Carrossel from '../../components/carrossel';
import CaixaInformacoes from '../../components/caixaInformacoes';

export default function Home() {
  const informacoes = {
    titulo: 'O que somos?',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
  };

  const informacoesBotao = {
    to: '/',
    descricao: 'SAIBA MAIS',
    corFundo: 'cor.P3',
    corFundoHover: 'cor.S3',
  };

  return (
    <Box overflowX={'hidden'}>
      <Carrossel />

      {/* Section O que somos */}
      {/* <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        bg="cor.S1"
        paddingBottom="30px"
      >
        <Flex
          w={{ base: '100%', lg: '50%' }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="60%"
            borderBottom="2px solid #F37021"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              color="#ffff"
              fontFamily="Gotham-Black"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              O que somos ?
            </Text>
          </Flex>

          <Flex
            padding={{ base: '25px', lg: '25px 100px' }}
            color="#ffff"
            fontSize={{ base: '16px', lg: '18px' }}
            fontFamily="Gotham-Book"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Adipiscing elit ut
            aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh
            sit. Convallis tellus id interdum velit laoreet id donec ultrices
            tincidunt.
          </Flex>

          <Flex w="100%" justifyContent="center">
            <Botao
              to="/"
              descricao="SAIBA MAIS"
              corFundo="cor.P3"
              corFundoHover="cor.S3"
              tamanhoBotao={{ base: '50%', lg: '25%' }}
              borda="3px solid white"
            />
          </Flex>
        </Flex>

        <Flex
          w={{ base: '100%', lg: '50%' }}
          paddingX="25px"
          justifyContent="center"
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraRaizesHome.png"
            w={{ lg: '70%' }}
          />
        </Flex>
      </Flex> */}
      <CaixaInformacoes informacoes={informacoes} />

      {/* Section O que somos */}
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        bg="#ffff"
        paddingBottom="15px"
      >
        <Flex w={{ base: '100%', lg: '50%' }} justifyContent="center">
          {/* <Grid
            w="100%"
            h="400px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={2}
          >
            <GridItem colSpan={4} bg="tomato" />
            <GridItem colSpan={2} bg="tomato" />
            <GridItem colSpan={2} bg="tomato" />
            <GridItem colSpan={4} bg="tomato" />
          </Grid> */}
        </Flex>

        <Flex
          w={{ base: '100%', lg: '50%' }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="60%"
            borderBottom="2px solid #F37021"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              color="cor.P2"
              fontFamily="Gotham-Black"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              Realizações
            </Text>
          </Flex>

          <Flex
            color="black"
            fontSize={{ base: '16px', lg: '18px' }}
            padding="25px"
            fontFamily="Gotham-Bold"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Adipiscing elit ut
            aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh
            sit. Convallis tellus id interdum velit laoreet id donec ultrices
            tincidunt.
          </Flex>

          <Flex w="100%" justifyContent="center"></Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
