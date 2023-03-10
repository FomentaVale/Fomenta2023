import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import CaixaInformacoes from '../../components/caixaInformacoes/caixaInformacoes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import './style.css';
import CaixaInformacoesSecaoB from '../../components/caixaInformacoesSecaoB/caixaInformacoesSecaoB';

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
      alt: 'Logo Nova América',
      src: '/img/logos/logo_novaAmerica.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Conti',
      src: '/img/logos/logo_conti.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Leveros',
      src: '/img/logos/logo_leveros.png',
      display: 'flex !important',
    },
    {
      alt: 'Logo Cabonnet',
      src: '/img/logos/logo_cabonnet.png',
      display: 'flex !important',
    },
  ];

  const informacoesOQueSomos = {
    titulo: 'O que somos?',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    quantidadeLinhasGrid: { base: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' },
    quantidadeColunasGrid: { base: 'repeat(1, 1fr)', lg: 'repeat(1, 1fr)' },
  };

  const informacoesRealizacoes = {
    titulo: 'Realizações',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    corTitulo: 'cor.P2',
    corDescricao: '#000000',
    ordem: -1,
    quantidadeLinhasFoto: 2,
    quantidadeLinhasGrid: { base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' },
    quantidadeColunasGrid: { base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' },
  };

  const informacoesCoworking = {
    titulo: 'Coworking',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    corTitulo: 'cor.P2',
    corDescricao: '#000000',
    quantidadeLinhasFoto: 2,
  };

  const informacoesQuemSomos = {
    titulo: 'Quem Somos',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
  };

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
        flexDir={{ base: 'column', lg: 'column' }}
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

          <GridItem rowSpan={{ base: 1, lg: 3 }}>
            <Flex
              w="100%"
              paddingX="25px"
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
              paddingX={{ base: '25px' }}
              paddingY={{ base: '20px' }}
              color={'#00000'}
              fontSize={{ base: '16px', lg: '18px' }}
              fontFamily="Gotham-Book"
              textAlign="justify"
              flexDir="column"
              alignItems="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit
              adipiscing bibendum est ultricies integer quis. Adipiscing elit ut
              aliquam purus sit. Adipiscing elit duis tristique sollicitudin
              nibh sit. Convallis tellus id interdum velit laoreet id donec
              ultrices tincidunt.
            </Flex>
          </GridItem>

          <GridItem>
            <Flex w="100%" justifyContent="center" paddingY={{ base: '20px' }}>
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
      {/* <Flex as="section" padding={{ base: '10px' }} bgColor="cor.P2">
        <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1000}
          loop
        >
          {imagensCarrosselApoiadores.map((item, index) => {
            return (
              <SwiperSlide key={`swiper${index}`}>
                <Flex bgColor="#000000">
                  <Image alt={item.alt} src={item.src} width="100%" />
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex> */}

      {/* Section Coworking */}
      {/* <Flex
        as="section"
        className="secaoCoworking"
        flexDir={{ base: 'column', lg: 'column' }}
      >
        <CaixaInformacoesSecaoB informacoes={informacoesCoworking}>
          <Flex
            w="100%"
            paddingX="25px"
            justifyContent="center"
            alignItems="center"
          >
            {larguraTelaMaior768 ? (
              <Grid w="100%" h="400px" templateColumns="repeat(5, 1fr)" gap={5}>
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
        </CaixaInformacoesSecaoB>
        <Flex w="100%">
          <Flex
            w={{ base: '100%', lg: '50%' }}
            justifyContent="center"
            paddingBottom="15px"
          >
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
        </Flex>
      </Flex> */}

      {/* Section O que somos */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row' }}
        bg="cor.S1"
        paddingTop={{ base: '10px' }}
      >
        <CaixaInformacoes informacoes={informacoesQuemSomos}>
          <Botao
            to="/"
            descricao="SAIBA MAIS"
            corFundo="cor.P3"
            corFundoHover="cor.S3"
            tamanhoBotao={{ base: '50%', lg: '25%' }}
            borda="3px solid #ffff"
          />
        </CaixaInformacoes>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          paddingX="25px"
          justifyContent="center"
          paddingTop={{ base: '0', lg: '0' }}
        >
          {larguraTelaMaior768 ? (
            <Image
              alt="Raizes Fomenta Vale"
              src="/img/figuras/figurasHome/figuraArvoreHome.png"
              w={{ lg: '70%' }}
            />
          ) : (
            <Image
              alt="Raizes Fomenta Vale"
              src="/img/figuras/figurasHome/figuraArvoreHomeMobile.png"
              w={{ lg: '70%' }}
            />
          )}
        </Flex>
      </Flex>

      {/* Section Nosso Espaço */}
      <Flex
        as="section"
        w="100%"
        paddingTop={{ base: '10px' }}
        paddingBottom="25px"
        flexDir="column"
        alignItems={{ base: 'center' }}
      >
        <Flex
          borderBottom="3px solid #00A99D"
          w={{ base: '70%', lg: '55%' }}
          justifyContent="center"
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
          paddingTop={{ base: '35px' }}
          justifyContent="space-evenly"
        >
          <Flex w="50%">
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
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.58661673757!2d-50.42049085!3d-22.66695925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1ff78ff8f343dbf!2sFomenta%20Vale!5e0!3m2!1spt-BR!2sbr!4v1649335896840!5m2!1spt-BR!2sbr"
              width="100%"
              height="80%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
