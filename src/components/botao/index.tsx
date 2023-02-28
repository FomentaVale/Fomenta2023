import { Button, Link, Text } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

interface Props {
  to?: string;
  href?: string;
  descricao: string;
}

export default function Botao({ to, href, descricao }: Props): JSX.Element {
  if (to) {
    return (
      <LinkRouter to={to}>
        <Button
          w="150px"
          h="50px"
          marginX="5px"
          borderRadius="10px"
          border="2px solid rgba(255, 255, 255, 0.5)"
          bg="cor.P2"
          _hover={{ bg: 'cor.P3' }}
        >
          <Text
            color="#ffff"
            fontSize="15px"
            fontFamily="Gotham-Light"
            fontWeight="900"
          >
            {descricao}
          </Text>
        </Button>
      </LinkRouter>
    );
  }
  return (
    <Link href={href}>
      <Button
        w="150px"
        h="50px"
        marginX="5px"
        borderRadius="10px"
        border="2px solid rgba(255, 255, 255, 0.5)"
        bg="cor.P2"
        _hover={{ bg: 'cor.P3' }}
      >
        <Text
          color="#ffff"
          fontSize="15px"
          fontFamily="Gotham-Light"
          fontWeight="900"
        >
          {descricao}
        </Text>
      </Button>
    </Link>
  );
}
