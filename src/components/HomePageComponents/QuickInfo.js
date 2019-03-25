import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="let us tell you" title="our mission" />
                <QuickInfoWrapper>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ea unde debitis, hic magnam nulla dignissimos aspernatur fugiat, ipsam recusandae numquam sunt facere expedita corporis velit rerum? Officiis sequi delectus error amet expedita odio labore voluptate incidunt illo tenetur saepe corporis voluptatibus quam assumenda temporibus eaque libero, cum officia quaerat? At, illo facilis maiores ut magni eius asperiores doloribus magnam optio natus quos voluptas expedita necessitatibus delectus corporis velit, aliquam, soluta cumque? Incidunt nobis modi exercitationem perspiciatis consequuntur consectetur? Sed sapiente consequatur reiciendis? Magnam delectus reiciendis rerum sapiente unde, rem modi consequuntur deserunt natus blanditiis distinctio doloremque laborum voluptatem beatae.</p>

                    <Link to="/about/" style={{ textDecoration: 'none' }}>
                        <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text{
        line-height:2rem;
        color: ${styles.colors.mainGray};
        word-spacing: 0.2rem;
    }
    @media(min-width:769px){
        width:70%;
    }
    @media(min-width:992px){
        width:68%;
    }
`
