import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface Props {
  imagemMembro: string;
  top: string;
  left: string;
  nomeMembro: string;
  cargoMembro: string;
  linkedin: string;
  github: string;
}

export default function EquipeCard(props: Props) {
  return (
    <Flex position="relative" alignItems="center" justifyContent="center">
      <Image src={props.imagemMembro} />
      <Flex
        position="absolute"
        top={props.top}
        left={props.left}
        h="60px"
        w="110px"
        bgColor="cor.S3"
        flexDir="column"
        fontSize="10px"
        color="white"
        alignItems="center"
        gap={{ base: '8px' }}
      >
        <Flex flexDir="column" alignItems="center">
          <Text>{props.nomeMembro}</Text>
          <Text>{props.cargoMembro}</Text>
        </Flex>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent={{ base: 'center' }}
          gap={{ base: '8px' }}
        >
          <Link target="_blank" href={props.linkedin}>
            <Icon
              className="linkedin"
              icon="mdi:linkedin"
              color="white"
              height="20px"
            />
          </Link>
          <Link target="_blank" href={props.github}>
            <Icon
              className="github"
              icon="mdi:github"
              color="white"
              height="20px"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
