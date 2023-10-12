import {
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalContent
} from '@chakra-ui/react';
import './ReservationModal.css';

export default function ReservationModal(props) {
    const { isOpen, onClose, response } = props;
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Success!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {response}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue'
                                mr={3}
                                onClick={onClose}
                                className='ReservationModal_Button'
                        >
                            Ok
                        </Button>
                    </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
};