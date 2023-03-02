import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

interface Props {
  to?: string;
  href?: string;
  descricao: string;
  cor?: string;
  corTexto?: string;
  borda?: string;
  fonteTexto?: string;
  corHover?: string;
  wLink?: string;
  target?: string;
  marginX?: string;
}

const botaoEstilizado = (props: Props) => {
  return (
    <Button
      w="100%"
      h="50px"
      borderRadius="10px"
      border={props.borda}
      bg={props.cor || 'cor.P2'}
      _hover={{ bg: props.corHover || 'cor.P3' }}
    >
      <Text
        color={props.corTexto || '#ffff'}
        fontSize="15px"
        fontFamily={props.fonteTexto || 'Gotham-Light'}
        fontWeight="900"
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
        w={props.wLink}
        marginX={props.marginX}
        as={LinkRouter}
        to={props.to}
      >
        {botaoEstilizado(props)}
      </Link>
    );
  }

  if (props.href) {
    return (
      <Link w={props.wLink} href={props.href} target={props.target}>
        {botaoEstilizado(props)}
      </Link>
    );
  }

  return <Flex w={props.wLink}>{botaoEstilizado(props)}</Flex>;
}
