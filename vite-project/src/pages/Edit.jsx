import { Heading, FormControl, FormLabel, Input, SimpleGrid, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams} from 'react-router-dom'

function Edit() {
    const {id} = useParams();
    const users =JSON.parse(localStorage.getItem('users'))
    const user = users[id-1];
    const [data, setData] = useState({
        firstName:user.firstName,
        lastName:user.lastName,
        phone:user.phone,
        email:user.email,
        role:user.role,
        location:user.location,
        department:user.department
    })
    function handleChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        users[id-1] = data;
        localStorage.setItem('users',JSON.stringify(users));
        setData({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        role:'',
        location:'',
        department:''
        })
    }
 return<>
 <Heading as='h5' size='sm'>Update User form</Heading>
 <div style={{border:"2px solid black", padding:"30px"}} >
    <form onSubmit={handleSubmit}>

     <SimpleGrid columns={[1,null,2]} spacing={6}>
           <FormControl isRequired>
             <FormLabel>First name</FormLabel>
             <Input name='firstName' onChange={handleChange} value={data.firstName} placeholder='First name' />
           </FormControl>

           <FormControl isRequired>
             <FormLabel>Last name</FormLabel>
             <Input name='lastName' onChange={handleChange} value={data.lastName} placeholder='First name' />
           </FormControl>

           <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input name='phone' onChange={handleChange} value={data.phone} placeholder='First name' />
           </FormControl>

           <FormControl isRequired>
             <FormLabel>Email id</FormLabel>
             <Input name='email' onChange={handleChange} value={data.email} placeholder='First name' />
           </FormControl>

           <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Input name='role' onChange={handleChange} value={data.role} placeholder='First name' />
           </FormControl>

           <FormControl isRequired>
             <FormLabel>Location</FormLabel>
             <Input name='location' onChange={handleChange} value={data.location} placeholder='First name' />
          </FormControl>

          <FormControl isRequired>
           <FormLabel>Department</FormLabel>
           <Input name='department' onChange={handleChange} value={data.department} placeholder='First name' />
          </FormControl>


      </SimpleGrid>
          <Button type='submit' size='md'  height='48px'  width='200px'  border='2px'  borderColor='green.500'  marginTop="20px"> 
             Update profile
          </Button>
   </form>
 </div>
 </>
}

export default Edit;


