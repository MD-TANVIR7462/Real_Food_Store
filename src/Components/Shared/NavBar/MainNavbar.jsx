/* eslint-disable react/prop-types */
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarMenuToggle,
   Input,
 } from "@nextui-org/react";
 import { Search } from "lucide-react";
 import { useState } from "react";
 import PhoneNavBar from "./PhoneNavBar";



 

 const MainNavbar = ({setText}) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
 
   const handleSearch = (e) => {
    setText(e.target.value)
   };
  
   
   return (
     <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
       <NavbarContent>
         <NavbarMenuToggle
           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
           className="sm:hidden"
         />
         <NavbarBrand>
           <p className="font-bold text-3xl text-inherit hidden sm:block">
             Real Food Store
           </p>
         </NavbarBrand>
       </NavbarContent>
 
       <NavbarContent
         className="hidden sm:flex gap-4 "
         justify="center"
       ></NavbarContent>
 
       <NavbarContent as="div" className="items-center" justify="end">
         <Input
           classNames={{
             base: "max-w-full sm:max-w-[10rem] sm:h-10 h-6",
             mainWrapper: "h-full",
             input: "text-small",
             inputWrapper:
               "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
           }}
           placeholder="Type to search..."
           size="sm"
           startContent={<Search />}
           type="search"
           
           onChange={handleSearch}
         />
       </NavbarContent>
       <PhoneNavBar />
     </Navbar>
   );
 };
 
 export default MainNavbar;
 