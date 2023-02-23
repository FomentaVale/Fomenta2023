import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  descricao: string;
  caminho: string;
}

export default function Botao({ descricao, caminho }: Props) {
  return (
    <Flex>
      <Link to={caminho}>
        <Button
          w="170px"
          h="50px"
          marginX="5px"
          borderRadius="10px"
          border="2px solid rgba(255, 255, 255, 0.5)"
          bg="#00A99D"
        >
          <Text
            color="#ffff"
            fontSize="15px"
            fontFamily="Gotham Light"
            fontWeight="900"
          >
            {descricao}
          </Text>
        </Button>
      </Link>
    </Flex>
  );
}
