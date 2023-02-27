import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface BotaoGeralProps {
  tituloBotao: string;
  caminho?: string;
  corBotao: string;
  bordaBotao: string;
  arredondamentoBorda: string;
}

export default function BotaoGeral({
  tituloBotao,
  caminho,
  corBotao,
  bordaBotao,
  arredondamentoBorda
}: BotaoGeralProps) {
  if (caminho !== undefined)
    return (
      <Flex>
        <Link to={caminho}>
          <Button
            w="150px"
            h="50px"
            marginX="5px"
            borderRadius={arredondamentoBorda}
            border={bordaBotao}
            bg={corBotao}
          >
            <Text
              color="#ffff"
              fontSize="15px"
              fontFamily="Gotham-Light"
              fontWeight="900"
            >
              {tituloBotao}
            </Text>
          </Button>
        </Link>
      </Flex>
    );
  else
    return (
      <Flex>
        <Button
          w="150px"
          h="50px"
          marginX="5px"
          borderRadius={arredondamentoBorda}
          border={bordaBotao}
          bg={corBotao}
        >
          <Text
            color="#ffff"
            fontSize="15px"
            fontFamily="Gotham-Light"
            fontWeight="900"
          >
            {tituloBotao}
          </Text>
        </Button>
      </Flex>
    );
}
