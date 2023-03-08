import { Flex, Grid, GridItem, Text } from '@chakra-ui/layout';

interface Props {
  informacoes: {
    titulo: string;
    descricao: string;
    corTitulo?: string;
    corDescricao?: string;
  };
  children: JSX.Element | JSX.Element[];
}

export default function CaixaInformacoesSecaoB(props: Props) {
  return (
    <Grid
      templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      w="100%"
      alignItems="flex-end"
    >
      <GridItem>
        <Flex justifyContent="center" paddingY={{ base: '15px' }}>
          <Text
            textAlign="center"
            color={'#00000'}
            fontFamily="Gotham-Black"
            fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            borderBottom="3px solid #00A99D"
            w="70%"
          >
            {props.informacoes.titulo}
          </Text>
        </Flex>
      </GridItem>

      <GridItem>{props.children[0]}</GridItem>

      <GridItem>
        <Flex
          padding={{ base: '25px', lg: '25px' }}
          color={'#00000'}
          fontSize={{ base: '16px', lg: '18px' }}
          fontFamily="Gotham-Book"
          textAlign="justify"
          flexDir="column"
          alignItems="center"
        >
          {props.informacoes.descricao}
          {props.children[1]}
        </Flex>
      </GridItem>
    </Grid>
  );
}
