import {
  Box,
  Collapse,
  Flex,
  Heading,
  Image,
  Link,
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
  alt: string;
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
  const [imagemEquipe, setImagemEquipe] = useState(props.imagem);
  const [tamanhoImagem, setTamanhoImagem] = useState('70vh');
  const [mostraInformacoes, setMostraInformacoes] = useState('none');
  const [posicaoFiltro, setPosicaoFiltro] = useState('flex');

  function observaClique() {
    onToggle();
    setAberto(!aberto);
  }

  function hoverContainerDentro() {
    setImagemEquipe(props.imagemContainer);
    setTamanhoImagem('45vh');
    setPosicaoFiltro('none');
  }

  function hoverContainerFora() {
    setImagemEquipe(props.imagem);
    setTamanhoImagem('70vh');
    setPosicaoFiltro('flex');
  }

  useEffect(() => {
    if (aberto) {
      setArredondaBorda('10px 10px 0px 0px');
    } else {
      setArredondaBorda('10px');
    }

    if (imagemEquipe === props.imagemContainer) {
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
          onMouseOver={() => hoverContainerDentro()}
          onMouseOut={() => hoverContainerFora()}
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
          <Box
            display={posicaoFiltro}
            className="container-filtro"
            position="absolute"
            w="100%"
            h="100%"
            bgColor={`rgba(247, 148, 29, 0.3)`}
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
                <Heading fontSize="38px">{props.nome}</Heading>
                <Text fontSize="26px">{props.cargo}</Text>
              </Flex>
              <Flex w="80%" justifyContent="space-around" alignItems="center">
                <Link target="_blank" href={props.linkedin}>
                  <Icon
                    className="linkedin"
                    fontSize="52px"
                    icon="mdi:linkedin"
                    color="white"
                  />
                </Link>
                <Link target="_blank" href={props.github}>
                  <Icon
                    className="github"
                    fontSize="52px"
                    icon="mdi:github"
                    color="white"
                  />
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
                        className="icone-equipe linkedin"
                        icon="mdi:linkedin"
                        color="white"
                      />
                    </Link>
                    <Link target="_blank" href={props.github}>
                      <Icon
                        className="icone-equipe github"
                        icon="mdi:github"
                        color="white"
                      />
                    </Link>
                  </Flex>
                </Flex>
                <Box w={{ base: '60%' }}>
                  <Image src={props.imagemContainer} alt={props.alt} />
                </Box>
              </Flex>
            </Flex>
          </Collapse>
        </>
      )}
    </>
  );
}
