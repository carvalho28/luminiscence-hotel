import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { serverUrl } from "../App";
import { Cliente } from "../Reservation";

interface ModalNewCustomerProps {
  isOpen: boolean;
  onClose: () => void;
  setCliente: (cliente: Cliente) => void;
}

export const ModalNewCustomer = (props: ModalNewCustomerProps) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [nif, setNif] = useState<string>("");
  const [name, setName] = useState<string>("");

  const createNewCustomer = async () => {
    fetch(`${serverUrl}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nif: nif,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== null) {
          props.setCliente(data);
          setName("");
          setNif("");
          props.onClose();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>NIF</FormLabel>
              <Input
                placeholder="NIF"
                value={nif}
                onChange={(e) => setNif(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createNewCustomer}>
              Save
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
