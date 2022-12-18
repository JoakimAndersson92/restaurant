import React from 'react'
import ContentCard from './ContentCard'

function ContentWrapper() {
    return (
        <div className='content-wrapper'>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
        </div>
    )
}

export default ContentWrapper