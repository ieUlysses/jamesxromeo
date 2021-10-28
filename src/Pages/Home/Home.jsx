import React from "react"
import NavigationBar from "../../Componants/NavigationBar/NavigationBar"
import { Container } from "../../Componants/StyledComponants/StyledComponants"
import { DataProvider } from "../../DataProvider/DataProvider"


const Home = () => {
    return (<>
        <Container>
            <DataProvider />
        </Container>
    </>)
}

export default Home