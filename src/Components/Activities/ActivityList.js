import React from 'react'
import Activity from './Activity'
import { VStack, StackDivider} from '@chakra-ui/react'

const ActivityList = ({ activities }) => {

    return (
        <VStack  
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='10px'
            p='5'
            borderRadius='lg'
            w='60%'
            alignItems='stretch' >
            {activities.map(activity => (
               <Activity name={activity.name} id={activity.id} />
            ))}
        </VStack>

    )
}

export default ActivityList
