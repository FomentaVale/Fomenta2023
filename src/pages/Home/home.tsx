import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Carrossel from '../../components/carrossel';

export default function Home() {
  return (
    <Box overflowX={'hidden'}>
      <Carrossel />

      {/* Section O que somos */}
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        bg="cor.S1"
        paddingBottom="15px"
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
              fontFamily="Gotham-Light"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              O que somos ?
            </Text>
          </Flex>

          <Flex
            color="#ffff"
            fontSize={{ base: '16px', lg: '18px' }}
            padding="25px"
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
            <Botao descricao="Saiba Mais" cor="cor.P3" wLink="200px" />
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
      </Flex>

      {/* Section O que somos */}
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        bg="#ffff"
        paddingBottom="15px"
      >
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
              fontFamily="Gotham-Light"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              Realizações
            </Text>
          </Flex>

          <Flex
            color="black"
            fontSize={{ base: '16px', lg: '18px' }}
            padding="25px"
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
              descricao="Acompanhe"
              cor="#ffff"
              corTexto="cor.P2"
              wLink="200px"
              borda="3px solid #00A99D"
              corHover="cor.S2"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
