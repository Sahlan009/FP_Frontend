import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import ProfileModal from "../miscellaneous/ProfileModal";
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
import { getSender } from "../../config/ChatLogics";
import { ChatState } from "../../Context/ChatProvider";
import { Image } from '@chakra-ui/react'
import Logo from "../../assets/logo.svg"
import "./style.css"

function Navbar() {

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
  } = ChatState();

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const BackHandler = () => {
    history.push("/chats");
  };

  return (
    <div className="navbar">
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#FFE162"
        w="100%"
        p="5px 10px 5px 10px"
        borderRadius="15px"
      >
        <Tooltip bg="orange" label="Back to Chat Page" hasArrow placement="bottom-end">
          <Button  bg="orange" variant="ghost" onClick={BackHandler}>Back
          </Button>
        </Tooltip>
        <Text  d="flex" alignItems="center" justifyContent="center" fontSize="2xl" fontFamily="Work sans">
        <Image h="3rem" src={Logo} alt="logo" />
          Chat App
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              {/* <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              /> */}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="orange" colorScheme="pink" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={BackHandler}>Chats</MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </div>
  );
}

export default Navbar;
