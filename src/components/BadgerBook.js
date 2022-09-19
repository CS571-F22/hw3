
import Card from 'react-bootstrap/Card';
import Modal from 'react-modal';

import { useState } from 'react';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function BadgerBook(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('body');

    return (
        <div>
            <Card className="badger-book clickable" onClick={() => openModal()}>
                <Card.Img alt="Book Cover" variant="top" src="https://loremflickr.com/150/200/abstract" className="badger-book-image"></Card.Img>
                <Card.Body>
                    <Card.Text>{props.name} {"($" + props.price.toFixed(2) + ")"}</Card.Text>
                    <Card.Text>by {props.author.firstName} {props.author.lastName}</Card.Text>
                </Card.Body>
            </Card>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => closeModal()}
                contentLabel="Book Modal"
                style={customStyles}
            >
                <img alt="Book Cover" src="https://loremflickr.com/150/200/abstract"></img>
                <p>{props.name}</p>
            </Modal>
        </div>

    );
}

export default BadgerBook;