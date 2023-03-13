import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface Props {
  descricao: string;
  caminhoOqueSomos: string;
  caminhoQuemSomos: string;
}

export default function Dropdown(props: Props) {
  return (
    <Menu matchWidth={true}>
      <MenuButton
        as={Button}
        w="160px"
        h="50px"
        marginX="5px"
        borderRadius="10px"
        border="2px solid rgba(255, 255, 255, 0.5)"
        bg="cor.P2"
        _hover={{ bg: 'cor.P3' }}
        _active={{ bg: 'cor.P3' }}
        rightIcon={
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            width="30px"
            color="#ffff"
          />
        }
      >
        <Text
          color="#ffff"
          fontSize="18px"
          fontFamily="Gotham-Bold"
          fontWeight="900"
        >
          {props.descricao}
        </Text>
      </MenuButton>

      <MenuList minWidth="150px" p="0" bg="transparent">
        <MenuItem
          margin="0"
          borderTopRadius="10px"
          bg="cor.P2"
          _hover={{ bg: 'cor.P3' }}
        >
          <Link to={props.caminhoOqueSomos}>
            <Text
              color="#ffff"
              fontSize="15px"
              fontFamily="Gotham-Bold"
              fontWeight="900"
            >
              O que Somos
            </Text>
          </Link>
        </MenuItem>
        <Link to={props.caminhoQuemSomos}>
          <MenuItem
            borderBottomRadius="10px"
            bg="cor.P2"
            _hover={{ bg: 'cor.P3' }}
          >
            <Text
              color="#ffff"
              fontSize="15px"
              fontFamily="Gotham-Bold"
              fontWeight="900"
            >
              Quem Somos
            </Text>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
