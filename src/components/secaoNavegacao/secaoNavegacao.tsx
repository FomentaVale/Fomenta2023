import { Container, Flex, Heading, Text } from '@chakra-ui/react';

interface SecaoNavegacaoProps {
  conteudoSecao?: { titulo: string; descricao: string };
  children?: JSX.Element;
}

export default function SecaoNavegacao(props: SecaoNavegacaoProps) {
  const titulo = props.conteudoSecao?.titulo;
  const descricao = props.conteudoSecao?.descricao;
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {titulo && (
          <Heading size={{ base: 'xl', md: '2xl' }} textAlign="center">
            {titulo}
          </Heading>
        )}
        {descricao && <Text textAlign="justify">{descricao}</Text>}
        {props.children}
      </Flex>
    </Container>
  );
}
