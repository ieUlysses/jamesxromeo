import { React, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Nav>
                <Logo>
                    James <strong>X</strong> Romeo
                </Logo>
                <Burger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Burger>
                <LinkContainer isOpen={isOpen}>
                    {links.map((link, index) => (
                        <NavLink key={index} to={link.path} exact activeClassName="current">
                            <li>{link.name}</li>
                        </NavLink>
                    ))}
                </LinkContainer>
            </Nav>

        </>
    )
}

/* This is kinda cool, maybe a little messy but if you have a lot of links, this would help  */
const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];


/* On the offchance that this is the correct way for styled componants, i kept the nav bar styles with the componant */
//NavBar
const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
background-color:darkslategrey;
border-radius:5px;
border-radius:5px;
width:100%;

`;

//BurgerMenu
const Burger = styled.div`
display:none;
flex-direction:column;
height:25px; 
width:25px;
align-items:center;
justify-content:center;
cursor: pointer;
align-self:center;
margin:5px;

//internals (individual lines)
span{
    height:2px;
    width:25px;
    margin:2px;
    border-radius:5px;
    background-color: #ffffff;
}

//mediaQueeries
@media(max-width:768px){
    display:flex
}
`;

//Logo
const Logo = styled.a`
color: #202020;
font-family: 'Playfair Display';
font-size: 1.8rem;
font-weight: 800;

strong{
    font-style:italic;
}
`;

const LinkContainer = styled.ul`
display: flex;
    a {
    text-decoration: none;
}

    li {
    color: #1d1d1d;
    font-size: 1.0em;
    list-style: none;
    font-family: 'Roboto';
    text-align:center;
    justify-content:space-evenly;
    padding:1em 2em;
}

//only show when screen is over 768px
@media(max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    //passes isOpen in as an argument..if is open = isopen heigth = x if not, height = 0
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    justify-content: center;
    align-items: center;
    transition: max-height ease-in-out 0.3s;
    
    li{
    padding: 1em 2em;
}
}

@media(min-width: 768px) {
    //current page status
    .current {
    li {
            border-bottom: 2px solid white;
            transition:  all 0.5s;
        }
    }

}
`;



export default NavigationBar
