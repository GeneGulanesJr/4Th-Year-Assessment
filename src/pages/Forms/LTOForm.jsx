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
                                                    <Field name='Birthplace' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Birthplace && form.touched.Birthplace}>
                                                                <FormLabel htmlFor='Birthplace'>Birth Place</FormLabel>
                                                                <Input {...field} id='Birthplace' placeholder='Birthplace' />
                                                                <FormErrorMessage>{form.errors.Birthplace}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='FathersName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.FathersName && form.touched.FathersName}>
                                                                <FormLabel htmlFor='FathersName'>Fathers Name</FormLabel>
                                                                <Input {...field} id='FathersName' placeholder='FathersName' />
                                                                <FormErrorMessage>{form.errors.FathersName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='MothersName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.MothersName && form.touched.MothersName}>
                                                                <FormLabel htmlFor='MothersName'>Mothers Name</FormLabel>
                                                                <Input {...field} id='MothersName' placeholder='MothersName' />
                                                                <FormErrorMessage>{form.errors.MothersName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='SpouseName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.SpouseName && form.touched.SpouseName}>
                                                                <FormLabel htmlFor='SpouseName'>Spouse Name</FormLabel>
                                                                <Input {...field} id='SpouseName' placeholder='SpouseName' />
                                                                <FormErrorMessage>{form.errors.SpouseName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmployersBusinessName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmployersBusinessName && form.touched.EmployersBusinessName}>
                                                                <FormLabel htmlFor='EmployersBusinessName'>Pressent Address</FormLabel>
                                                                <Input {...field} id='EmployersBusinessName' placeholder='EmployersBusinessName' />
                                                                <FormErrorMessage>{form.errors.EmployersBusinessName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='TelNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TelNo && form.touched.TelNo}>
                                                                <FormLabel htmlFor='TelNo'>Tel No.</FormLabel>
                                                                <Input {...field} id='TelNo' placeholder='TelNo' type='number'/>
                                                                <FormErrorMessage>{form.errors.TelNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmployersBusinessAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmployersBusinessAddress && form.touched.EmployersBusinessAddress}>
                                                                <FormLabel htmlFor='EmployersBusinessAddress'>Employers Business Address</FormLabel>
                                                                <Input {...field} id='EmployersBusinessAddress' placeholder='EmployersBusinessAddress' />
                                                                <FormErrorMessage>{form.errors.EmployersBusinessAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmergencyContactPerson' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactPerson && form.touched.EmergencyContactPerson}>
                                                                <FormLabel htmlFor='EmergencyContactPerson'>Emergency Contact Person</FormLabel>
                                                                <Input {...field} id='EmergencyContactPerson' placeholder='EmergencyContactPerson' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactPerson}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>


                                                    <Field name='EmergencyContactAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactAddress && form.touched.EmergencyContactAddress}>
                                                                <FormLabel htmlFor='EmergencyContactAddress'>Emergency Contact Address</FormLabel>
                                                                <Input {...field} id='EmergencyContactAddress' placeholder='EmergencyContactAddress' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='EmergencyContactNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactNo && form.touched.EmergencyContactNo}>
                                                                <FormLabel htmlFor='EmergencyContactNo'>Emergency Contact No</FormLabel>
                                                                <Input {...field} id='EmergencyContactNo' placeholder='EmergencyContactNo' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='AgencyCode' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.AgencyCode && form.touched.AgencyCode}>
                                                                <FormLabel htmlFor='AgencyCode'>Agency Code</FormLabel>
                                                                <Input {...field} id='AgencyCode' placeholder='AgencyCode' />
                                                                <FormErrorMessage>{form.errors.AgencyCode}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='IssueDate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.IssueDate && form.touched.IssueDate}>
                                                                <FormLabel htmlFor='IssueDate'>Issue Date</FormLabel>
                                                                <Input {...field} id='IssueDate' placeholder='IssueDate' />
                                                                <FormErrorMessage>{form.errors.IssueDate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='ExpiryDate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.ExpiryDate && form.touched.ExpiryDate}>
                                                                <FormLabel htmlFor='ExpiryDate'>Expiry Date</FormLabel>
                                                                <Input {...field} id='ExpiryDate' placeholder='ExpiryDate' />
                                                                <FormErrorMessage>{form.errors.ExpiryDate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='LicenceClassification' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.LicenceClassification && form.touched.LicenceClassification}>
                                                                <FormLabel htmlFor='LicenceClassification'>Licence Classification</FormLabel>
                                                                <Input {...field} id='LicenceClassification' placeholder='LicenceClassification' />
                                                                <FormErrorMessage>{form.errors.LicenceClassification}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='DrivingSkill' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.DrivingSkill && form.touched.DrivingSkill}>
                                                                <FormLabel htmlFor='DrivingSkill'>Driving Skill</FormLabel>
                                                                <Input {...field} id='DrivingSkill' placeholder='DrivingSkill' />
                                                                <FormErrorMessage>{form.errors.DrivingSkill}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>


                                                    <Field name='HighestEducationAttainment' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.HighestEducationAttainment && form.touched.HighestEducationAttainment}>
                                                                <FormLabel htmlFor='HighestEducationAttainment'>Highest Educational Attainment</FormLabel>
                                                                <Input {...field} id='HighestEducationAttainment' placeholder='HighestEducationAttainment' />
                                                                <FormErrorMessage>{form.errors.HighestEducationAttainment}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='BloodType' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.BloodType && form.touched.BloodType}>
                                                                <FormLabel htmlFor='BloodType'>Blood Type</FormLabel>
                                                                <Input {...field} id='BloodType' placeholder='BloodType' />
                                                                <FormErrorMessage>{form.errors.BloodType}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='OrganDonor' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.OrganDonor && form.touched.OrganDonor}>
                                                                <FormLabel htmlFor='OrganDonor'>Organ Donor</FormLabel>
                                                                <Input {...field} id='OrganDonor' placeholder='OrganDonor' />
                                                                <FormErrorMessage>{form.errors.OrganDonor}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EyesColor' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EyesColor && form.touched.EyesColor}>
                                                                <FormLabel htmlFor='EyesColor'>Eyes Color</FormLabel>
                                                                <Input {...field} id='EyesColor' placeholder='EyesColor' />
                                                                <FormErrorMessage>{form.errors.EyesColor}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TypeofApplication' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TypeofApplication && form.touched.TypeofApplication}>
                                                                <FormLabel htmlFor='TypeofApplication'>Type of Application</FormLabel>
                                                                <Input {...field} id='TypeofApplication' placeholder='TypeofApplication' />
                                                                <FormErrorMessage>{form.errors.TypeofApplication}</FormErrorMessage>
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