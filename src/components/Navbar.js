import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Navbar = () => {
  return (
    <BottomNavigation showLabels>
      <Link to="/">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/recipe">
        <BottomNavigationAction label="Recipe" icon={<ReceiptIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default Navbar;
