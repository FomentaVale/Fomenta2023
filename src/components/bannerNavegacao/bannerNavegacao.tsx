import { Container, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Botao from '../botao/botao';
import { Grid, GridItem } from '@chakra-ui/react';

export default function annerNavegacao() {
  return (
    <>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <Heading textAlign="center" fontSize="25px">
            FAÇA PARTE DA FOMENTA VALE
          </Heading>

          <Text textAlign="center" fontSize="13px" marginTop="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap="3"
            marginTop="20px"
            padding="1"
          >
            <GridItem>
              <Botao
                href="CaminhoDaInformacao"
                descricao="Banco de Talentos"
                cor="cor.P3"
              />
            </GridItem>

            <GridItem>
              <Botao
                href="CaminhoDaInformacao"
                descricao="Apoiadores"
                cor="cor.P3"
              />
            </GridItem>

            <GridItem>
              <Botao
                href="CaminhoDaInformacao"
                descricao="Estagiários"
                cor="cor.P3"
              />
            </GridItem>

            <GridItem>
              <Botao
                href="CaminhoDaInformacao"
                descricao="Incubação"
                cor="cor.P3"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </>
  );
}
