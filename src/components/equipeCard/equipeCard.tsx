import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import './style.css';

interface Props {
  imagem: string;
  imagemContainer: string;
  nome: string;
  cargo: string;
  linkedin: string;
  github: string;
}

export default function EquipeCard(props: Props) {
  const [larguraTelaMaior768] = useMediaQuery('screen and (min-width:768px');
  const { isOpen, onToggle } = useDisclosure();
  const [arredondaBorda, setArredondaBorda] = useState('10px');
  const [aberto, setAberto] = useState(false);
  const [mostraFiltro, setMostraFiltro] = useState('0.3');
  const [imagemEquipe, setImagemEquipe] = useState(props.imagem);
  const [tamanhoImagem, setTamanhoImagem] = useState('70vh');
  const [mostraInformacoes, setMostraInformacoes] = useState('none');

  function observaClique() {
    onToggle();
    setAberto(!aberto);
  }

  function hoverContainer() {
    if (imagemEquipe == props.imagem) {
      setImagemEquipe(props.imagemContainer);
      setTamanhoImagem('45vh');
      setMostraFiltro('0');
    } else {
      setImagemEquipe(props.imagem);
      setTamanhoImagem('70vh');
      setMostraFiltro('0.3');
    }
  }

  useEffect(() => {
    if (aberto) {
      setArredondaBorda('10px 10px 0px 0px');
    } else {
      setArredondaBorda('10px');
    }

    if (imagemEquipe == props.imagemContainer) {
      setTimeout(() => {
        setMostraInformacoes('flex');
      }, 340);
    } else {
      setMostraInformacoes('none');
    }
  });

  return (
    <>
      {larguraTelaMaior768 ? (
        <Flex
          onMouseOver={() => hoverContainer()}
          onMouseOut={() => hoverContainer()}
          className="container-equipe"
          position="relative"
          w="150px"
          h="90vh"
          bgColor="cor.P3"
          bgImage={`url(${imagemEquipe})`}
          bgSize={tamanhoImagem}
          bgRepeat="no-repeat"
          bgPosition="bottom"
        >
          <Flex
            onMouseOver={() => hoverContainer()}
            onMouseOut={() => hoverContainer()}
            className="container-filtro"
            position="absolute"
            w="100%"
            h="100%"
            bgColor={`rgba(247, 148, 29, ${mostraFiltro})`}
          />
          <Box display={mostraInformacoes} h="100%" w="100%" color="white">
            <Flex
              flexDir="column"
              alignItems="center"
              w="100%"
              gap="50px"
              padding="20px 10px"
            >
              <Flex
                flexDir="column"
                alignItems="center"
                gap="20px"
                textAlign="center"
              >
                <Heading fontSize="44px">{props.nome}</Heading>
                <Text fontSize="28px">{props.cargo}</Text>
              </Flex>
              <Flex w="80%" justifyContent="space-around" alignItems="center">
                <Link target="_blank" href={props.linkedin}>
                  <Icon fontSize="64px" icon="mdi:linkedin" color="white" />
                </Link>
                <Link target="_blank" href={props.github}>
                  <Icon fontSize="64px" icon="mdi:github" color="white" />
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <>
          {!aberto ? (
            <Flex
              w={{ base: '90vw' }}
              bgColor="cor.P3"
              h={{ base: '70px' }}
              onClick={observaClique}
              borderRadius={arredondaBorda}
              color="white"
            >
              <Flex
                w="70%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Heading fontSize={{ base: '18px' }}>{props.nome}</Heading>
                <Text fontSize={{ base: '14px' }}>{props.cargo}</Text>
              </Flex>
              <Flex w="30%" alignItems="center" justifyContent="center">
                <Icon
                  width="40px"
                  icon="material-symbols:arrow-circle-down-outline"
                  color="white"
                />
              </Flex>
            </Flex>
          ) : (
            <Flex
              className="etiqueta"
              w={{ base: '90vw' }}
              bgColor="cor.P3"
              h="70px"
              onClick={observaClique}
              borderRadius={arredondaBorda}
              color="white"
            >
              <Flex
                w="100%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Heading fontSize={{ base: '24px' }}>{props.nome}</Heading>
                <Text fontSize={{ base: '16px' }}>{props.cargo}</Text>
              </Flex>
            </Flex>
          )}

          <Collapse onClick={observaClique} in={isOpen} animateOpacity>
            <Flex h="100%" color="white" bgColor="cor.S2">
              <Flex
                w="100%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                shadow="md"
              >
                <Flex
                  flexDir="column"
                  alignItems="center"
                  h="100%"
                  w="100%"
                  mt="10px"
                >
                  <Flex
                    w="100%"
                    justifyContent="space-evenly"
                    alignItems="center"
                    h="80%"
                  >
                    <Link target="_blank" href={props.linkedin}>
                      <Icon
                        className="icone-equipe"
                        icon="mdi:linkedin"
                        color="white"
                      />
                    </Link>
                    <Link target="_blank" href={props.github}>
                      <Icon
                        className="icone-equipe"
                        icon="mdi:github"
                        color="white"
                      />
                    </Link>
                  </Flex>
                </Flex>
                <Box w={{ base: '60%' }}>
                  <Image src={props.imagem} />
                </Box>
              </Flex>
            </Flex>
          </Collapse>
        </>
      )}
    </>
  );
}
