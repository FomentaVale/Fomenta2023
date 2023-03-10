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
  larguraBotao?: object;
}

const botaoEstilizado = (props: Props) => {
  return (
    <Button
      w="100%"
      h="50px"
      borderRadius="10px"
      border={props.borda}
      fontWeight="900"
      color={props.corTexto || '#ffff'}
      bgColor={props.corFundo || 'cor.P3'}
      _hover={{
        bgColor: props.corFundoHover || 'cor.S3',
        color: props.corTextoHover || '#ffff',
      }}
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
        w={props.larguraBotao}
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
        w={props.larguraBotao}
        marginX={props.marginX}
        _hover={{ textDecoration: 'none' }}
      >
        {botaoEstilizado(props)}
      </Link>
    );
  }

  return (
    <Flex w={props.larguraBotao} _hover={{ textDecoration: 'none' }}>
      {botaoEstilizado(props)}
    </Flex>
  );
}
