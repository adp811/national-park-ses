import React from 'react'
import Webcam from './Webcam'
import { VStack, StackDivider} from '@chakra-ui/react'

const WebcamList = ({ webcams }) => {

    return (
        <VStack  
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='10px'
            p='5'
            borderRadius='lg'
            w='60%'
            alignItems='stretch' >
            {webcams.map(webcam => (
               <Webcam title={webcam.title} id={webcam.id} status={webcam.status} url={webcam.url} />
            ))}
        </VStack>
    )
}

export default WebcamList
