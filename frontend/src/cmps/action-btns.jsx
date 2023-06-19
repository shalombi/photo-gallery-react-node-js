import React from 'react'

export const ActionBtns = ({ changePage, displayModal }) => {

    return (
        <section className='actions'>
            <button className='prev-btn' onClick={() => changePage(-1)}>Prev</button>
            <button className='next-btn' onClick={() => changePage(1)}>Next</button>
            <button className='choose-category-btn' onClick={displayModal}>Choose category</button>
        </section>
    )
}

