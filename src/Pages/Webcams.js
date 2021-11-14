import React, { useEffect } from 'react'
import axios from 'axios'
import WebcamList from '../Components/Webcams/WebcamList'
import { VStack } from '@chakra-ui/react'
import { Heading, Spacer } from '@chakra-ui/react'


const Webcams = () => {

    //store the state of webcams array
    const [webcams, setWebcams] = React.useState([]);

    //query all webcam data when the page first loads
    useEffect(() => { 
        getWebcams();
        
    }, []); 

    //async function to query the list of all webcams and their information
    const getWebcams = async () => {

        try { //try to request webcam data from API

            const url = "https://developer.nps.gov/api/v1/webcams?limit=200&api_key=" + 
                process.env.REACT_APP_PARK_API_KEY;
            
            const res = await axios.get(url);
            setWebcams(res.data.data);
            console.log(webcams);

        } catch (err) { //handle errors in query request

            console.error(err);

        }

    }

    return (
        <VStack p={4} spacing='50px' >
            <Spacer />
            <Heading mb= '8' fontWeight='extrabold' size='2xl' > National Park Live Webcams! </Heading>
            <WebcamList webcams={webcams} />
        </VStack>
    )
}

export default Webcams
