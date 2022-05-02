import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div `
    display: flex;
    padding: 5px;
    justify-content: space-between;
`

export default function Categories() {
    return (
        <Container>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </Container>
    )
}
