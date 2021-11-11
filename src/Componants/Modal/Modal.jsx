
import { React, useRef, useContext } from "react"
import Context from "../../Context/Context"
//react dom contains the create portal method
import ReactDOM from "react-dom"

import { Background, ModalCloseIcon, ModalContent, ModalHeadline, ModalImg, ModalText, ModalWrapper, ID } from "../StyledComponants/StyledComponants";
import { CommentsDollar } from "@styled-icons/fa-solid";

export const Modal = ({ picture, date, name, Id, filteredInfo }) => {


    const context = useContext(Context)
    const { showModal, setShowModal, detailedInfo } = context


    /* Modal has to be used with the Open Modal function plus the componant itself */
    //const { location, id } = info
    console.log(filteredInfo)/* If i try to destucture this I just get undefined */
    console.log(name)/* In console this is correct but on the render..it refers back to the last user in the array */
    // const { location } = info
    //console.log(location.city)



    /* The  Problem */

    //  after addition of context the app has gone sour. infomaation in Profile grid is correct image, status and name are correct. somehow between profile grid and Modal something is wrong... the information in the modal refers back to the last user in the array... despite the fact that ion console this works fine( console shows information for every user.... not just the last)

    //  The only time all of the information matches is when you search and there's only one hit (try "pollyrichards") ... 

    //if feels as if the modal is being rendered 30 times and the last card just happens to be the last user in the array

    //regardless if I attempt to map an array using.filter in the filtered info funbction or try to use .find and pass an object through as a prop and deconstruct it.... the render retuirns the wrong info





    /* 
        if (Id === id) {
            console.log("yes")
        } else {
            console.log("no")
        } */






    const modalRef = useRef()
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    /* Decided to create a Bio for each profile, following switch case translates sexual orientation entry to a lowercase string and supplies a counterpart */


    let position = ""
    let counterpart = ""
    /* switch (sexual.anal_position) {
        case "TOP_ONLY":
            position = "a top"
            counterpart = "bottoms"
            break;
        case "NOENTRY":
            position = "a guy"
            counterpart = "friends"
            break;

        case "VERSATILE":
            position = "a vers"
            counterpart = "tops and btms"
            break;

        case "MORE_BOTTOM":
            position = "more btm"
            counterpart = "vers guys"
            break;
        case "MORE_TOP":
            position = "more top"
            counterpart = "vers guys"
            break;

        default:
            position = "a btm"
            counterpart = "tops"
            break;
    } */

    return ReactDOM.createPortal(
        <>

            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalImg src={picture} />
                        <ModalContent>
                            <ModalHeadline>
                                {name}

                            </ModalHeadline>

                            <ModalText>
                                Hi there I'm "name" ! I'm  Years old and living in
                                which is  km away I'm looking for .
                            </ModalText>


                            <ModalText style={{ textAlign: "center" }}>Last active date: {date}</ModalText>
                            <ID></ID>
                        </ModalContent>

                        <ModalCloseIcon aria-label="CloseModal" onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>) : (null)}

        </>, document.getElementById("modal")
    )
}

