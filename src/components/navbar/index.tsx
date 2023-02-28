import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from '../botao';
import Dropdown from './dropdown';

export default function Navbar() {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth > 768);

  const pegarLarguraTela = () => {
    setLarguraTela(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', pegarLarguraTela);
    return () => window.removeEventListener('resize', pegarLarguraTela);
  });

  return (
    <Flex
      h="100px"
      justifyContent="space-around"
      alignItems="center"
      bg="cor.S1"
    >
      <Flex>
        <Link to="/">
          <Image
            src="/img/logos/logo_FV_branco.png"
            w={{ base: '150px', lg: '200px' }}
            alt="Logo Fomenta Vale"
          />
        </Link>
      </Flex>
      {larguraTela ? (
        <Flex>
          <Dropdown
            descricao="A Fomenta"
            caminhoOqueSomos="/oqueSomos"
            caminhoQuemSomos="/quemSomos"
          />
          <Botao descricao="Realizações" to="/realizacoes" />
          <Botao descricao="Coworking" to="/coworking" />
          <Botao descricao="Faça Parte" to="/facaParte" />
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            colorScheme="cor.S1"
            as={IconButton}
            aria-label="Options"
            icon={
              <Icon
                icon="material-symbols:menu-rounded"
                color="white"
                width="50px"
              />
            }
          />
          <MenuList>
            <MenuItem>Oque Somos</MenuItem>
            <MenuItem>Quem Somos</MenuItem>
            <MenuItem>Realizações</MenuItem>
            <MenuItem>Coworking</MenuItem>
            <MenuItem>Faça Parte</MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
