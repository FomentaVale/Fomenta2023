import {
  useMediaQuery,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Botao from '../botao/botao';
import Dropdown from './dropdown/dropdown';

export default function Navbar() {
  const [larguraTelaMaior768] = useMediaQuery('(min-width: 768px)');

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
      {larguraTelaMaior768 ? (
        <Flex>
          <Dropdown
            descricao="A Fomenta"
            caminhoOqueSomos="/oqueSomos"
            caminhoQuemSomos="/quemSomos"
          />
          <Botao
            descricao="Realizações"
            to="/realizacoes"
            borda="solid 2px rgba(255, 255, 255, 0.5)"
          />
          <Botao
            descricao="Coworking"
            to="/coworking"
            borda="solid 2px rgba(255, 255, 255, 0.5)"
          />
          <Botao
            descricao="Faça Parte"
            to="/facaParte"
            borda="solid 2px rgba(255, 255, 255, 0.5)"
          />
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
            <MenuItem>O que Somos</MenuItem>
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
