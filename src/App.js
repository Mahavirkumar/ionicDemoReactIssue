
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPopover, IonRadio, IonRadioGroup, IonTextarea, IonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./callDialogComp.css";



const App = ({ }) => {
  // const [showAlert, setShowAlert] = useState(false);
  const [otherNumber, setOtherNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  function dismissDialog() {
    setShowAlert(false);
    // setIsOtherSelected(false);

  }

  const onchange = () => {

  }
  function selectedIsOther() {
    console.log(otherNumber);
    // setIsOtherSelected(true);
  }
  function notSelectedIsOther() {
    // setIsOtherSelected(false);
    setOtherNumber("");
  }


  const onLongPress = (event) => {
    console.log("long pressed");


  };
  const defaultOptions = {
    isPreventDefault: true,
    delay: 200
  };
  //   const longPressEvent = useLongPress(onLongPress, defaultOptions);
  function openCallDialog() {
    if(showAlert)
     setShowAlert(false);
     else
     setShowAlert(true);
  }
  return (
    <div>
      
        <IonButton  className="btnPopover" onClick={() => openCallDialog()}  slot="end">
          <IonIcon slot="start" color="white"></IonIcon> Open Popover
        </IonButton>
       
        <IonPopover
        showBackdrop={false}
        isOpen={showAlert}
        // animated={true}
        onDidDismiss={() => setShowAlert(false)}
      >
        <h4 className="dialogHeader">Select C2C Contact</h4>


        {<IonItem className="othersNumberContainer">
          <IonContent>
            <div className="ionContentDiv">
              <IonLabel position="floating" className="textOther">Enter 10 digit no.</IonLabel>
              <IonInput className="otherNumberInput" onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                  // event.stopPropagation();
                  // return false
                }

                // <button {...longPressEvent}>long press me</button>;

              }} inputmode={"tel"} maxlength={11} onIonChange={e => setOtherNumber(e.detail.value)}
              ></IonInput>
            </div>
          </IonContent>


          {/* <IonLabel position="floating" className="textOther">Enter 10 digit no.</IonLabel>
          <IonInput className="otherNumberInput" onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
              // event.stopPropagation();
              // return false
            }

            // <button {...longPressEvent}>long press me</button>;

          }} inputmode={"tel"} maxlength={11} onIonChange={e => setOtherNumber(e.detail.value)}
          ></IonInput> */}
        </IonItem>}

        <IonItem className="dialogBtnContainer1" lines="none">
          <IonLabel className="caneclLabel" color="danger" onClick={() => dismissDialog()} > Cancel </IonLabel>
          <span className="labelSpan"></span>
          <IonLabel className="okLabel" color="danger" >Ok</IonLabel>
        </IonItem>

      </IonPopover > 

    </div >
  );
}

export default App;