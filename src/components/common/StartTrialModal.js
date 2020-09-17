import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const StartTrialModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button className="button-style banner_btn" onClick={toggle}>Start Free Trial</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Sign Up For Your Free Trial</ModalHeader>
                <ModalBody>
                    <iframe src="https://engage.vantagecircle.com/l/847903/2020-08-11/3f74c" width="100%" height="500" type="text/html" frameBorder="0" allowtransparency="true" style={{border: "0"}}></iframe>
                    <p className="smallfont text-center">
                        We safeguard your personal information in accordance with our <a href="https://api.vantagecircle.com/vantagefit/api/v1/tnc/355?isPrivacy=true" className="companycolor">Privacy Policy</a>
                    </p>

                </ModalBody>     
            </Modal>
        </>
    );
}

export default StartTrialModal;