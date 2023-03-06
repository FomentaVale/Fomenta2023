import { Flex, Text } from '@chakra-ui/react';

interface Props {
  informacoes: {
    titulo: string;
    descricao: string;
    corTitulo?: string;
    corDescricao?: string;
  };
  children?: JSX.Element | JSX.Element[];
}

export default function CaixaInformacoes(props: Props): JSX.Element {
  return (
    <Flex
      w={{ base: '100%', lg: '50%' }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="60%" borderBottom="2px solid #F37021" justifyContent="center">
        <Text
          textAlign="center"
          color={props.informacoes.corTitulo || '#ffff'}
          fontFamily="Gotham-Black"
          fontSize={{ base: '25px', md: '30px', lg: '35px' }}
        >
          {props.informacoes.titulo}
        </Text>
      </Flex>

      <Flex
        padding={{ base: '25px', lg: '25px 100px' }}
        color={props.informacoes.corDescricao || '#ffff'}
        fontSize={{ base: '16px', lg: '18px' }}
        fontFamily="Gotham-Book"
        textAlign="justify"
      >
        {props.informacoes.descricao}
      </Flex>

      <Flex w="100%" justifyContent="center">
        {props.children}
      </Flex>
    </Flex>
  );
}
