import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  VStack,
  Flex,
  HStack,
  Center,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const images = [
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/600',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <Center>
      <Flex p="10" mx="100px">
        <Box flex="1" maxWidth="600px">
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box key={index}>
                <Image src={image} alt="Product Image" />
              </Box>
            ))}
          </Slider>
        </Box>
        <Box flex="2" pl="4">
          <VStack align="stretch" spacing="4">
            <Heading mb="4">Product Name</Heading>
            <Text fontSize="md" mb="4">Product Description</Text>
            <Text fontSize="md" mb="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Text fontSize="50px" fontWeight="bold" color="red.500" mb="2">$99.99</Text>
            <HStack spacing="4">
              <Button onClick={() => addToCart('Item 1')} colorScheme="teal">Add to Cart</Button>
              <Button onClick={() => addToCart('Item 1')} colorScheme="blue">Buy Now</Button>
            </HStack>
          </VStack>
          
          <Heading mt="8" size="md">Cart Items</Heading>
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index}>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Center>
  );
};

export default AddToCartPage;








// import React, { useState } from 'react';

// const AddToCartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <div>
//       <h1>Add to Cart Page</h1>
//       <button onClick={() => addToCart('Item 1')}>Add Item 1 to Cart</button>
//       <button onClick={() => addToCart('Item 2')}>Add Item 2 to Cart</button>

//       <h2>Cart Items</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddToCartPage;
