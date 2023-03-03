import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

interface Props {
  to?: string;
  href?: string;
  target?: string;
  descricao: string;
  borda?: string;
  corFundo?: string;
  corTexto?: string;
  corFundoHover?: string;
  corTextoHover?: string;
  marginX?: string;
  tamanhoBotao?: object;
}

const botaoEstilizado = (props: Props) => {
  return (
    <Button
      w="150px"
      h="50px"
      marginX="5px"
      borderRadius="10px"
      border={props.borda}
      bg={props.cor || 'cor.P2'}
      _hover={{ bg: props.corHover || 'cor.P3' }}
    >
      <Text
        fontSize={{ base: '16px', lg: '18px' }}
        fontFamily={'Gotham-Bold'}
        fontWeight={900}
      >
        {props.descricao}
      </Text>
    </Button>
  );
};

export default function Botao(props: Props): JSX.Element {
  if (props.to) {
    return (
      <Link
        as={LinkRouter}
        to={props.to}
        w={props.tamanhoBotao}
        marginX={props.marginX}
        _hover={{ textDecoration: 'none' }}
      >
        {botaoEstilizado(props)}
      </Link>
    );
  }

  if (props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        w={props.tamanhoBotao}
        marginX={props.marginX}
        _hover={{ textDecoration: 'none' }}
      >
        {botaoEstilizado(props)}
      </Link>
    );
  }

  return (
    <Flex w={props.tamanhoBotao} _hover={{ textDecoration: 'none' }}>
      {botaoEstilizado(props)}
    </Flex>
  );
}
