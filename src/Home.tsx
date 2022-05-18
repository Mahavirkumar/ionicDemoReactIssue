import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CallDialogComp from "./CallDialogComp";

import { IonButton, IonIcon, IonContent, IonItem } from '@ionic/react';

const Home: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);


    function openCallDialog() {
        setShowAlert(true);
    }

    return (
        <>
            <IonItem>
                <IonButton onClick={() => openCallDialog()} className="call-btn" slot="end">
                    <IonIcon slot="start" color="white"></IonIcon> Call
                </IonButton>
            </IonItem>
            {showAlert ? <CallDialogComp showAlert={showAlert} isOtherSelected={isOtherSelected}
                setShowAlert={setShowAlert} setIsOtherSelected={setIsOtherSelected}
            /> : null}
        </>
    );
}

export default Home;
