import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Flex, Image } from '@chakra-ui/react';

interface Props {
  dadosCarrossel: {
    configuracoes: {
      infinite: boolean;
      slidesToShow: number;
      slidesToScroll: number;
      autoplay: boolean;
      speed: number;
      autoplaySpeed: number;
    };
    imagens: {
      alt: string;
      src: string;
      display: string;
    }[];
  };
}

export default function Carrossel(props: Props) {
  const configuracoes = props.dadosCarrossel.configuracoes;
  const imagens = props.dadosCarrossel.imagens;

  return (
    <Box paddingY="15px" backgroundColor="#f3f3f3" width="100%">
      <Slider {...configuracoes}>
        {imagens.map((item, index) => {
          return (
            <Flex
              key={index}
              bg="cor.S1"
              height="100px"
              justifyContent="center !important"
              alignItems="center !important"
            >
              <Image alt={item.alt} src={item.src} display={item.display} />
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
}
