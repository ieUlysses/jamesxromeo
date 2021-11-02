
import styled from "styled-components";

/* Moin! Welcome to the jungle. There's raound 380 lines of code here. 
each segment is labled along with the page it's shown on I'm not quite sure if i've got the arrangemnt of this right
but given some tips I'll be ref`ctoring it faster than you can say "best practices"*/


// icons
import { ArrowRight, Search, Moon, Eyeglasses } from "@styled-icons/bootstrap"
import { StatusOnline } from "@styled-icons/heroicons-solid"
import { Close } from "@styled-icons/evil";

//used in Home(page)
export const Container = styled.div`
display:flex; 
align-items:center;
justify-content:space-evenly;
width:100%;
height:100%;
flex-direction:column;

`;

/* 
media queeries
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
 */
/* end of Home(page) */

/* used in Data Provider */
export const SearchContainer = styled.div`
align-self:center;
position: relative;
height:45px;
box-sizing:border-box;
border-radius:50px;
border:1px solid lightgray;
padding:5px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
transition:all 0.5s;
margin:15px 0 15px 0;
width:${(props) => (props.reveal ? "50%" : "45px")};


`;

/* Input for search bar */
export const SearchBar = styled.input`
font-family: 'Roboto';
    color:white;
    background-color:transparent;
    position:absolute;
    top:0;
    box-sizing:border-box;
    left:0;
    width:100%;
    height:100%;
    line-height:30px;
    outline:0;
    border:0;
    font-size:1.2rem;
    border-radius:20px;
    margin:0;
    padding: 0 20px;
    appearance: none;   
    display:${(props) => (props.reveal ? "block" : "none")};
`;

export const SearchIcon = styled(Search)`
    align-self:flex-end;
    color:darkslategray;
    z-index:10;
`


/* used in Data Provider to allign profile cards rendered there */
export const Grid = styled.div`
    display:grid;
    gap:7px;
    width:max-content;
    height:100%;
    //position:relative; /* Not needed with Portal */
    grid-template-columns: repeat(3, 1fr);
    /* Media queeries */

@media (min-width:769px) and (max-width:1024px) {
    grid-template-columns:repeat(5 ,1fr) ;
}
@media (min-width:1025px) and (max-width:1200px) {
    grid-template-columns:repeat(6,1fr) ;
}
@media (min-width:1201px)  {
    grid-template-columns:repeat(7,1fr) ;
}
`




/* LAst tile for grid( on click renders 32 profiles, in furure will have a toggle and animations) */
export const DisplayMoreTile = styled.div`
font-family: 'Playfair Display SC', serif;
    cursor: pointer;
    color:grey; 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    height:min-content;
    border-radius:5px;
    height:160px;
    width:150px;
@media  (max-width:480px) {
    font-size:15px;
   
   height:85px;
   width:95px;
}`


export const ShowMoreIcon = styled(ArrowRight)`
    align-self:center;
    color:darkslategray;
    height:50%;
    width:50%;
    z-index:10;
`
/*end of Data Provider */

/* Start of Profile Card (home page) */
//Profile Card
export const CardBody = styled.div`
    height:160px;
    width:150px;
    background-image:radial-gradient( #353535 ,#252525, #1a1a1a);
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
    justify-content:space-between;
    
    box-sizing:border-box;
    justify-content:center;
    align-items:center;
    cursor: pointer;

    @media  (max-width:480px) {
   
    height:95px;
    width:95px;
}
`;

/* ProfilePicture (profile card) */
export const CardImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius:5px 5px 0px 0px;
    
`;
/* Following three are the online status icons. in future they will be done using common styling from styled componants */
export const DateStatus = styled(Eyeglasses)`
    color:pink;
    height:16px;
    width:16px;
    align-self:center;
`

export const OnlineStatus = styled(StatusOnline)`
    color:lightgreen;
    height:15px;
    width:15px;
    align-self:center;
`

export const OfflineStatus = styled(Moon)`
    color:lightslategray;
    height:15px;
    width:15px;
    align-self:center;
`
/* Card header (Profile name on profile card) */
export const StyledHeader = styled.span`
    font-size: 16px;
    color:grey; 
    
    font-family: 'Roboto';
    
    @media  (max-width:480px) {
    font-size:14px;
}
`
/* Base section of card */
export const CardBtm = styled.div`
    width:98%;
    display:flex;
    align-items:center;
    justify-content:center;

`



/* Start of Modal componants (opened by clicking on profile cards on home page)*/

export const Background = styled.div`
z-index:10000;
display:flex;
//position:absolute; /* Not needed with Portal */
position:fixed; //needed for Modal
justify-content:center;
align-items:center;

/* Top,bottom, left.right set the distance between the div and the display size  https://developer.mozilla.org/en-US/docs/Web/CSS/right*/
top:0;
bottom:0;
left:0;
right:0;

border-radius:5px;
cursor: pointer;
background-image:radial-gradient(  #000000, #292929, #393939 ,#292929 );
/* Acts as a trigger area for the modal */
`

export const ModalWrapper = styled.div`
transition:all 0.5s;
color:#000;
display:flex;
height:max-content;
flex-direction:row;
width:85%;
border-radius:5px;
justify-content:space-evenly;
background-color:black;
cursor: default;
@media (max-width:768px)  {
    flex-direction:column;
    
}
`

export const ModalImg = styled.img`
height:50%;
width:50%;
border-radius: 5px;
align-self:center;
margin:5px;

`

export const ModalContent = styled.div`
display:flex;
flex-direction:column;
align-self:center;
align-items:center;
width:85%;
background-color:white;
margin: 5px; 
border-radius:5px;

@media   (min-width:768px) {
    width:50%;
}

`
export const ModalHeadline = styled.span`
width:100%;
line-height:1;
text-align:center;
color:grey;
font-family:'Playfair Display';
font-size:1.2em;
`

export const ModalText = styled.p`
width:100%;
align-self:center;
line-height:1;
font-size:1.1rem;
color:grey;

`

export const ModalCloseIcon = styled(Close)`
cursor: pointer;
position:absolute;
top:20px;
right:20px;
width:32px;
height:32px;
padding:0px;
z-index:1000;
color:darkslategrey;
border:none;
`
export const ID = styled.span`
text-align:center;
font-size:18px;
color:darkslategrey;
`

/* End of Modal */

/* About Note(about page) */
export const AboutNote = styled.div`
margin-top:25px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
border-radius:5px;
width: 320px;
height:max-content;
background-color:darkslategray;
align-self:center;
`

export const AboutHeader = styled.span`
font-family:'Playfair Display SC';
font-size:1.2em;
color:white;
`
export const AboutText = styled.p`
font-family:'Roboto';
font-size:2vw;
line-height:1;
`

/* End of About Note */