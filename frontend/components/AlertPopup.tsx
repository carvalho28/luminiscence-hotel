import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

interface AlertPopupProps {
  message: string;
  title: string;
  onClose: () => void;
}

export const AlertPopup = (props: AlertPopupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onClose = () => {
    setIsOpen(false);
    props.onClose();
  }

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.message}</ModalBody>
          <ModalFooter>
            <Center>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
