import Navbar from "../Navbar/Navbar";
import Box from "../Box/Box";

const Header = (props: any) => {
  return (
    <Box id="header" className="h-12 my-8 flex items-center fixed z-10 w-full">
      <Navbar />
    </Box>
  );
};

export default Header;
