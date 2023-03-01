import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image } from '@chakra-ui/react';

export default function Carrossel() {
  const configuracoes = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 8500,
  };

  const imagens = [
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

  return (
    <Box paddingY="15px" backgroundColor="#e8e8e8">
      <Slider {...configuracoes}>
        {imagens.map((item, index) => {
          return (
            <Image
              key={index}
              alt={item.alt}
              src={item.src}
              display={item.display}
            />
          );
        })}
      </Slider>
    </Box>
  );
}
