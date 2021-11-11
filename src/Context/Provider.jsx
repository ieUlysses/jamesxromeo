import axios from 'axios';
import { React, useState, useEffect } from 'react';

import Context from './Context';

const Provider = (props) => {
    const [users, setUsers] = useState([])
    const [loadmore, setLoadMore] = useState(32)

    const showmore = () => {
        setLoadMore(56)
    }

    const url = `/api/search?length=30`
    useEffect(() => {
        const fetchData = async () => {
            const user = await axios.get(url)
            console.log(user.data.items)
            setUsers(user.data.items)
        }
        fetchData();
    }, [url])



    const [detailedInfo, setDetailedInfo] = useState([])
    //second api call for detailed info based on id
    const uri = `
api/profiles?ids=7077310102503424&ids=4336970241146880&ids=3838316780716032&ids=8464763977728&ids=2681052011167744&ids=2217020183543808&ids=2956664871321600&ids=8540299758403584&ids=848671702777856&ids=6927172046422016&ids=476244808302592&ids=4229922486747136&ids=6159875610509312&ids=6728880893198336&ids=4117036607209472&ids=723930811727872&ids=8115558010585088&ids=8677556656013312&ids=6164520531656704&ids=7904184877711360&ids=176290057420800&ids=1432659330859008&ids=1441593466814464&ids=941245450944512&ids=4544652831096832&ids=417528606097408&ids=2424762160644096&ids=1039206619021312&ids=3202382330593280&ids=1823904666484736&ids=4655969619410944`


    useEffect(() => {
        const fetchData = async () => {
            const info = await axios.get(uri)
            console.log(info.data)
            setDetailedInfo(info.data)

        }
        fetchData();
    }, [uri])

    console.log(detailedInfo)

    const [showModal, setShowModal] = useState(false)
    //toggles if modal is the previos value, change it

    /* const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    } */

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <Context.Provider
            value={{ users, setLoadMore, showmore, openModal, setShowModal, showModal, detailedInfo }}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;




/* Rough ework below...ignore */
/* /api/profiles?
ids=7077310102503424&ids=4336970241146880&ids=3838316780716032&ids=8464763977728&ids=2217020183543808&ids=2956664871321600&ids=848671702777856&ids=6927172046422016&ids=4229922486747136&ids=6159875610509312&ids=4117036607209472&ids=723930811727872&ids=8115558010585088&ids=8677556656013312&ids=6164520531656704&ids=7904184877711360&ids=176290057420800&ids=1432659330859008&ids=1441593466814464&ids=941245450944512&ids=4544652831096832&ids=417528606097408&ids=2424762160644096&ids=1039206619021312&ids=3202382330593280&ids=1823904666484736&ids=4655969619410944 */



/* 7077310102503424&ids=4336970241146880&ids=3838316780716032&ids=8464763977728&ids=2681052011167744&ids=2217020183543808&ids=2956664871321600&ids=8540299758403584&ids=848671702777856&ids=6927172046422016&ids=476244808302592&ids=4229922486747136&ids=6159875610509312&ids=6728880893198336&ids=4117036607209472&ids=723930811727872&ids=8115558010585088&ids=8677556656013312&ids=6164520531656704&ids=7904184877711360&ids=176290057420800&ids=1432659330859008&ids=1441593466814464&ids=941245450944512&ids=4544652831096832&ids=417528606097408&ids=2424762160644096&ids=1039206619021312&ids=3202382330593280&ids=1823904666484736&ids=4655969619410944 */

/*
    7077310102503424
    4336970241146880
    3838316780716032
    8464763977728
    2681052011167744
    2217020183543808
    2956664871321600
    8540299758403584
    848671702777856
    6927172046422016
    476244808302592
    4229922486747136
    6159875610509312
    6728880893198336
    4117036607209472
    723930811727872
    8115558010585088
    8677556656013312
    6164520531656704
    7904184877711360
    176290057420800
    1432659330859008
    1441593466814464
    941245450944512
    4544652831096832
    417528606097408
    2424762160644096
    1039206619021312
    3202382330593280
    1823904666484736
    4655969619410944

    */

/*
Attempted to pass an id as a param to axios orig structure was {ids:7077310102503424},
const idS = [
    7077310102503424,
    4336970241146880,
    3838316780716032,
    8464763977728,
    2217020183543808,
    2956664871321600,
    848671702777856,
    6927172046422016,
    476244808302592,
    4229922486747136,
    6159875610509312,
    4117036607209472,
    723930811727872,
    8115558010585088,
    8677556656013312,
    6164520531656704,
    7904184877711360,
    176290057420800,
    1432659330859008,
    1441593466814464,
    941245450944512,
    4544652831096832,
    417528606097408,
    2424762160644096,
    1039206619021312,
    3202382330593280,
    1823904666484736,
    4655969619410944,


] */