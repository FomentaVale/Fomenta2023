import { Container, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function ConteudoFacaParte() {
  return (
    <>
      <Container>
        <Flex justifyContent="center">
          <Heading textAlign="center" fontSize="25px">
            FAÇA PARTE DA FOMENTA VALE
          </Heading>
        </Flex>

        <Flex justifyContent="center" marginTop="20px">
          <Text textAlign="center" fontSize="13px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Flex>

        <Flex justifyContent="center" gap="3" marginTop="20px" padding="1">
          <Button
            border="2px solid rgba(255, 255, 255, 0.5)"
            bg="#F7941D"
            fontSize="10px"
          >
            Banco de Talentos
          </Button>
          <Button
            border="2px solid rgba(255, 255, 255, 0.5)"
            bg="#F7941D"
            fontSize="10px"
          >
            Apoiadores
          </Button>
          <Button
            border="2px solid rgba(255, 255, 255, 0.5)"
            bg="#F7941D"
            fontSize="10px"
          >
            Estagiários
          </Button>
          <Button
            border="2px solid rgba(255, 255, 255, 0.5)"
            bg="#F7941D"
            fontSize="10px"
          >
            Incubação
          </Button>
        </Flex>
      </Container>

      {/*Barra*/}
      <Flex justifyContent="left" marginTop="20px">
        <Heading fontSize="20px" marginLeft="10">
          TITULO
        </Heading>
      </Flex>
      <Button
        border="none"
        bg="#F7941D"
        width="23%"
        height="2px"
        marginLeft="7"
        marginTop="-20px"
      ></Button>
      <Flex marginTop="20px">
        <Text fontSize="10px" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus a mi in tincidunt. Fusce consectetur convallis orci nec
          interdum. Nunc mattis dolor dui, a rutrum purus varius eget. Cras
          lectus ex, varius eget convallis in, posuere a est. Quisque at lectus
          non quam dignissim pulvinar ut at nisl. Vivamus ut elit porttitor,
          semper neque id, suscipit quam.
        </Text>
      </Flex>
    </>
  );
}
