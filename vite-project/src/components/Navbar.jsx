import {Flex} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
function Navbar(){
    return<>
      <Flex justify='space-evenly' bg='red'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/users'>Users</Link>
      </Flex>
    </>
}

export default Navbar;