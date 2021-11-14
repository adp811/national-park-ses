import React, { useEffect } from 'react'
import axios from 'axios'
import ParksList from '../Components/Parks/ParksList'
import { useLocation } from 'react-router-dom'
import { VStack, Heading, Spacer } from '@chakra-ui/react'

const ActivityInfo = () => {
    
    //deconstruct activity id passed from previous page:
    const {state} = useLocation();
    const { name, id } = state; 

    const [parks, setParks] = React.useState([]);

    useEffect(() => { 
        getParks();
        
    }, []); 

    const getParks = async () => {

        try {
            const url = "https://developer.nps.gov/api/v1/activities/parks?id=" + 
            id + "&limit=50&api_key=" + process.env.REACT_APP_PARK_API_KEY;
            
            const res = await axios.get(url);
            setParks(res.data.data[0].parks);

        } catch (err) {
            console.error(err);

        }

    }

    return (
        <VStack p={4} spacing='50px' >
            <Spacer />
            <Heading mb= '8' fontWeight='extrabold' size='2xl'> {name} </Heading>
            <ParksList parks={parks} />
        </VStack>
        
    )
}

export default ActivityInfo
