import React, {useState} from 'react';
import './App.scss';
import {useModal} from "./hooks/useModal";
import {Badge, Button, Modal} from "react-bootstrap";
import {ModalUI} from "./components/modal.UI";
import {Depth} from "./components/Depth";


function App() {

    const {isShown, toggle} = useModal();
    const content = (
        <React.Fragment>
            <Modal.Body>
                <p>Modal Content</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={toggle}>Close</Button>
            </Modal.Footer>
        </React.Fragment>
    );

    const [confirm, setConfirm] = useState<boolean>(false);

    return (
        <div className="container mt-5">
            <p>Confirmed: { confirm ? ( <Badge variant={"success"}>True</Badge> ) : ( <Badge variant={"danger"}>False</Badge>) }</p>
            <Button variant={"outline-success"} onClick={toggle}>Open Modal</Button>
            <ModalUI isShown={isShown} hide={toggle} modalContent={content} headerText={"Main Modal"}/>
            <Depth confirmation={(value: boolean): void => setConfirm(value)} />
        </div>
    );
}

export default App;
