import React from 'react'
import axios from 'axios'
import ActivityList from '../Components/Activities/ActivityList'
import { VStack, Heading, Spacer, Button } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const Activities = () => {

    const [activities, setActivities] = React.useState([]);
    const [formValue, setFormValue] = React.useState("");

    const handleFormChange = (event) => setFormValue(event.target.value);

    const getActivities = async () => {

        if (formValue === "") {
            alert("please enter an activity to search!");
            return;
        }

        try {
            const url = "https://developer.nps.gov/api/v1/activities?q=" + formValue 
            + "&limit=40&api_key=" + process.env.REACT_APP_PARK_API_KEY;
            
            const res = await axios.get(url);
            setActivities(res.data.data);

        } catch (err) {
            console.error(err);

        }

    }

    return (

        <VStack p={4} spacing='50px' >
            <Spacer />
            <Heading mb= '8' fontWeight='extrabold' size='2xl' > Find A Fun Activity To Do!</Heading>

            <InputGroup alignSelf='center' w= '40%'>
                <Input
                    variant="outline"
                    placeholder="enter an activity here"
                    focusBorderColor="#286C56"
                    value={formValue}
                    onChange={handleFormChange}
                />
                <InputRightElement width="5rem">
                    <Button onClick={getActivities}>
                        Search
                    </Button>
                </InputRightElement>
                <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            </InputGroup>

            <ActivityList activities={activities} />
            <Spacer />
        </VStack>
    )
}

export default Activities
