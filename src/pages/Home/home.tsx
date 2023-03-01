import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Carrossel from '../../components/carrossel';

export default function Home() {
  return (
    <Box overflowX={'hidden'}>
      <Carrossel />

      <Flex flexDir={{ base: 'column', lg: 'row' }} bg="cor.S1" paddingY="10px">
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
              fontSize={{ lg: '35px' }}
            >
              O que somos ?
            </Text>
          </Flex>

          <Flex
            color="#ffff"
            fontSize={{ base: '10px', lg: '18px' }}
            padding="10px 25px"
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
            <Botao descricao="Saiba Mais" cor="cor.P3" />
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

      <br></br>
    </Box>
  );
}
