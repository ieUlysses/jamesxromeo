import { React, useEffect, useState } from "react"

import axios from "axios";

//styled componants import
import { DateStatus, OfflineStatus, OnlineStatus, CardImg, CardBody, StyledHeader, CardBtm } from "../StyledComponants/StyledComponants";

import { Modal } from "../Modal/Modal";
import moment from "moment";

const ProfileCard = ({ user, lastLogin }) => {
    console.log(lastLogin)
    const { picture, name, id, online_status } = user
    //handles the issue with 2 missing picture entries(thanks Romeo x)

    const pictures = picture ? (
        <CardImg src={picture.url} alt={picture.comment} />
    ) : (

        <CardImg src="https://picsum.photos/200" alt="Missing pic" />
    );

    console.log(user)
    //assign icon based on status in profile
    let icon = ""
    switch (online_status) {
        case "OFFLINE":
            icon = <OfflineStatus />
            break;

        case "DATE":
            icon = <DateStatus />
            break;

        default:
            icon = <OnlineStatus />
            break;
    }



    const [detailedInfo, setDetailedInfo] = useState([])
    //second api call for detailed info based on id
    const uri = `http://localhost:3000/api/profiles?ids=${id}`
    useEffect(() => {
        const fetchData = async () => {
            const info = await axios.get(uri)
            console.log(info.data)
            setDetailedInfo(info.data)
        }
        fetchData();
    }, [uri])

    const [showModal, setShowModal] = useState(false)
    //toggles if modal is the previos value, change it
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    //creates a date string 
    let date = moment(lastLogin).format("llll")
    console.log(date)



    return (
        <>

            <CardBody key={id} onClick={openModal}>
                {icon}
                {pictures}
                <CardBtm>
                    <StyledHeader>{name} </StyledHeader>
                </CardBtm>
            </CardBody>
            {/* Conditional inside a map neccessary because picture onj is missing from some profiles  */}
            {detailedInfo.map((info) => picture ?
                (<Modal info={info} showModal={showModal} setShowModal={setShowModal} name={name} date={date} picture={picture.url} />)
                :
                (<Modal info={info} showModal={showModal} setShowModal={setShowModal} name={name} date={date} picture={"https://picsum.photos/200"} />))}
        </>
    )

}
export default ProfileCard


