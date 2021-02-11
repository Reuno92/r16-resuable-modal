import {Button, Modal} from "react-bootstrap";
import React, {PropsWithChildren} from "react";
import ReactDOM from 'react-dom';

export interface ModalProps {
    isShown: boolean,
    hide: () => void,
    modalContent: JSX.Element,
    headerText: string
}

export const ModalUI: React.FC<ModalProps> = (props: PropsWithChildren<ModalProps>) => {

    let { isShown, hide, modalContent, headerText } = props;

    const MODAL: JSX.Element = (
        <Modal show={isShown} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>{headerText}</Modal.Title>
            </Modal.Header>
                { modalContent }
        </Modal>
    );

    return isShown ? ReactDOM.createPortal(MODAL, document.body): null
}
