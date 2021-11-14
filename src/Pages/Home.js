import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Heading, Spacer, Grid, Box, Image } from '@chakra-ui/react'


const Home = () => {
    return (
        <VStack p={4} spacing='50px' >
            <Spacer />
            <Heading mb= '8' fontWeight='extrabold' size='2xl' >Welcome to our National Parks! </Heading>
            
            <Box
                w='54%' 
                borderColor='#286C56' 
                borderWidth='3px' 
                p='4' 
                borderRadius='lg' 
                color='black'
                fontWeight='semibold'>
                
                Hello!!! Welcome to a web app that gives you awesome information about national parks in the United States of America.
                You can search for fun activites to do at certain national parks as well as get access to live photos from webcams that are in 
                these national parks. How cool is that?! A blog page is currently in the works so stay tuned...

            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap={6} w='75%'>    
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1495485875514-28320fd56a0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=982&q=80" />
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1542499239-14678056f1ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1536523965721-a6e354bd19fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80" />
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1595191565808-ad1fb24f1189?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" />
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1525158996546-f17c545abed6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                <Image  h="300px" w="450px" src="https://images.unsplash.com/photo-1505053262691-624063f94b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
            </Grid>
            <Spacer />
        </VStack>
    )
}

export default Home
