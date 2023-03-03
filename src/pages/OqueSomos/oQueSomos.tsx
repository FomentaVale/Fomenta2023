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
  const [larguraTelaMaior768] = useMediaQuery('(min-width:768px)');

  const dadosAnosImpar = [
    {
      caminho: '2019',
      ano: '2019',
      imageHorizontal: '/public/img/oqueSomos/ItemH1.png',
      imageVertical: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2021',
      ano: '2021',
      imageHorizontal: '/public/img/oqueSomos/ItemH1.png',
      imageVertical: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2023',
      ano: '2023',
      imageHorizontal: '/public/img/oqueSomos/ItemH2.png',
      imageVertical: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosAnosPar = [
    {
      caminho: '2020',
      ano: '2020',
      imageHorizontal: '/public/img/oqueSomos/ItemH1.png',
      imageVertical: '/public/img/oqueSomos/ItemV1.png',
      temaLaranja: true,
    },
    {
      caminho: '2022',
      ano: '2022',
      imageHorizontal: '/public/img/oqueSomos/ItemH2.png',
      imageVertical: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
    {
      caminho: '#',
      ano: '2024',
      imageHorizontal: '/public/img/oqueSomos/ItemH2.png',
      imageVertical: '/public/img/oqueSomos/ItemV2.png',
      temaLaranja: false,
    },
  ];

  const dadosRevistaBotoesEsquerda = [
    {
      titulo: 'Revista 2020',
      caminho: '/docs/Revista2020.pdf',
    },
  ];

  const dadosRevistaBotoesDireita = [
    {
      titulo: 'Revista 2022',
      caminho: '/docs/Revista2022.pdf',
    },
  ];

  const historico = [
    {
      ano: '2019',
      id: '2019',
      imagemsSecundariasQuadro1: [
        '/img/oqueSomos/Historico/1.JPG',
        '/img/oqueSomos/Historico/2.JPG',
        '/img/oqueSomos/Historico/3.JPG',
      ],
      tituloQuadro1: 'teste1',
      textQuadro1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      imagemSecundariaQuadro2A: '/img/oqueSomos/Historico/4.JPG',
      imagemSecundariaQuadro2B: '/img/oqueSomos/Historico/5.jpeg',
      imagemSecundariaQuadro2C: '/img/oqueSomos/Historico/1.JPG',
      tituloQuadro2: 'teste2',
      textQuadro2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
      temaClaro: true,
    },
    // {
    //   ano: '2020',
    //   id: '2020',
    //   imagemSecundariaQuadro1A: '/img/oqueSomos/Historico/1.JPG',
    //   imagemSecundariaQuadro1B: '/img/oqueSomos/Historico/2.JPG',
    //   imagemSecundariaQuadro1C: '/img/oqueSomos/Historico/3.JPG',
    //   tituloQuadro1: 'teste1',
    //   textQuadro1:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   imagemSecundariaQuadro2A: '/img/oqueSomos/Historico/4.JPG',
    //   imagemSecundariaQuadro2B: '/img/oqueSomos/Historico/5.jpeg',
    //   imagemSecundariaQuadro2C: '/img/oqueSomos/Historico/1.JPG',
    //   tituloQuadro2: 'teste2',
    //   textQuadro2:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   temaClaro: false,
    // },
    // {
    //   ano: '2021',
    //   id: '2021',
    //   imagemSecundariaQuadro1A: '/img/oqueSomos/Historico/2.JPG',
    //   imagemSecundariaQuadro1B: '/img/oqueSomos/Historico/3.JPG',
    //   imagemSecundariaQuadro1C: '/img/oqueSomos/Historico/4.JPG',
    //   tituloQuadro1: 'teste1',
    //   textQuadro1:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   imagemSecundariaQuadro2A: '/img/oqueSomos/Historico/5.jpeg',
    //   imagemSecundariaQuadro2B: '/img/oqueSomos/Historico/1.JPG',
    //   imagemSecundariaQuadro2C: '/img/oqueSomos/Historico/2.JPG',
    //   tituloQuadro2: 'teste2',
    //   textQuadro2:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   temaClaro: true,
    // },
    // {
    //   ano: '2022',
    //   id: '2022',
    //   imagemSecundariaQuadro1A: '/img/oqueSomos/Historico/3.JPG',
    //   imagemSecundariaQuadro1B: '/img/oqueSomos/Historico/4.JPG',
    //   imagemSecundariaQuadro1C: '/img/oqueSomos/Historico/5.jpeg',
    //   tituloQuadro1: 'teste1',
    //   textQuadro1:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   imagemSecundariaQuadro2A: '/img/oqueSomos/Historico/1.JPG',
    //   imagemSecundariaQuadro2B: '/img/oqueSomos/Historico/2.JPG',
    //   imagemSecundariaQuadro2C: '/img/oqueSomos/Historico/3.JPG',
    //   tituloQuadro2: 'teste2',
    //   textQuadro2:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   temaClaro: false,
    // },
    // {
    //   ano: '2023',
    //   id: '2023',
    //   imagemSecundariaQuadro1A: '/img/oqueSomos/Historico/4.JPG',
    //   imagemSecundariaQuadro1B: '/img/oqueSomos/Historico/5.jpeg',
    //   imagemSecundariaQuadro1C: '/img/oqueSomos/Historico/1.JPG',
    //   tituloQuadro1: 'teste1',
    //   textQuadro1:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   imagemSecundariaQuadro2A: '/img/oqueSomos/Historico/2.JPG',
    //   imagemSecundariaQuadro2B: '/img/oqueSomos/Historico/3.JPG',
    //   imagemSecundariaQuadro2C: '/img/oqueSomos/Historico/4.JPG',
    //   tituloQuadro2: 'teste2',
    //   textQuadro2:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ultrices dictum. Morbi euismod cursus felis vel aliquet. Quisque a odio nec urna pretium interdum et in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel laoreet lectus. Aenean vitae neque a metus varius sodales sed imperdiet purus. Fusce ipsum lacus, ultricies et sollicitudin vel, tristique et ante. Curabitur consequat nibh id tristique pretium. Vivamus sit amet lectus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id ipsum quis libero aliquet venenatis sed nec nisi.',
    //   temaClaro: true,
    // },
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
          w={{ lg: '80%' }}
        >
          <Flex
            flexDir="column"
            alignItems={{ base: 'center' }}
            justifyContent={{ base: 'center' }}
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
              fontSize={{ lg: '13px' }}
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
              width="90%"
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
        flexDir={{ base: 'column', lg: 'column' }}
        padding={{ base: '20px 10px', lg: '50px 0px' }}
        gap={{ base: '100px', lg: '150px' }}
      >
        <Flex
          h={{ base: '100%' }}
          alignItems="center"
          justifyContent="center"
          fontFamily="Gotham-Medium"
          flexDirection={{ base: 'column', lg: 'column' }}
          color="white"
          gap={{ base: '50px', lg: '100px' }}
        >
          <Heading>A nossa trajetória</Heading>
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
                justifyContent="space-around"
                alignItems={{ base: 'flex-start' }}
                w={{ base: '100%', lg: '90%' }}
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
                      corFundo={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                      corTexto={item.temaLaranja ? 'black' : 'white'}
                      corFundoHover={item.temaLaranja ? 'cor.S4' : 'cor.P1'}
                      descricao={item.ano}
                      larguraBotao={{ base: '60%', lg: '45%' }}
                    />

                    {larguraTelaMaior768 ? (
                      <Image h="50px" src={item.imageVertical} />
                    ) : (
                      <Image h="10px" src={item.imageHorizontal} />
                    )}
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              alignItems={{ base: 'center' }}
              justifyContent={{ base: 'center' }}
              w={{ base: '10%', lg: '100%' }}
              h={{ base: '50vh', lg: '100%' }}
            >
              {larguraTelaMaior768 ? (
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
                    h="100%"
                    src="/public/img/oqueSomos/TrajetoriaV1.png"
                    alt="Inicio da linha do tempo"
                  />
                  <Image
                    h="100%"
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
                w={{ base: '100%', lg: '85%' }}
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
                    {larguraTelaMaior768 ? (
                      <Image h="50px" src={item.imageVertical} />
                    ) : (
                      <Image h="10px" src={item.imageHorizontal} />
                    )}
                    <Botao
                      href={`#${item.caminho}`}
                      borda="2px solid white"
                      corFundo={item.temaLaranja ? 'cor.P3' : 'cor.P2'}
                      corTexto={item.temaLaranja ? 'black' : 'white'}
                      corFundoHover={item.temaLaranja ? 'cor.S4' : 'cor.P1'}
                      descricao={item.ano}
                      larguraBotao={{ base: '60%', lg: '45%' }}
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
                {dadosRevistaBotoesEsquerda.map((item, index) => (
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
                      corFundo="cor.P3"
                      corFundoHover="cor.S4"
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
                {dadosRevistaBotoesDireita.map((item, index) => (
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
                      corFundo="cor.P2"
                      corFundoHover="cor.P1"
                      corTexto="white"
                      descricao={item.titulo}
                      target="_blank"
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Section Anos */}
      <Flex h="100%" flexDir={{ base: 'column' }}>
        {historico.map((item, index) => (
          <HistoricoAnos
            key={index}
            id={item.id}
            ano={item.ano}
            temaClaro={item.temaClaro}
            imagemsSecundariasQuadro1={item.imagemsSecundariasQuadro1}
            tituloQuadro1={item.tituloQuadro1}
            textQuadro1={item.textQuadro1}
            imagemSecundariaQuadro2A={item.imagemSecundariaQuadro2A}
            imagemSecundariaQuadro2B={item.imagemSecundariaQuadro2B}
            imagemSecundariaQuadro2C={item.imagemSecundariaQuadro2C}
            tituloQuadro2={item.tituloQuadro2}
            textQuadro2={item.textQuadro2}
          />
        ))}
      </Flex>
    </>
  );
}
