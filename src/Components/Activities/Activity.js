import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HStack} from '@chakra-ui/layout'
import { Text, IconButton, Spacer} from '@chakra-ui/react'
import { FaInfoCircle } from 'react-icons/fa'

const Activity = ({name, id}) => {
    
    const navigate = useNavigate();

    const getActivityInfo = () => {

        //send user to activity info page
        //passing the activity name and ID
        navigate('/activityInfo', { state: { name: name, id: id } });
        
    }

    return (
        <HStack>
            <Text fontWeight='bold' >{name}</Text>
            <Spacer />
            <IconButton icon={<FaInfoCircle />} isRound='true' onClick={getActivityInfo} />
        </HStack> 
        
    )
}

export default Activity
