import { Box, Flex, Stack, Grid, Wrap, WrapItem, AspectRatio } from "@chakra-ui/layout";
import { Image, Badge } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
export default function Demo(props) {
  return (
    /*#__PURE__*/
    // <Box bg="tomato" w="100%" p={8} color="white">
    //   This is the Box
    // </Box>
    // <Box boxSize="sm">
    //   <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
    // </Box>
    // <Flex>
    //   <Box flex="1">Box 1</Box>
    //   <Box>Box 2</Box>
    // </Flex>
    // <Stack spacing="20px">
    //   <Box>Box 1</Box>
    //   <Box>Box 2</Box>
    // </Stack>
    // <ChakraProvider>
    // <Stack direction="row">
    //   <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
    //   <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
    //   <Avatar src="https://bit.ly/broken-link" />
    // </Stack>
    // </ChakraProvider>
    React.createElement(Wrap, null, /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Dan Abrahmov",
      src: "https://bit.ly/dan-abramov"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Kola Tioluwani",
      src: "https://bit.ly/tioluwani-kolawole"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Kent Dodds",
      src: "https://bit.ly/kent-c-dodds"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ryan Florence",
      src: "https://bit.ly/ryan-florence"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Prosper Otemuyiwa",
      src: "https://bit.ly/prosper-baba"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Christian Nwamba",
      src: "https://bit.ly/code-beast"
    })), /*#__PURE__*/React.createElement(WrapItem, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Segun Adebayo",
      src: "https://bit.ly/sage-adebayo"
    })))
  );
} // function AirbnbExample() {
//     const property = {
//       imageUrl: "https://bit.ly/2Z4KKcF",
//       imageAlt: "Rear view of modern home with pool",
//       beds: 3,
//       baths: 2,
//       title: "Modern home in city center in the heart of historic Los Angeles",
//       formattedPrice: "$1,900.00",
//       reviewCount: 34,
//       rating: 4,
//     }
//     return (
//       <Box bg="tomato" w="100%" p={8} color="white">
//         This is the Box
//       </Box>
//       <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
//         <Image src={property.imageUrl} alt={property.imageAlt} />
//         <Box p="6">
//           <Box d="flex" alignItems="baseline">
//             <Badge borderRadius="full" px="2" colorScheme="teal">
//               New
//             </Badge>
//             <Box
//               color="gray.500"
//               fontWeight="semibold"
//               letterSpacing="wide"
//               fontSize="xs"
//               textTransform="uppercase"
//               ml="2"
//             >
//               {property.beds} beds &bull; {property.baths} baths
//             </Box>
//           </Box>
//           <Box
//             mt="1"
//             fontWeight="semibold"
//             as="h4"
//             lineHeight="tight"
//             isTruncated
//           >
//             {property.title}
//           </Box>
//           <Box>
//             {property.formattedPrice}
//             <Box as="span" color="gray.600" fontSize="sm">
//               / wk
//             </Box>
//           </Box>
//           <Box d="flex" mt="2" alignItems="center">
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   color={i < property.rating ? "teal.500" : "gray.300"}
//                 />
//               ))}
//             <Box as="span" ml="2" color="gray.600" fontSize="sm">
//               {property.reviewCount} reviews
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     )
//   }