import React, {PropsWithChildren} from 'react';
import {useModal} from "../hooks/useModal";
import {ModalUI} from "./modal.UI";
import {Button} from "react-bootstrap";
import {ConfirmationModal} from "../modal/ConfirmationModal";

interface DepthProps {
    confirmation: (value: boolean) => void;
}

export const Depth: React.FC<DepthProps> = (props: PropsWithChildren<DepthProps>): JSX.Element => {

    const {isShown, toggle} = useModal();

    const content = (
        <React.Fragment>
            <ConfirmationModal onConfirm={(value: boolean) => props.confirmation(value)}
                               onCancel={toggle}
                               message={"Are you sure?"}/>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Button onClick={toggle}>Secondary Modal</Button>
            <ModalUI isShown={isShown} hide={toggle} modalContent={content} headerText={"Secondary Modal"}/>
        </React.Fragment>
    )
}
