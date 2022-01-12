import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
    Stack,
    FormControl, Box, Center,
    FormLabel,
    Input,
    FormErrorMessage,
    useToast,
    useColorModeValue, SimpleGrid
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {AddIcon} from "@chakra-ui/icons";
import React from 'react'
import {Field, Form, Formik} from "formik";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../utils/init-firebase";


export default function LTOForm({works}) {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    async  function updateUsers2(values) {

        const userRef = doc(db, 'users', works.id);
        await  updateDoc(userRef,{
            ...values

        })
    }



    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <AddIcon />
            </Button>




            <Modal isOpen={isOpen} onClose={onClose} size='full'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Application for Student Driver's Permit/Driver's Licence/ Conductor's Licence </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid minChildWidth='120px' spacing='40px'>
                            <Box
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                rounded={'md'}
                                overflow={'hidden'}
                                boxShadow={'lg'}>

                                    <Stack spacing='24px'>
                                        <Formik
                                            initialValues={{
                                                ...works
                                            }}
                                            onSubmit={(values, actions) => {
                                                updateUsers2(values)
                                                    .then(() => {
                                                        toast({
                                                            title: 'Success',
                                                            description: 'User Profile Updated Successfully',
                                                            status: 'info',
                                                            duration: 9000,
                                                            isClosable: true,
                                                        })
                                                        actions.setSubmitting(false)
                                                        onClose()
                                                    })

                                            }}
                                        >
                                            {(props) => (
                                                <Form>
                                                    <Field name='districtOffice' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.districtOffice && form.touched.districtOffice}>
                                                                <FormLabel htmlFor='districtOffice'>District Office</FormLabel>
                                                                <Input {...field} id='districtOffice' placeholder='districtOffice' />
                                                                <FormErrorMessage>{form.errors.districtOffice}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='FamilyName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.FamilyName && form.touched.FamilyName}>
                                                                <FormLabel htmlFor='Family Name'>Family Name</FormLabel>
                                                                <Input {...field} id='Family Name' placeholder='Family Name' />
                                                                <FormErrorMessage>{form.errors.FamilyName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='FirstName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.FirstName && form.touched.FirstName}>
                                                                <FormLabel htmlFor='First Name'>First Name</FormLabel>
                                                                <Input {...field} id='First Name' placeholder='First Name' />
                                                                <FormErrorMessage>{form.errors.FirstName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='MiddleName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.MiddleName && form.touched.MiddleName}>
                                                                <FormLabel htmlFor='MiddleName'>Middle Name</FormLabel>
                                                                <Input {...field} id='MiddleName' placeholder='MiddleName' />
                                                                <FormErrorMessage>{form.errors.MiddleName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}

                                                    </Field>
                                                    <Field name='PressentAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.PressentAddress && form.touched.PressentAddress}>
                                                                <FormLabel htmlFor='PressentAddress'>Pressent Address</FormLabel>
                                                                <Input {...field} id='PressentAddress' placeholder='PressentAddress' />
                                                                <FormErrorMessage>{form.errors.PressentAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TelNoCpNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TelNoCpNo && form.touched.TelNoCpNo}>
                                                                <FormLabel htmlFor='TelNoCpNo'>Tel.No/CP.No</FormLabel>
                                                                <Input {...field} id='TelNoCpNo' placeholder='TelNoCpNo' type="number"/>
                                                                <FormErrorMessage>{form.errors.TelNoCpNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TIN' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TIN && form.touched.TIN}>
                                                                <FormLabel htmlFor='TIN'>TIN Number</FormLabel>
                                                                <Input {...field} id='TIN' placeholder='TIN' type='number'/>
                                                                <FormErrorMessage>{form.errors.TIN}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Nationality' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Nationality && form.touched.Nationality}>
                                                                <FormLabel htmlFor='Nationality'>Nationality</FormLabel>
                                                                <Input {...field} id='Nationality' placeholder='Nationality' />
                                                                <FormErrorMessage>{form.errors.Nationality}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='SEX' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.SEX && form.touched.SEX}>
                                                                <FormLabel htmlFor='SEX'>Sex</FormLabel>
                                                                <Input {...field} id='SEX' placeholder='SEX' />
                                                                <FormErrorMessage>{form.errors.SEX}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Birthdate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Birthdate && form.touched.Birthdate}>
                                                                <FormLabel htmlFor='Birthdate'>Birthday</FormLabel>
                                                                <Input {...field} id='Birthdate' placeholder='Birthdate' />
                                                                <FormErrorMessage>{form.errors.Birthdate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='HEIGHTCM' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.HEIGHTCM && form.touched.HEIGHTCM}>
                                                                <FormLabel htmlFor='HEIGHTCM'>Height(CM)</FormLabel>
                                                                <Input {...field} id='HEIGHTCM' placeholder='HEIGHTCM' type='number'/>
                                                                <FormErrorMessage>{form.errors.HEIGHTCM}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Weight' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Weight && form.touched.Weight}>
                                                                <FormLabel htmlFor='Weight'>Weight(KG)</FormLabel>
                                                                <Input {...field} id='Weight' placeholder='Weight' type='number' />
                                                                <FormErrorMessage>{form.errors.Weight}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='LicenceNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.LicenceNo && form.touched.LicenceNo}>
                                                                <FormLabel htmlFor='LicenceNo'>Licence Number </FormLabel>
                                                                <Input {...field} id='LicenceNo' placeholder='LicenceNo' type='number'/>
                                                                <FormErrorMessage>{form.errors.LicenceNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='CivilStatus' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.CivilStatus && form.touched.CivilStatus}>
                                                                <FormLabel htmlFor='CivilStatus'>Civil Status</FormLabel>
                                                                <Input {...field} id='CivilStatus' placeholder='CivilStatus' />
                                                                <FormErrorMessage>{form.errors.CivilStatus}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>


                                                </Form>
                                            )}
                                        </Formik>
                                    </Stack>

                            </Box>

                        </SimpleGrid>

                    </ModalBody>
                    <Center py={12}>

                    </Center>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}