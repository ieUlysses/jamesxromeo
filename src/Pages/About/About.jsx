import React from "react"
import styled from "styled-components"
import { AboutHeader, AboutNote, AboutText, Container } from "../../Componants/StyledComponants/StyledComponants"

const About = () => {

    return (
        <>
            <Container>
                <AboutNote>
                    <AboutHeader>
                        Thank you!
                    </AboutHeader>
                    <AboutText>
                        Hi Erasys / Romeo team, thank you for checking out my assesment piece. This is the second incarnation of this app by now and I am felatively proud of it. There are bound to be better ways of doing things and I am confident that with my current skillset, I can pick them up quickly. It was important for me in this app to aviod using styling libraries as I wanted to show you that I can work with Styled Componants, as I know they are your current tool for styling. Once again, Thank you for giving me this exciting task... keep an eye on the Repo. More features are in the works.
                    </AboutText>
                </AboutNote>
            </Container>
        </>
    )
}
export default About