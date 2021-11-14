import React from 'react'
import Park from './Park'
import { VStack, StackDivider} from '@chakra-ui/react'

const ParksList = ({ parks }) => {

    return (
        <VStack  
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='10px'
            p='5'
            borderRadius='lg'
            w='60%'
            alignItems='stretch' >
            {parks.map(park => (
               <Park fullName={park.fullName} url={park.url} parkCode={park.parkCode} states={park.states}/>
            ))}
        </VStack>

    )
}

export default ParksList
