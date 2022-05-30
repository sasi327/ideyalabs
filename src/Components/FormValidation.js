import React, { useState } from 'react'
import { Box, Container, Paper, Stack, Typography, TextField, MenuItem, Grid, FormControl, FormLabel, RadioGroup, FormHelperText, Button } from '@mui/material'

function FormValidation() {

     const regex = "/\d\/"
    const [verify, setVerify] = useState([])
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Zipcode, setZipcode] = useState('')
    const [Country, setCountry] = useState('')
    const [Date,setDate]=useState('')
    const [security,setSecurity]=useState('')
    const status = []
    const handleClick = () => {
        const validAddress1 = Address1;
        const validAddress2 = Address2;
        const validCity = City;
        const validState = State;
        const validZipcode = Zipcode;
        const validCountry = Country;
        const validDate=Date;
        const validSecurity=security
        //Address 1 validation
        const address1Element = document.getElementById('adress1Error')

        if (validAddress1 == '') {
            address1Element.innerText = 'Please Enter Address 1'
        } else {
            address1Element.innerText = ''
        }

        //address 2 validation
        const address2Element = document.getElementById('adress2Error')
        if (validAddress2 == '') {
            address2Element.innerText = 'Please Enter Address 2'
        } else {

            address2Element.innerText = ''
        }
        //validCity  validation
        const validCityElement = document.getElementById('CityError')
        if (validCity == '') {
            validCityElement.innerText = 'Please validCity'
        } else {
            validCityElement.innerText = ''
        }
        //state validation
        const validStateElement = document.getElementById('StateError')
        if (validState == '') {
            validStateElement.innerText = 'Please select the city'
        } else {
            validStateElement.innerText = ''
        }
        //zipcode validation
        const zipcodeElement = document.getElementById('zipcodeError')
        if (validZipcode == '') {
            zipcodeElement.innerText = 'Please Enter Address 2'
        } else {
            zipcodeElement.innerText = ''
        }
        //country validation
        const countryElement = document.getElementById('countryError')
        if (validCountry == '') {
            countryElement.innerText = 'Please Enter country'
        } else {
            countryElement.innerText = ''
        }
        // Date of Birth Validation
        const DateOfBirthElement = document.getElementById('dateError')
        if (validCountry == '') {
            DateOfBirthElement.innerText = 'Please Enter Date of Birth'
        } else {
            DateOfBirthElement.innerText = ''
        }

         // Security Code Validation
         const SecurityCodeElement = document.getElementById('securityError')
         if (validCountry == '') {
            SecurityCodeElement.innerText = 'Please Enter valid security code'
         } 
         else if(validCountry.test(regex)) {
            SecurityCodeElement.innerText = 'Please Enter only numerical '
         }else {
            SecurityCodeElement.innerText = ''
         }

    }
    return (
        <>
            <Container>
                <Box>
                    <Paper>
                        <Typography variant="h4" sx={{ color: 'cyan' }}>Verify Your Identity</Typography>
                        <Typography variant="subtitle1" color="initial" component={"div"} >
                            Please Enter Your valid Mailing Address of Your Personal Details For Identity VErification Please Donot Use A Po Box
                        </Typography>
                        <Typography component={'div'} sx={{ marginTop: '50px' }} >
                            <Container maxWidth="lg">
                                <Stack spacing={3} direction='row'>
                                    <TextField fullWidth
                                        value={Address1}
                                        label=" Mailing Address Line 1"
                                        onChange={(event) => setAddress1(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' component={'div'} id="adress1Error" sx={{ color: 'red' }} ></Typography>
                                    <TextField fullWidth
                                        value={Address2}
                                        label=" Mailing Address Line 2"
                                        onChange={(event) => setAddress2(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="adress2Error" sx={{ color: 'red' }} ></Typography>
                                </Stack>
                            </Container>
                        </Typography>
                        <Typography component={'div'} sx={{ marginTop: '50px' }} >
                            <Container maxWidth="lg">
                                <Stack spacing={3} direction='row'>
                                    <TextField fullWidth
                                        id=""
                                        label="City"
                                        value={City}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="CityError" sx={{ color: 'red' }} ></Typography>

                                    <TextField fullWidth
                                        id=""
                                        value={State}
                                        label="State"
                                        onChange={(event) => setState(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="StateError" sx={{ color: 'red' }} ></Typography>

                                    <TextField fullWidth
                                        id=""
                                        label="Zip Code"
                                        value={Zipcode}
                                        onChange={(event) => setZipcode(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="zipcodeError" sx={{ color: 'red' }} ></Typography>

                                    <TextField fullWidth
                                        id=""
                                        label="Country"
                                        value={Country}
                                        onChange={(event) => setCountry(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="countryError" sx={{ color: 'red' }} ></Typography>

                                </Stack>
                            </Container>
                        </Typography>
                        <Typography component={"div"}>
                            <Stack spacing={2} direction='row'>
                                <TextField 
                                    id=""
                                    label="Date Of Birth"
                                    value={Date}
                                    onChange={(event) => setDate(event.target.value)}
                                />
                                    <Typography variant='subtitle2' id="dateError" sx={{ color: 'red' }} ></Typography>

                                <TextField
                                    id=""
                                    label="Social Security Last 4"
                                    value={security}
                                    onChange={(event) => setSecurity(event.target.value)}
                                />
                                <Typography variant='subtitle2' id="securityError" sx={{ color: 'red' }} ></Typography>
                                <Typography sx={{ marginLeft: '50px' }}>
                                    Select An identification To Upload
                                    <Typography component={'div'}>
                                        {/* <Stack spacing={4} direction='row'> */}
                                        <input type={'radio'}  />Driving Licience
                                        <input type={'radio'} />State Issued Id
                                        <input type={'radio'} />Passport
                                        {/* </Stack> */}
                                    </Typography>
                                </Typography>
                            </Stack>

                        </Typography>
                    </Paper>
                    <Button onClick={() => { handleClick() }} >Upload Driving Licience</Button>
                </Box>
            </Container>

        </>
    )
}

export default FormValidation