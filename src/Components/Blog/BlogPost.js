import React from 'react'
import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react';

const BlogPost = ({ title, url, description }) => {
    return (
        <Center py='6' >
            <Box w='370px' h='790px' p='6' borderColor='#286C56' borderWidth='3px' borderRadius='lg' >
                <Box h='250px' >
                    <Image src={url} h='225px' w='350px' layout='fill' />
                </Box>
                <Stack>
                    <Heading color= 'gray.700' fontSize='2xl' fontFamily='body'>
                        {title}
                    </Heading>
                    <Text color='gray.500' >
                        {description}                        
                    </Text>
                </Stack>
            </Box>
        </Center>
    )
}

export default BlogPost
