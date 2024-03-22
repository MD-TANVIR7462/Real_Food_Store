import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const PhoneNavBar = () => {
  const menuItems = ["Profile", "Dashboard", "Log Out"];
  return (
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2
                ? "primary"
                : index === menuItems.length - 1
                ? "danger"
                : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default PhoneNavBar;
