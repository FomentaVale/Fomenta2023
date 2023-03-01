import {
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Botao from '../../components/botao/botao';
import HistoricoAnos from '../../components/historicoAnos/historicoAnos';
import './style.css';

export default function OqueSomos() {
  const [eMaiorQue768] = useMediaQuery('min-width:768px');

  const dadosAnosImpar = [
    {
      caminho: '2019',
      ano: '2019',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2021',
      ano: '2021',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2023',
      ano: '2023',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosAnosPar = [
    {
      caminho: '2020',
      ano: '2020',
      imageH: '/public/img/oqueSomos/ItemH1.png',
      imageV: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2022',
      ano: '2022',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
    {
      caminho: '#',
      ano: '2024',
      imageH: '/public/img/oqueSomos/ItemH2.png',
      imageV: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosRevistaImpar = [
    {
      titulo: 'Revista 2020',
      caminho: '/docs/Revista2020.pdf',
    },
  ];

  const dadosRevistaPar = [
    {
      titulo: 'Revista 2022',
      caminho: '/docs/Revista2022.pdf',
    },
  ];

  const historico2019 = [
    {
      ano: '2019',
      id: '2019',
      imagemPQuadro1: '/img/oqueSomos/Historico/1.JPG',
      imagemSQuadro1A: '/img/oqueSomos/Historico/2.JPG',
      imagemSQuadro1B: '/img/oqueSomos/Historico/3.JPG',
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemPQuadro2: '/img/oqueSomos/Historico/4.JPG',
      imagemSQuadro2A: '/img/oqueSomos/Historico/5.jpeg',
      imagemSQuadro2B: '/img/oqueSomos/Historico/1.JPG',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: true,
    },
  ];

  const historico2020 = [
    {
      ano: '2020',
      id: '2020',
      imagemPQuadro1: '/img/oqueSomos/Historico/5.jpeg',
      imagemSQuadro1A: '/img/oqueSomos/Historico/1.JPG',
      imagemSQuadro1B: '/img/oqueSomos/Historico/2.JPG',
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemPQuadro2: '/img/oqueSomos/Historico/3.JPG',
      imagemSQuadro2A: '/img/oqueSomos/Historico/4.JPG',
      imagemSQuadro2B: '/img/oqueSomos/Historico/5.jpeg',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: false,
    },
  ];

  const historico2021 = [
    {
      ano: '2021',
      id: '2021',
      imagemPQuadro1: '/img/oqueSomos/Historico/3.JPG',
      imagemSQuadro1A: '/img/oqueSomos/Historico/4.JPG',
      imagemSQuadro1B: '/img/oqueSomos/Historico/5.jpeg',
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemPQuadro2: '/img/oqueSomos/Historico/1.JPG',
      imagemSQuadro2A: '/img/oqueSomos/Historico/2.JPG',
      imagemSQuadro2B: '/img/oqueSomos/Historico/3.JPG',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: true,
    },
  ];

  const historico2022 = [
    {
      ano: '2022',
      id: '2022',
      imagemPQuadro1: '/img/oqueSomos/Historico/4.JPG',
      imagemSQuadro1A: '/img/oqueSomos/Historico/5.jpeg',
      imagemSQuadro1B: '/img/oqueSomos/Historico/1.JPG',
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemPQuadro2: '/img/oqueSomos/Historico/2.JPG',
      imagemSQuadro2A: '/img/oqueSomos/Historico/3.JPG',
      imagemSQuadro2B: '/img/oqueSomos/Historico/4.JPG',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: false,
    },
  ];

  const historico2023 = [
    {
      ano: '2023',
      id: '2023',
      imagemPQuadro1: '/img/oqueSomos/Historico/2.JPG',
      imagemSQuadro1A: '/img/oqueSomos/Historico/3.JPG',
      imagemSQuadro1B: '/img/oqueSomos/Historico/4.JPG',
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemPQuadro2: '/img/oqueSomos/Historico/5.jpeg',
      imagemSQuadro2A: '/img/oqueSomos/Historico/1.JPG',
      imagemSQuadro2B: '/img/oqueSomos/Historico/2.JPG',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: true,
    },
  ];

  return (
    <>
      {/* Section O que somos */}
      <Flex
        className="oqueSomos-container"
        h={{ base: '100%', lg: '100vh' }}
        alignItems="center"
        justifyContent="center"
        margin={{ base: '30px 0px', lg: '0px' }}
        padding="50px"
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '20px', lg: '0px' }}
        >
          <Flex
            flexDir="column"
            alignItems={{ base: 'center' }}
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            padding={{ base: '10px', lg: '0px' }}
            w={{ lg: '50%' }}
          >
            <Heading fontFamily="Gotham-Black">
              <Highlight
                query="FOMENTA"
                styles={{ fontFamily: 'Gotham-Light', color: 'cor.P2' }}
              >
                O que é a FOMENTA
              </Highlight>
              <Highlight query="VALE?" styles={{ color: 'cor.P2' }}>
                &nbsp;VALE?
              </Highlight>
            </Heading>
            <Flex
              className="oqueSomos-Fomenta"
              bg="cor.S1"
              flexDir={{ base: 'column' }}
              color="white"
              gap={{ base: '15px' }}
              padding={{ base: '20px' }}
              textAlign={{ base: 'left' }}
            >
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eveniet quibusdam omnis magnam soluta harum tempora
                voluptatibus maxime facere. Ducimus consectetur in quas.
                Similique molestias enim impedit culpa quae. Mollitia.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, sapiente cupiditate odio voluptate ducimus minus
                nobis esse aut mollitia ullam quaerat dolores inventore dolore
                expedita minima laboriosam quam sint delectus.
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <iframe
              className="oqueSomos-video"
              height="290"
              width="100%"
              src="https://www.youtube.com/embed/gv_3Rt3Eq9o"
              title="Legado Fomenta Vale: Começo de uma Ideia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Flex>
        </Flex>
      </Flex>

      {/* Section Trajetoria */}

      <Flex
        bg="cor.S1"
        flexDir={{ base: 'column-reverse', lg: 'column' }}
        padding={{ base: '20px 10px', lg: '50px 0px' }}
        gap={{ base: '50px', lg: '150px' }}
      >
        <Flex
          h={{ base: '100%' }}
          alignItems="center"
          justifyContent="center"
          fontFamily="Gotham-Medium"
          flexDirection={{ lg: 'column' }}
        >
          <Flex
            w={{ base: '45%', lg: '100%' }}
            h={{ base: '100vh', lg: '20vh' }}
            flexDir={{ base: 'row', lg: 'column' }}
            alignItems={{ base: 'flex-start' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start' }}
              w={{ base: '100%', lg: '80%' }}
              h={{ base: '80%', lg: '100%' }}
            >
              {dadosAnosImpar.map((item, index) => (
                <Flex
                  flexDir={{ base: 'row', lg: 'column' }}
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  h="100%"
                  justifyContent={{ base: 'space-around' }}
                >
                  <Botao
                    href={`#${item.caminho}`}
                    borda="2px solid white"
                    cor={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                    corTexto={item.temaLaranja ? 'black' : 'white'}
                    corHover={item.temaLaranja ? 'cor.S4' : 'cor.P1'}
                    fonteTexto="Gotham-Black"
                    descricao={item.ano}
                    wLink="45%"
                  />

                  {eMaiorQue768 ? (
                    <Image h="50px" src={item.imageV} />
                  ) : (
                    <Image h="10px" src={item.imageH} />
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            w={{ base: '10%', lg: '100%' }}
          >
            {eMaiorQue768 ? (
              <>
                <Image
                  w="50%"
                  src="/public/img/oqueSomos/Trajetoria1.png"
                  alt="Inicio da linha do tempo"
                />
                <Image
                  w="50%"
                  src="/public/img/oqueSomos/Trajetoria2.png"
                  alt="Fim da linha do tempo"
                />
              </>
            ) : (
              <>
                <Image
                  src="/public/img/oqueSomos/TrajetoriaV1.png"
                  alt="Inicio da linha do tempo"
                />
                <Image
                  src="/public/img/oqueSomos/TrajetoriaV2.png"
                  alt="Fim da linha do tempo"
                />
              </>
            )}
          </Flex>
          <Flex
            w={{ base: '45%', lg: '100%' }}
            h={{ base: '100vh', lg: '20vh' }}
            flexDir={{ base: 'row', lg: 'column' }}
            alignItems={{ base: 'flex-end' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-end' }}
              w={{ base: '100%', lg: '80%' }}
              h={{ base: '80%', lg: '100%' }}
            >
              {dadosAnosPar.map((item, index) => (
                <Flex
                  flexDir={{ base: 'row', lg: 'column' }}
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  h="100%"
                  justifyContent={{ base: 'space-around' }}
                >
                  {eMaiorQue768 ? (
                    <Image h="50px" src={item.imageV} />
                  ) : (
                    <Image h="10px" src={item.imageH} />
                  )}
                  <Botao
                    href={`#${item.caminho}`}
                    borda="2px solid white"
                    cor={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                    corTexto={item.temaLaranja ? 'black' : 'white'}
                    corHover={item.temaLaranja ? 'cor.S4' : 'cor.P1'}
                    fonteTexto="Gotham-Black"
                    descricao={item.ano}
                    wLink="45%"
                  />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems={{ base: 'center' }}
          flexDir={{ base: 'column' }}
          fontFamily="Gotham-Medium"
          color="white"
          gap={{ base: '20px', lg: '50px' }}
        >
          <Heading>A nossa história</Heading>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            gap={{ base: '20px' }}
          >
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              gap={{ base: '20px' }}
            >
              {dadosRevistaImpar.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                  color="black"
                >
                  <Botao
                    href={item.caminho}
                    corTexto="black"
                    borda="2px solid white"
                    cor="cor.P3"
                    corHover="cor.S4"
                    fonteTexto="Gotham-Black"
                    descricao={item.titulo}
                    target="_blank"
                  />
                </Flex>
              ))}
            </Flex>
            <Text>Baixe e saiba mais!</Text>
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              gap={{ base: '20px' }}
            >
              {dadosRevistaPar.map((item, index) => (
                <Flex
                  key={index}
                  alignItems={{ base: 'center' }}
                  w="100%"
                  justifyContent={{ base: 'space-around' }}
                  color="white"
                >
                  <Botao
                    href={item.caminho}
                    borda="2px solid white"
                    cor="cor.P2"
                    corHover="cor.P1"
                    corTexto="white"
                    fonteTexto="Gotham-Black"
                    descricao={item.titulo}
                    target="_blank"
                  />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Section Anos */}
      <Flex h="100%" flexDir={{ base: 'column' }}>
        {historico2019.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemPQuadro1={item.imagemPQuadro1}
            imagemSQuadro1A={item.imagemSQuadro1A}
            imagemSQuadro1B={item.imagemSQuadro1B}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemPQuadro2={item.imagemPQuadro2}
            imagemSQuadro2A={item.imagemSQuadro2A}
            imagemSQuadro2B={item.imagemSQuadro2B}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
        {historico2020.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemPQuadro1={item.imagemPQuadro1}
            imagemSQuadro1A={item.imagemSQuadro1A}
            imagemSQuadro1B={item.imagemSQuadro1B}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemPQuadro2={item.imagemPQuadro2}
            imagemSQuadro2A={item.imagemSQuadro2A}
            imagemSQuadro2B={item.imagemSQuadro2B}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
        {historico2021.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemPQuadro1={item.imagemPQuadro1}
            imagemSQuadro1A={item.imagemSQuadro1A}
            imagemSQuadro1B={item.imagemSQuadro1B}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemPQuadro2={item.imagemPQuadro2}
            imagemSQuadro2A={item.imagemSQuadro2A}
            imagemSQuadro2B={item.imagemSQuadro2B}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
        {historico2022.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemPQuadro1={item.imagemPQuadro1}
            imagemSQuadro1A={item.imagemSQuadro1A}
            imagemSQuadro1B={item.imagemSQuadro1B}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemPQuadro2={item.imagemPQuadro2}
            imagemSQuadro2A={item.imagemSQuadro2A}
            imagemSQuadro2B={item.imagemSQuadro2B}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
        {historico2023.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemPQuadro1={item.imagemPQuadro1}
            imagemSQuadro1A={item.imagemSQuadro1A}
            imagemSQuadro1B={item.imagemSQuadro1B}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemPQuadro2={item.imagemPQuadro2}
            imagemSQuadro2A={item.imagemSQuadro2A}
            imagemSQuadro2B={item.imagemSQuadro2B}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
      </Flex>
    </>
  );
}
