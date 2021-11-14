import React from 'react'
import { HStack} from '@chakra-ui/layout'
import { Text, IconButton, Spacer, Link} from '@chakra-ui/react'
import { FaInfoCircle } from 'react-icons/fa'

const Park = ({ fullName, url, parkCode, states }) => {

    return (
        <HStack>
            <Link href={url} isExternal>
                <Text fontWeight='bold' >{fullName} </Text>
            </Link>
            <Text> - {states.replaceAll(',', ', ')} </Text>
            <Spacer />
            <Link href={"https://www.nps.gov/" + parkCode + "/planyourvisit/basicinfo.htm"} isExternal>
                <IconButton icon={<FaInfoCircle />} isRound='true' />
            </Link>
        </HStack> 
    )
}

export default Park
