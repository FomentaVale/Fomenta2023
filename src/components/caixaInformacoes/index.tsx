import { Flex, Image, Text } from '@chakra-ui/react';
import Botao from '../botao/botao';

export default function CaixaInformacoes(props: Props): JSX.Element {
  return (
    <Flex
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
        <Flex w="60%" borderBottom="2px solid #F37021" justifyContent="center">
          <Text
            textAlign="center"
            color="#ffff"
            fontFamily="Gotham-Black"
            fontSize={{ base: '25px', md: '30px', lg: '35px' }}
          >
            {props.titulo}
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing
          bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus
          sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis
          tellus id interdum velit laoreet id donec ultrices tincidunt.
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
    </Flex>
  );
}
