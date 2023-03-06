import { Box, Flex, Image } from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import Carrossel from '../../components/carrossel/carrossel';
import CaixaInformacoes from '../../components/caixaInformacoes/caixaInformacoes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

export default function Home() {
  const imagensCarrosselPrincipal = [
    {
      alt: 'Banner Curso 1',
      src: '/img/banners/bannersHome/banner1Curso.png',
      display: 'flex !important',
    },
    {
      alt: 'Banner Curso 2',
      src: '/img/banners/bannersHome/banner2Curso.png',
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
  };

  const informacoesRealizacoes = {
    titulo: 'Realizações',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    corTitulo: 'cor.P2',
    corDescricao: '#000000',
  };

  const informacoesCoworking = {
    titulo: 'Coworking',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    corTitulo: 'cor.P2',
    corDescricao: '#000000',
  };

  const informacoesQuemSomos = {
    titulo: 'Quem Somos',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non. Nisl suscipit adipiscing bibendum est ultricies integer quis. Adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
  };

  return (
    <>
      {/* Carrossel Principal */}
      <Flex as="section" padding={{ base: '10px' }} bgColor="#f3f3f3">
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
        paddingTop="+
      "
      >
        <CaixaInformacoes informacoes={informacoesOQueSomos}>
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
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraRaizesHome.png"
            w={{ lg: '70%' }}
          />
        </Flex>
      </Flex>

      {/* Section Realizações */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row-reverse' }}
        paddingBottom="30px"
      >
        <CaixaInformacoes informacoes={informacoesRealizacoes}>
          <Botao
            to="/"
            descricao="ACOMPANHE"
            corFundo="#ffff"
            corFundoHover="cor.P1"
            corTexto="cor.P2"
            tamanhoBotao={{ base: '50%', lg: '25%' }}
            borda="3px solid #00A99D"
          />
        </CaixaInformacoes>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          paddingX="25px"
          justifyContent="center"
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraRaizesHome.png"
            w={{ lg: '70%' }}
          />
        </Flex>
      </Flex>

      {/* Section Coworking */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row' }}
        paddingBottom="30px"
      >
        <CaixaInformacoes informacoes={informacoesCoworking}>
          <Botao
            to="/"
            descricao="CONHEÇA"
            corFundo="cor.P3"
            corFundoHover="cor.S3"
            tamanhoBotao={{ base: '50%', lg: '25%' }}
          />
        </CaixaInformacoes>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          paddingX="25px"
          justifyContent="center"
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraRaizesHome.png"
            w={{ lg: '70%' }}
          />
        </Flex>
      </Flex>

      {/* Section O que somos */}
      <Flex
        as="section"
        flexDir={{ base: 'column', lg: 'row-reverse' }}
        bg="cor.S1"
        paddingBottom="30px"
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
        >
          <Image
            alt="Raizes Fomenta Vale"
            src="/img/figuras/figurasHome/figuraArvoreHome.png"
            w={{ lg: '70%' }}
          />
        </Flex>
      </Flex>
    </>
  );
}
