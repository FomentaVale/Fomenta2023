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

export default function Dropdown({
  descricao,
  caminhoOqueSomos,
  caminhoQuemSomos,
}: Props) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        w="170px"
        h="50px"
        marginX="5px"
        borderRadius="10px"
        border="2px solid rgba(255, 255, 255, 0.5)"
        bg="#00A99D"
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
          fontSize="15px"
          fontFamily="Gotham Light"
          fontWeight="900"
        >
          {descricao}
        </Text>
      </MenuButton>
      <MenuList>
        <Link to={caminhoOqueSomos}>
          <MenuItem
            display="flex"
            justifyContent="center"
            w="170px"
            h="50px"
            border="2px solid rgba(255, 255, 255, 0.5)"
            borderTopRadius="10px"
            bg="#00A99D"
          >
            <Text
              color="#ffff"
              fontSize="15px"
              fontFamily="Gotham Light"
              fontWeight="900"
            >
              Oque Somos
            </Text>
          </MenuItem>
        </Link>
        <Link to={caminhoQuemSomos}>
          <MenuItem
            display="flex"
            justifyContent="center"
            w="170px"
            h="50px"
            border="2px solid rgba(255, 255, 255, 0.5)"
            borderBottomRadius="10px"
            bg="#00A99D"
          >
            <Text
              color="#ffff"
              fontSize="15px"
              fontFamily="Gotham Light"
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
