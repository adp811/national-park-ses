import React from 'react'
import { HStack} from '@chakra-ui/layout'
import { Text, ButtonGroup, Button, IconButton, Spacer, Link } from '@chakra-ui/react'
import { FaCamera } from 'react-icons/fa'

const Webcam = ({ id, status, title, url, fullName }) => {
    return (
        <div>
            <HStack>
                <Text fontWeight='bold' >{title}</Text>               
                <Spacer />
                <ButtonGroup size="sm" isAttached variant="outline">
                    <Button mr="-px"> {(status === 'Active') ? "Active" : "Inactive"} </Button>
                    <Link href={url} isExternal>
                        <IconButton aria-label="open live webcam" icon={<FaCamera />} />
                    </Link>
                </ButtonGroup>
            </HStack> 
        </div>
    )
}

export default Webcam
