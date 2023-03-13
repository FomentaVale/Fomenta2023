import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css';

export default function Home() {
  const [larguraTelaMaior768] = useMediaQuery('(min-width: 768px)');

  const imagensCarrosselPrincipal = [
    {
      alt: 'Banner Curso 1',
      src: '/img/banners/bannersHome/Frame 1.png',
      display: 'flex !important',
    },
    {
      alt: 'Banner Curso 2',
      src: '/img/banners/bannersHome/Frame 1.png',
      display: 'flex !important',
    },
  ];

  const imagensCarrosselApoiadores = [
    {
      alt: 'Logo Almeida & Nogueira',
      src: '/img/logos/Parceiros/Almeida_Nogueira.png',
      display: 'flex !important',
      cor: 'black',
    },
    {
      alt: 'Logo Cabonnet',
      src: '/img/logos/Parceiros/Cabonnet.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Casa Di Conti',
      src: '/img/logos/Parceiros/CasaDiConti.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Fatec',
      src: '/img/logos/Parceiros/FATEC.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Fema',
      src: '/img/logos/Parceiros/fema.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Gad',
      src: '/img/logos/Parceiros/GAD.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Leveros',
      src: '/img/logos/Parceiros/LEVEROS.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo NOMADS',
      src: '/img/logos/Parceiros/NOMADS.png',
      display: 'flex !important',
      cor: 'black',
    },
    {
      alt: 'Logo NovAmerica',
      src: '/img/logos/Parceiros/NOVAMERICA.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Sandrin',
      src: '/img/logos/Parceiros/SandrinPlanejados.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Unesp',
      src: '/img/logos/Parceiros/unesp.png',
      display: 'flex !important',
    },
  ];

  return (
    <>
      {/* Carrossel Principal */}
      <Flex as="section" bgColor="#f3f3f3">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500 }}
        >
          {imagensCarrosselPrincipal.map((item, index) => {
            return (
              <SwiperSlide key={`swiper${index}`}>
                <Image alt={item.alt} src={item.src} width="100%" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>

      {/* Section O que somos */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row' }}
        bg="cor.S1"
        paddingTop={{ base: '10px', lg: '0px' }}
        paddingBottom="25px"
      >
        <Flex
          w={{ base: '100%', lg: '50%' }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="60%"
            borderBottom="2px solid #F37021"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              color="#ffff"
              fontFamily="Gotham-Black"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              O Que Somos?
            </Text>
          </Flex>

          <Flex
            padding={{ base: '25px', lg: '25px 100px' }}
            color="#ffff"
            fontSize={{ base: '16px', lg: '18px' }}
            fontFamily="Gotham-Book"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Adipiscing elit ut
            aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh
            sit. Convallis tellus id interdum velit laoreet id donec ultrices
            tincidunt.
          </Flex>
          <Flex w="100%" justifyContent="center">
            <Botao
              to="/"
              descricao="SAIBA MAIS"
              corFundo="cor.P3"
              corFundoHover="cor.S3"
              tamanhoBotao={{ base: '50%', lg: '25%' }}
              borda="3px solid #ffff"
            />
          </Flex>
        </Flex>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          height="100%"
          justifyContent="center"
          paddingX="15px"
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraRaizesHome.png"
            w={{ base: '100%', lg: '70%' }}
          />
        </Flex>
      </Flex>

      {/* Section Realizações */}
      <Flex
        as="section"
        className="secaoRealizacoes"
        flexDir="column"
        paddingY={{ lg: '100px' }}
      >
        <Grid
          templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        >
          <GridItem>
            <Flex
              justifyContent="center"
              alignItems="flex-end"
              h={{ lg: '100%' }}
              paddingY={{ base: '20px' }}
            >
              <Text
                textAlign="center"
                color={'#00000'}
                fontFamily="Gotham-Black"
                fontSize={{ base: '25px', md: '30px', lg: '35px' }}
                borderBottom="3px solid #00A99D"
                w="50%"
              >
                Realizações
              </Text>
            </Flex>
          </GridItem>

          <GridItem rowSpan={{ base: 1, lg: 3 }} order={{ lg: '-1' }}>
            <Flex
              w="100%"
              paddingX="30px"
              paddingY={{ base: '20px' }}
              justifyContent="center"
              alignItems="center"
            >
              {larguraTelaMaior768 ? (
                <Grid
                  w="100%"
                  h="500px"
                  templateColumns="repeat(5, 1fr)"
                  gap={5}
                >
                  <GridItem colSpan={3} bg="#D9D9D9" />
                  <GridItem colSpan={2} bg="#D9D9D9" />
                  <GridItem colSpan={2} bg="#D9D9D9" />
                  <GridItem colSpan={3} bg="#D9D9D9" />
                </Grid>
              ) : (
                <Image
                  alt="Imagem Principal Realizações"
                  src="/img/banners/bannersHome/predio_Fomenta.jpg"
                />
              )}
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              padding={{ base: '20px 30px', lg: '0 100px' }}
              color={'#00000'}
              fontSize={{ base: '16px', lg: '18px' }}
              fontFamily="Gotham-Book"
              textAlign="justify"
              flexDir="column"
              alignItems="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla urna porttitor rhoncus dolor purus non.
            </Flex>
          </GridItem>

          <GridItem>
            <Flex w="100%" justifyContent="center" paddingY={{ base: '50px' }}>
              <Botao
                to="/"
                descricao="SAIBA MAIS"
                corFundo="#ffff"
                corFundoHover="cor.P1"
                corTexto="cor.P2"
                tamanhoBotao={{ base: '50%', lg: '25%' }}
                borda="3px solid #00A99D"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      {/* Carrossel Apoiadores */}
      <Flex as="section" padding={{ base: '10px' }} bgColor="cor.P2">
        <Swiper
          slidesPerView={2}
          loop
          speed={2000}
          modules={[Autoplay]}
          autoplay={{
            delay: 500,
          }}
        >
          {imagensCarrosselApoiadores.map((item, index) => {
            return (
              <SwiperSlide key={`swiper${index}`}>
                <Flex justifyContent="center" w={{ base: '100%', lg: '100%' }}>
                  <Flex
                    bgColor={item.cor || '#FFFF'}
                    justifyContent="center"
                    w={{ base: '80%', lg: '50%' }}
                    borderRadius="10px"
                    p="5px"
                  >
                    <Image alt={item.alt} src={item.src} w="100%" />
                  </Flex>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>

      {/* Section Coworking */}
      <Flex
        as="section"
        className="secaoCoworking"
        flexDir="column"
        paddingY={{ lg: '100px' }}
      >
        <Grid
          templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        >
          <GridItem>
            <Flex
              justifyContent="center"
              alignItems="flex-end"
              h={{ lg: '100%' }}
              paddingY={{ base: '20px' }}
            >
              <Text
                textAlign="center"
                color={'#00000'}
                fontFamily="Gotham-Black"
                fontSize={{ base: '25px', md: '30px', lg: '35px' }}
                borderBottom="3px solid #00A99D"
                w="50%"
              >
                Coworking
              </Text>
            </Flex>
          </GridItem>

          <GridItem rowSpan={{ base: 1, lg: 3 }}>
            <Flex
              w="100%"
              paddingX="30px"
              paddingY={{ base: '20px' }}
              justifyContent="center"
              alignItems="center"
            >
              {larguraTelaMaior768 ? (
                <Grid
                  w="100%"
                  h="500px"
                  templateColumns="repeat(5, 1fr)"
                  gap={5}
                >
                  <GridItem colSpan={3} bg="#D9D9D9" h="100%"></GridItem>
                  <GridItem colSpan={2} bg="#D9D9D9" h="100%"></GridItem>
                  <GridItem colSpan={2} bg="#D9D9D9" h="100%"></GridItem>
                  <GridItem colSpan={3} bg="#D9D9D9" h="100%"></GridItem>
                </Grid>
              ) : (
                <Image
                  alt="Imagem Principal Realizações"
                  src="/img/banners/bannersHome/predio_Fomenta.jpg"
                />
              )}
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              padding={{ base: '20px 30px', lg: '0 100px' }}
              color={'#00000'}
              fontSize={{ base: '16px', lg: '18px' }}
              fontFamily="Gotham-Book"
              textAlign="justify"
              flexDir="column"
              alignItems="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla urna porttitor rhoncus dolor purus non.
            </Flex>
          </GridItem>

          <GridItem>
            <Flex w="100%" justifyContent="center" paddingY={{ base: '50px' }}>
              <Botao
                to="/"
                descricao="SAIBA MAIS"
                corFundo="#ffff"
                corFundoHover="cor.P1"
                corTexto="cor.P2"
                tamanhoBotao={{ base: '50%', lg: '25%' }}
                borda="3px solid #00A99D"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      {/* Section O que somos */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row-reverse' }}
        bg="cor.S1"
        paddingTop={{ base: '10px' }}
      >
        <Flex
          w={{ base: '100%', lg: '50%' }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="60%"
            borderBottom="2px solid #F37021"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              color="#ffff"
              fontFamily="Gotham-Black"
              fontSize={{ base: '25px', md: '30px', lg: '35px' }}
            >
              Quem Somos?
            </Text>
          </Flex>

          <Flex
            padding={{ base: '25px', lg: '25px 100px' }}
            color="#ffff"
            fontSize={{ base: '16px', lg: '18px' }}
            fontFamily="Gotham-Book"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Adipiscing elit ut
            aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh
            sit. Convallis tellus id interdum velit laoreet id donec ultrices
            tincidunt.
          </Flex>
          <Flex w="100%" justifyContent="center">
            <Botao
              to="/"
              descricao="SAIBA MAIS"
              corFundo="cor.P3"
              corFundoHover="cor.S3"
              tamanhoBotao={{ base: '50%', lg: '25%' }}
              borda="3px solid #ffff"
            />
          </Flex>
        </Flex>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          height="100%"
          justifyContent="center"
          paddingX="15px"
        >
          {larguraTelaMaior768 ? (
            <Image
              alt="Raizes Fomenta Vale"
              src="/img/figuras/figurasHome/figuraArvoreHome.png"
              w="60%"
            />
          ) : (
            <Image
              alt="Raizes Fomenta Vale"
              src="/img/figuras/figurasHome/figuraArvoreHomeMobile.png"
              w="90%"
            />
          )}
        </Flex>
      </Flex>

      {/* Section Nosso Espaço */}
      <Flex
        as="section"
        w="100%"
        paddingTop={{ base: '10px' }}
        paddingBottom="50px"
        flexDir="column"
        alignItems={{ base: 'center' }}
      >
        <Flex
          borderBottom="3px solid #00A99D"
          w={{ base: '70%', lg: '55%' }}
          justifyContent="center"
          paddingTop="20px"
        >
          <Text
            fontSize={{ base: '23px', lg: '35px' }}
            fontFamily="Gotham-Black"
            textAlign="center"
          >
            Venha Conhecer Nosso Espaço
          </Text>
        </Flex>

        <Flex
          w={{ base: '90%', lg: '100%' }}
          flexDir={{ base: 'column', lg: 'row' }}
          paddingTop={{ base: '35px', lg: '50px' }}
          justifyContent="space-evenly"
        >
          <Flex w={{ base: '100%', lg: '50%' }}>
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={3000}
              loop
            >
              <SwiperSlide>
                <Image
                  alt="Predio Fomenta"
                  src="/img/banners/bannersHome/predio_Fomenta.jpg"
                  width="100%"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Predio Fomenta"
                  src="/img/banners/bannersHome/logo_predio_Fomenta.jpg"
                  width="100%"
                />
              </SwiperSlide>
            </Swiper>
          </Flex>
          <Flex
            paddingY={{ base: '20px', lg: '0' }}
            justifyContent="center"
            alignItems="center"
            flexDir={{ base: 'column' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.58661673757!2d-50.42049085!3d-22.66695925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1ff78ff8f343dbf!2sFomenta%20Vale!5e0!3m2!1spt-BR!2sbr!4v1649335896840!5m2!1spt-BR!2sbr"
              width="100%"
              height="80%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Flex lineHeight="25px">
              <Icon
                icon="mdi:location-radius-outline"
                color="#00a99d"
                width="30px"
              />
              Av. Nove de Julho, 106 - Centro, Assis - SP
            </Flex>
            <Flex lineHeight="25px">
              <Icon
                icon="ic:baseline-access-time"
                color="#00a99d"
                width="30px"
              />
              Abre às 9:00h - Fecha às 17:00h
            </Flex>
            <Flex lineHeight="25px">
              <Icon icon="ph:phone" color="#00a99d" width="30px" />
              (18) 99692-2667
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
