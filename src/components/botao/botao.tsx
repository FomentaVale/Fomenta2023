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
  larguraBotao?: string;
  alturaBotao?: string;
}

const botaoEstilizado = (props: Props) => {
  return (
    <Button
      w={props.larguraBotao || '9vw'}
      h={props.alturaBotao || '6.5vh'}
      marginX="5px"
      borderRadius="10px"
      border={props.borda}
      bg={props.cor || 'cor.P2'}
      _hover={{ bg: props.corHover || 'cor.P3' }}
      p="1.5"
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

  if (props.href) {
    return <Link href={props.href}>{botaoEstilizado(props)}</Link>;
  }

  return botaoEstilizado(props);
}
