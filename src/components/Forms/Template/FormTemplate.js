import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const FormTemplate = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Testing Heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTestReadonly">
                        <Form.Label>READONLY</Form.Label>
                        <Form.Control plaintext readOnly defaultValue={"test default readonly"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestInput1">
                        <Form.Label>TEXT</Form.Label>
                        <Form.Control type="text" placeholder="Test Placeholder 1" />
                        <Form.Text className="text-muted">
                            Test Form Text
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forTestCheckbox">
                        <Form.Check type="checkbox" label="CHECKBOX" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

FormTemplate.propTypes = {

}