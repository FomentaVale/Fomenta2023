import {
  Box,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link as LinkPage } from 'react-router-dom';
import './style.css';

export default function Rodape() {
  const toast = useToast();
  return (
    <>
      <Flex
        bg="cor.S1"
        h="100%"
        flexDir={{ base: 'column' }}
        p={{ base: '20px' }}
        w="100%"
        color="white"
        fontSize={{ base: '9px', sm: '10px', lg: '11px', '2xl': '14px' }}
        fontFamily="Gotham-Light"
        alignItems={{ base: ' ', md: 'center' }}
      >
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          borderBottom="0.5px solid white"
          padding={{ base: '20px 0px' }}
          w={{ base: '', md: '80%', lg: '70%', '2xl': '50%' }}
        >
          <Image
            mb={{ base: '20px', md: '0px' }}
            w={{ base: '200px' }}
            src="/img/logos/logoFV 2.png"
          />
          <Flex
            gap={{ base: '10px', md: '20px' }}
            flexDir={{ base: 'column' }}
            h="100%"
            textAlign="center"
            justifyContent={{ base: 'center', md: 'space-evenly' }}
          >
            <Flex
              as={Link}
              target="_blank"
              href="https://goo.gl/maps/8KaUh2WBPY6D1KXP9"
              gap={{ base: '10px', md: '5px' }}
              alignItems={{ base: 'center' }}
              _hover={{ color: 'cor.P3' }}
              textDecoration="none !important"
            >
              <Icon
                className="icones"
                icon="ic:baseline-pin-drop"
                color="white"
              />
              <Text>
                Av. Nove de Julho, 106 - Centro, Assis - SP, 19800-020
              </Text>
            </Flex>
            <Flex
              gap="10px"
              w="100%"
              flexDir={{ base: 'column', md: 'row' }}
              justifyContent={{ md: 'space-between' }}
            >
              <Flex
                as={Link}
                target="_self"
                textDecoration="none !important"
                href="tel:+5518996922667"
                gap={{ base: '10px', md: '5px' }}
                alignItems={{ base: 'center' }}
                _hover={{ color: 'cor.P3' }}
              >
                <Icon
                  className="icones"
                  icon="material-symbols:phone-iphone-outline"
                  color="white"
                />
                <Text>(18) 99692-2667</Text>
              </Flex>
              <Flex
                cursor="pointer"
                gap={{ base: '10px', md: '5px' }}
                alignItems={{ base: 'center' }}
                justifyContent={{ md: 'flex-end' }}
                _hover={{ color: 'cor.P3' }}
                onClick={() => {
                  navigator.clipboard.writeText('contato@fomentavale.com.br');
                  toast({
                    position: 'bottom-right',
                    duration: 3000,
                    isClosable: true,
                    render: () => (
                      <Flex
                        alignItems="center"
                        gap="10px"
                        color="white"
                        p={3}
                        bg="cor.P3"
                        borderRadius="8px"
                        fontFamily="Gotham-Light"
                      >
                        <Icon
                          fontSize="20px"
                          icon="mdi:clipboard-check-multiple-outline"
                          color="white"
                        />
                        Email copiado para área de transferência.
                      </Flex>
                    ),
                  });
                }}
              >
                <Icon
                  className="icones"
                  icon="material-symbols:mail-outline"
                  color="white"
                />
                <Text>contato@fomentavale.com.br</Text>
              </Flex>
            </Flex>
            <Flex
              alignItems="center"
              gap="10px"
              w="100%"
              justifyContent={{ base: 'space-between' }}
              flexDir={{ base: 'column', md: 'row' }}
              mt={{ base: '10px' }}
            >
              <Flex whiteSpace="nowrap">
                <Text fontSize={{ lg: '13px' }} fontWeight={600}>
                  Mídias Sociais
                </Text>
              </Flex>
              <Flex
                fontSize={{ base: '20px', sm: '22px' }}
                justifyContent="space-between"
                w="100%"
                ml={{ md: '10px' }}
              >
                <Link
                  target="_blank"
                  href="https://open.spotify.com/show/1PolUs1o4eBpX695UYGSUn?si=a531452d0eec415f"
                >
                  <Icon className="spotify" icon="mdi:spotify" color="white" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/fomentavale.oficial/"
                >
                  <Icon
                    className="instagram"
                    icon="mdi:instagram"
                    color="white"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/fomentavale/"
                >
                  <Icon
                    className="linkedin"
                    icon="mdi:linkedin"
                    color="white"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@fomentavaleoficial9729"
                >
                  <Icon className="youtube" icon="mdi:youtube" color="white" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/fomentavale"
                >
                  <Icon
                    className="facebook"
                    icon="ic:baseline-facebook"
                    color="white"
                  />
                </Link>
                <Link target="_blank" href="https://wa.me/5518996922667">
                  <Icon
                    className="whatsapp"
                    icon="ic:baseline-whatsapp"
                    color="white"
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ md: '75%', lg: '65%', '2xl': '45%' }}
          flexDirection={{ base: 'column' }}
          gap="50px"
          alignItems="center"
        >
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '10px', md: '0px' }}
            mt={{ base: '20px', md: '10px' }}
            w="100%"
            alignItems={{ base: 'center' }}
            justifyContent={{ md: 'space-evenly' }}
          >
            <LinkPage to="/">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                HOME
              </ListItem>
            </LinkPage>
            <LinkPage to="/oqueSomos">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                O QUE SOMOS
              </ListItem>
            </LinkPage>
            <LinkPage to="/quemSomos">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                QUEM SOMOS
              </ListItem>
            </LinkPage>
            <LinkPage to="/realizacoes">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                REALIZAÇÕES
              </ListItem>
            </LinkPage>
            <LinkPage to="/facaParte">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                FAÇA PARTE
              </ListItem>
            </LinkPage>
            <LinkPage to="/politica">
              <ListItem textDecoration="underline" _hover={{ color: 'cor.P3' }}>
                POLÍTICAS DE PRIVICIDADE
              </ListItem>
            </LinkPage>
          </UnorderedList>
          <Text
            textAlign="center"
            fontSize={{ base: '8px', sm: '12px' }}
            mb="20px"
          >
            Copyright © 2023 | Todos os direitos reservados à Fomenta Vale
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
