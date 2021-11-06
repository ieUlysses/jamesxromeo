import { React, useEffect, useState, useRef } from "react";

import axios from "axios";
import ProfileCard from "../ProfileCard/ProfileCard";

//custom styled componants 
import { SearchBar, SearchContainer, SearchIcon, Grid, Container, DisplayMoreTile, ShowMoreIcon, StyledHeader } from "../StyledComponants/StyledComponants";

const ProfileGrid = () => {
    //holds array of users
    const [users, setUsers] = useState([])
    const [loadmore, setLoadMore] = useState(32)
    //holds search term
    const [search, setSearch] = useState("")
    //following two control the search bar, if hovered: reveal(expand container + search input)
    const [hoverState, setHoverState] = useState(false)
    const [focus, setFocus] = useState(false)

    const target = useRef(null)

    const reveal = hoverState || focus

    const Showmore = () => {        /* Lowercase */
        setLoadMore(56)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const matchUser = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )


    //ammended for proxy addition in package.json
    const url = `/api/search?length=${loadmore}`
    useEffect(() => {
        const fetchData = async () => {
            const user = await axios.get(url)
            console.log(user.data.items)
            setUsers(user.data.items)
        }
        fetchData();
    }, [url])




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
                {search ? (matchUser.map((user) => (<ProfileCard key={user.id} user={user} />)))
                    : (users.map((user) => (<> <ProfileCard key={user.id} user={user} />  </>)))
                }
                <DisplayMoreTile onClick={Showmore}>
                    <ShowMoreIcon />
                    Load more
                </DisplayMoreTile>
            </Grid>




        </>
    )
}




export { ProfileGrid }