
import { React, useRef } from "react"

import { Background, ModalCloseIcon, ModalContent, ModalHeadline, ModalImg, ModalText, ModalWrapper, ID } from "../StyledComponants/StyledComponants";

export const Modal = ({ showModal, setShowModal, info, picture, date, name }) => {

    const { headline, personal, sexual, location, id } = info

    const modalRef = useRef()
    console.log(info)

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    /* DEcided to create a Bio for each profile, following switch case translates sexual orientation entry to a lowercase string and supplies a counterpart */
    let position = ""
    let counterpart = ""
    switch (sexual.anal_position) {
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
    }

    return (
        <>

            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalImg src={picture} />
                        <ModalContent>
                            <ModalHeadline>
                                "{headline}" (Cher) {/* Because Cher would say this...right? */}
                            </ModalHeadline>

                            <ModalText>
                                Hi there I'm {name}! I'm {personal.age} Years old and living in {location.city} which is {location.distance} km away I'm {position} looking for  {counterpart}.
                            </ModalText>

                            {/* I'm not a fan of inline styles but this is an exception */}
                            <ModalText style={{ textAlign: "center" }}>Last active {date}</ModalText>
                            <ID>id:{id}</ID>
                        </ModalContent>

                        <ModalCloseIcon aria-label="CloseModal" onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>) : (null)}

        </>
    )
}

