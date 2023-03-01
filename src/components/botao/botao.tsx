import { Button, Link, Text } from '@chakra-ui/react';
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
    return <LinkRouter to={props.to}>{botaoEstilizado(props)}</LinkRouter>;
  }
  return <Link href={props.href}>{botaoEstilizado(props)}</Link>;
}
