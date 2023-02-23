import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Botao from '../botao';
import Dropdown from '../botao/dropdown';

export default function Navbar() {
  return (
    <Flex
      h="100px"
      justifyContent="space-around"
      alignItems="center"
      bg="#003829"
    >
      <Flex>
        <Link to="/">
          <Image
            src="/logos/logo_FV_branco.png"
            width="200px"
            alt="Logo Fomenta Vale"
          />
        </Link>
      </Flex>

      <Flex>
        <Dropdown
          descricao="A Fomenta"
          caminhoOqueSomos="/oqueSomos"
          caminhoQuemSomos="/quemSomos"
        />
        <Botao descricao="Realizações" caminho="/realizacoes" />
        <Botao descricao="Coworking" caminho="/coworking" />
        <Botao descricao="Faça Parte" caminho="/facaParte" />
      </Flex>
    </Flex>
  );
}
