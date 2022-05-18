
import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPopover, IonRadio, IonRadioGroup, IonTextarea, IonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./callDialogComp.css";
interface callDialog {
  showAlert: boolean,
  setShowAlert: any,
  isOtherSelected: boolean,
  setIsOtherSelected: any,
//   selected: string,
//   setSelected: any,
//   toastMessage: string,
//   setToastMessage: any,
//   showToast1: boolean
//   setShowToast1: any,
//   clientContactListState: any,
//   glid: string,
}
 

const CallDialogComp: React.FC<callDialog> = ({ showAlert, isOtherSelected, setShowAlert, setIsOtherSelected,}) => {
  // const [showAlert, setShowAlert] = useState(false);
  const [otherNumber, setOtherNumber] = useState<string>("");

//   function doCallingNative() {
//     if (selected === "othr") {
//       if (mobileNoValidation()) {
//         // window.open('tel:' + otherNumber);
//         // <IonButton onClick={()=>{
      
//       }
//       else
//         return;
//     }

//     else if () {
 
  
//     }

//     else {
     
//     }
//   }



  function dismissDialog() {
    setShowAlert(false);
    setIsOtherSelected(false);
 
  }

  const onchange = (val: string) => {
    console.log(val)
 
    { val === "othr" ? selectedIsOther() : notSelectedIsOther() }
  }
  function selectedIsOther() {
    console.log(otherNumber);
    setIsOtherSelected(true);
  }
  function notSelectedIsOther() {
    setIsOtherSelected(false);
    setOtherNumber("");
  }
  function mobileNoValidation(): boolean {
    if (otherNumber.length >= 10) {
      if (otherNumber.length == 11 && otherNumber.charAt(0) != '0') {
 
        return false;
      }
      else if (otherNumber.length == 10 && otherNumber.charAt(0) == '0') {
        
    
        return false;
      }
    } else {
      console.log("please enter 10 dig no before toast");
      // <ToastUtils msg={"Please enter 10 digit mobile no."} duration={5000} />
   
      
      console.log("please enter 10 dig no after toast");
      return false;
    }
    return true;
  }

  const onLongPress = (event ) => {
    console.log("long pressed");
     

  };
  const defaultOptions = {
    isPreventDefault: true,
    delay: 200
  };
//   const longPressEvent = useLongPress(onLongPress, defaultOptions);

  return (
    <div>
      <IonPopover 
        showBackdrop={false}
        isOpen={showAlert}
        // animated={true}
        onDidDismiss={() => setShowAlert(false)}
      >
        <h4 className="dialogHeader">Select C2C Contact</h4>


        {isOtherSelected ? <IonItem className="othersNumberContainer">
          <IonContent>
            <div className="ionContentDiv">
              <IonLabel position="floating" className="textOther">Enter 10 digit no.</IonLabel>
              <IonInput className="otherNumberInput"  onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                  // event.stopPropagation();
                  // return false
                }

                // <button {...longPressEvent}>long press me</button>;

              }}  inputmode={"tel"} maxlength={11} onIonChange={e => setOtherNumber(e.detail.value)}
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
        </IonItem> : null}

        <IonItem className="dialogBtnContainer1" lines="none">
          <IonLabel className="caneclLabel" color="danger" onClick={() => dismissDialog()} > Cancel </IonLabel>
          <span className="labelSpan"></span>
          <IonLabel className="okLabel" color="danger" onClick={() => doCallingNative()}>Ok</IonLabel>
        </IonItem>

      </IonPopover >

    </div >
  );
}

export default CallDialogComp;