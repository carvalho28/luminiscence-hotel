import { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {
  RiHotelBedLine,
  RiHome4Line,
  RiBarChartFill,
  RiSettings2Line,
  RiFileListLine,
  RiUser2Line,
} from "react-icons/ri";
import { IconType } from "react-icons";
import { Logo } from "./Logo";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: RiHome4Line, href: "/dashboard" },
  { name: "Make Reservation", icon: RiHotelBedLine, href: "/make-reservation" },
  { name: "Bookings", icon: RiFileListLine, href: "/bookings" },
  { name: "Users", icon: RiUser2Line, href: "/users" },
  { name: "Rooms", icon: RiSettings2Line, href: "/rooms" },
  { name: "Statistics", icon: RiBarChartFill, href: "/statistics" },
];

export default function SimpleSidebar({
  children,
  selected,
}: {
  children: ReactNode;
  selected?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        selected={selected}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  selected?: string;
}

const SidebarContent = ({ onClose, selected, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="2px"
      borderRightColor={useColorModeValue("gray.300", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      paddingTop="10"
      {...rest}
    >
      <Flex h="150" alignItems="center" mx="8" justifyContent="center">
        <Flex
          direction="column"
          alignItems="center"
          h="100%"
          justifyContent="center"
          p="0"
          flex="1"
        >
          <Logo h="200" />
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex paddingTop="8"></Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          bg={link.name === selected ? "blue.100" : ""}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
}

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Logo h="50" marginLeft="4" />
    </Flex>
  );
};

interface LayoutProps {
  children: ReactNode;
  selected?: string;
}

export const Layout = ({ children, selected }: LayoutProps) => {
  return <SimpleSidebar selected={selected}>{children}</SimpleSidebar>;
};
