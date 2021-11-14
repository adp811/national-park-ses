import React, { useEffect } from 'react'
import axios from 'axios'
import ParksList from '../Components/Parks/ParksList'
import { useLocation } from 'react-router-dom'
import { VStack, Heading, Spacer } from '@chakra-ui/react'

const ActivityInfo = () => {
    
    //deconstruct selected activity id and name passed from previous page:
    const {state} = useLocation();
    const { name, id } = state; 

    //store the state of parks
    const [parks, setParks] = React.useState([]);

    //run park query when the page first loads
    useEffect(() => { 
        getParks();

    }, []); 

    //async function to query all parks assocaited with given activity ID
    const getParks = async () => {

        try { //try to query the park data

            const url = "https://developer.nps.gov/api/v1/activities/parks?id=" + 
            id + "&limit=50&api_key=" + process.env.REACT_APP_PARK_API_KEY;
            
            const res = await axios.get(url);
            setParks(res.data.data[0].parks);

        } catch (err) { //handle error in query
            
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
