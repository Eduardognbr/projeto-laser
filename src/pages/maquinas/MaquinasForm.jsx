import React from 'react';
import { Card } from 'react-bootstrap';

const MaquinasForm = () => {
    return (
        <>
            <Card border="danger">
                <Card.Header className="bg-danger text-white">Header</Card.Header>
                <Card.Body>
                    <Card.Title>Danger Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>           
        </>
    )
}

export default MaquinasForm
