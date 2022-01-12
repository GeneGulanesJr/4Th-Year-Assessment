import {
    Badge,
    chakra,
    Code,
    Heading,
    List,
    ListItem,
    OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Applicants() {
    return (
        <Layout>
            <Heading>Applicants page</Heading>
            {/* <Text my={6}>{currentUser?.email}</Text> */}

            <Heading>
                <Badge
                    fontWeight='black'
                    fontSize='4xl'
                    mx={2}
                    px={2}
                    colorScheme='green'
                >
                    Love - Licensing Of Vehicle for Everyone,
                </Badge>
            </Heading>

            <Heading size='md' mt={8}>
                Applicants
            </Heading>
            <List>
                <ListItem>
                    <Link to='/reset-password'>reset page</Link>
                </ListItem>
                <ListItem>
                    <Link to='/forgot-password'>forgot page</Link>
                </ListItem>
                <ListItem>
                    <Link to='/test'>test page</Link>
                </ListItem>
            </List>
        </Layout>
    )
}
