// import {Box,SimpleGrid,Center} from '@chakra-ui/react'
// import {Link} from 'react-router-dom'
// function Users(){
//     let users=JSON.parse(localStorage.getItem('users'));
//     return <SimpleGrid columns={[1,2,3]} spacing={20} padding={10}>
//      {users.map((ele,ind)=>(<Box key={ele.email} border='2px solid black' >
//               <Center>{ele.firstName}</Center>
//               <Center bg='red'>
//                 <Link to={`/users/${ind+1}`} > Edit Profile</Link>
//               </Center>
//         </Box>))
//     } </SimpleGrid>
// }

// export default Users;

import { Box, Text, SimpleGrid, Input, VStack, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = users.filter(user => user.email.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filtered.map(user => ({ email: user.email, fullName: `${user.firstName} ${user.lastName}` })));
      setFilteredUsers(filtered);
    } else {
      setSuggestions([]);
      setFilteredUsers(users);
    }
  };

  const handleSuggestionClick = (email) => {
    setSearchQuery(email);
    const filtered = users.filter(user => user.email === email);
    setFilteredUsers(filtered);
    setSuggestions([]);
  };

  return (
    <VStack align="start" spacing={4}>
      <Box width="100%">
        <Input
          placeholder="Search for email"
          value={searchQuery}
          onChange={handleSearchChange}
          autoComplete="off"
        />
        {suggestions.length > 0 && (
          <List spacing={2} mt={2}>
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion.email)}
                cursor="pointer"
                bg="gray.100"
                p={2}
                borderRadius="md"
              >
                {suggestion.fullName} - {suggestion.email}
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} width="100%">
        {filteredUsers.map((ele, ind) => (
          <Box textAlign="center" key={ele.email} border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
            <Text fontWeight="bold">{ele.firstName} {ele.lastName}</Text>
            <Text>{ele.phone}</Text>
            <Text>{ele.role}</Text>
            <Text>{ele.location}</Text>
            <Text>{ele.department}</Text>
            <Text bg="red.500" w="full" textAlign="center" borderRadius="md">
  <Link to={`/users/${ind+1}`} color="white" _hover={{ textDecoration: 'none', bg: 'red.700' }} p={2}>
    Edit Profile
  </Link>
</Text>

          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default Users;


