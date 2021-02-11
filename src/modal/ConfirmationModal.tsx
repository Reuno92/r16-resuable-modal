import React, {PropsWithChildren} from "react";
import {Button, Modal} from "react-bootstrap";

interface ConfirmationModalProps {
    onConfirm: (value: boolean) => void,
    onCancel: () => void,
    message: string
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = (props: PropsWithChildren<ConfirmationModalProps>) => {

    const confirmation = (value: boolean): void =>  {
        console.log("VALUE", value);
        props.onConfirm(value);
        props.onCancel();
    }

    return (
        <React.Fragment>
            <Modal.Body>{props.message}</Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={ () => confirmation(true) }>Confirm</Button>
                <Button variant={"outline-danger"} onClick={ () => confirmation(false) }>Cancel</Button>
                <Button variant={"danger"} onClick={props.onCancel}>Close</Button>
            </Modal.Footer>
        </React.Fragment>
    )
}
