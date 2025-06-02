import React from 'react'
import { Container } from './Common/Container'
import { Title } from './Common/Title'
import { NabTitle } from './Common/NabTitle'
import { Search } from './Common/Search'
import { SortBtn } from './Common/sortBtn'
import { Button } from './Common/Button'

function Dashboard() {
  return (
    <section className="bg-primary mt-[32px]">
        <Container>
            <div>
                <div>
                  <Title>Welcome back</Title>
                  <NabTitle>Dashboard</NabTitle>
                </div>
                <div>
                    <Search></Search>
                    <SortBtn>Sort By: Date modified</SortBtn>
                    <Button>Cypher AI</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Dashboard