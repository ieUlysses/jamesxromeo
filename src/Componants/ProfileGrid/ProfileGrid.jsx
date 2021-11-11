import { React, useEffect, useState, useRef, useContext } from "react";

import axios from "axios";
import ProfileCard from "../ProfileCard/ProfileCard";
import Context from "../../Context/Context";


//custom styled componants 
import { SearchBar, SearchContainer, SearchIcon, Grid, DisplayMoreTile, ShowMoreIcon, } from "../StyledComponants/StyledComponants";

const ProfileGrid = () => {

    const context = useContext(Context)
    const { users, showmore } = context

    //holds array of users
    /* const [users, setUsers] = useState([])
    const [loadmore, setLoadMore] = useState(32) */
    //holds search term
    const [search, setSearch] = useState("")
    //following two control the search bar, if hovered: reveal(expand container + search input)
    const [hoverState, setHoverState] = useState(false)
    const [focus, setFocus] = useState(false)

    const target = useRef(null)

    const reveal = hoverState || focus

    /*  const showmore = () => {       
         setLoadMore(56)
     } */

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const matchUser = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <SearchContainer
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                reveal={reveal}
            >
                <SearchBar ref={target} reveal={reveal} onChange={handleSearch} />
                <SearchIcon />
            </SearchContainer>

            <Grid>
                {search ? (matchUser.map((user) => (<ProfileCard key={user.id} user={user} Id={user.id} />)))
                    : (users.map((user) => (<> <ProfileCard key={user.id} user={user} Id={user.id} />  </>)))
                }
                <DisplayMoreTile onClick={showmore}>
                    <ShowMoreIcon />
                    Load more
                </DisplayMoreTile>
            </Grid>




        </>
    )
}




export { ProfileGrid }