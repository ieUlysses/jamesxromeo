import { React, useEffect, useState, useContext } from "react"


//styled componants import
import { DateStatus, OfflineStatus, OnlineStatus, CardImg, CardBody, StyledHeader, CardBtm, ID } from "../StyledComponants/StyledComponants";

import { Modal } from "../Modal/Modal";
import moment from "moment";

import Context from "../../Context/Context";

const ProfileCard = ({ user, Id }) => {

    const { picture, name, id, online_status, last_login } = user

    const context = useContext(Context)
    const { detailedInfo, openModal } = context

    /* Detailed info referrs back to the 2nd api call */

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


    let date = moment(last_login).format("llll")
    console.log(date)


    const filteredInfo = detailedInfo.filter(info => info.id === Id)
    console.log(filteredInfo)
    console.log(`${Id} + ${id}`)

    //.filter returns array? (joesph)
    //Id pased from first api call passed by Profile Grid, id from second api call(detailed info)

    //.find returns object?
    /*  const dilteredInfo = detailedInfo.find(info => info.id === Id)
 
     console.log(dilteredInfo) */

    return (
        <>

            <CardBody key={id} onClick={openModal}>
                {icon}
                {pictures}
                <CardBtm>
                    <StyledHeader>{name} </StyledHeader>
                </CardBtm>
            </CardBody>


            {/*  {filteredInfo.map((info) => picture ?
                (<Modal dilteredInfo={dilteredInfo} info={info} showModal={showModal} setShowModal={setShowModal} name={name} date={date} picture={picture.url} />)
                :
                (<Modal dilteredInfo={dilteredInfo} info={info} showModal={showModal} setShowModal={setShowModal} name={name} date={date} picture={"https://picsum.photos/200"} />))} */}

            {/* 
            v1
            Conditional inside a map neccessary because picture obj is missing from some profiles  */}

            {/* To test v1 ammend filtered info to use filter instead of .find */}
            {/*  {filteredInfo.map((info) => picture ?
                (<Modal info={info} Id={id} name={name} date={date} picture={picture.url} />)
                :
                (<Modal info={info} Id={id} name={name} date={date} picture={"https://picsum.photos/200"} />))} */}



            {picture ?
                (<Modal Id={id} filteredInfo={filteredInfo} name={name} date={date} picture={picture.url} />)
                :
                (<Modal Id={id} filteredInfo={filteredInfo} name={name} date={date} picture={"https://picsum.photos/200"} />)}
        </>
    )

}
export default ProfileCard


