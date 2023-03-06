import { Flex, Image, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function EquipeCard() {
  return (
    <Flex position="relative">
      <Image src="/img/quemSomos/Guilherme.png" />
      <Flex
        position="absolute"
        top="200px"
        left="95px"
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
          <Text>Guilherme C.</Text>
          <Text>Estagiário</Text>
        </Flex>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent={{ base: 'center' }}
          gap={{ base: '8px' }}
        >
          <Icon
            className="facebook"
            icon="ri:facebook-box-fill"
            color="white"
            height="20px"
          />
          <Icon
            className="instagram"
            icon="mdi:instagram"
            color="white"
            height="20px"
          />
          <Icon
            className="linkedin"
            icon="mdi:linkedin"
            color="white"
            height="20px"
          />
          <Icon
            className="github"
            icon="mdi:github"
            color="white"
            height="20px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
