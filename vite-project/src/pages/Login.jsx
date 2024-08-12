import { Heading, FormControl, FormLabel, Input, SimpleGrid, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';

function Login() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    location: '',
    department: ''
  });

  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.length > 0) {
      const email = data.email;
      const emailExists = users.some((ele) => ele.email === email);

      if (emailExists) {
        setError("Email already exists");
        return;
      }
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));

    setData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: '',
      location: '',
      department: ''
    });

    setError(''); 
  }

  return (
    <>
      <Heading as='h5' size='sm'>Add User Form</Heading>
      <div style={{ border: "2px solid black", padding: "30px" }}>
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={[1, null, 2]} spacing={6}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input name='firstName' onChange={handleChange} value={data.firstName} placeholder='First name' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input name='lastName' onChange={handleChange} value={data.lastName} placeholder='Last name' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input name='phone' onChange={handleChange} value={data.phone} placeholder='Phone' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email id</FormLabel>
              <Input name='email' onChange={handleChange} value={data.email} placeholder='Email' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Role</FormLabel>
              <Input name='role' onChange={handleChange} value={data.role} placeholder='Role' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input name='location' onChange={handleChange} value={data.location} placeholder='Location' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Department</FormLabel>
              <Input name='department' onChange={handleChange} value={data.department} placeholder='Department' />
            </FormControl>
          </SimpleGrid>

          {error && <Alert status='error'> <AlertIcon /> {error} </Alert>}

          <Button type='submit' size='md' height='48px' width='200px' border='2px' borderColor='green.500' marginTop="20px">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;

