import React from "react"
import NavigationBar from "../../Componants/NavigationBar/NavigationBar"
import { Container } from "../../Componants/StyledComponants/StyledComponants"
import { ProfileGrid } from "../../Componants/ProfileGrid/ProfileGrid"


const Home = () => {
    return (<>
        <NavigationBar />
        <Container>
            <ProfileGrid />
        </Container>
    </>)
}

export default Home