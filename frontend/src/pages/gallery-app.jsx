import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadElements, changePageIdx, setPage, removeElement } from '../store/element.actions.js'

import { FilterBy } from '../cmps/filterBy'
import { ActionBtns } from '../cmps/action-btns'
import { List } from '../cmps/list'

export const GalleryApp = () => {
    const dispatch = useDispatch()
    const { elements, totalPages, pageIdx } = useSelector(state => state.elementModule)

    useEffect(() => {
        dispatch(loadElements())
    }, [])

    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState(false)

    const changePage = (diff) => {

        if (pageIdx + diff > totalPages) {
            dispatch(setPage(1))
            dispatch(loadElements())
            return
        }

        else if (pageIdx + diff < 1) {
            dispatch(setPage(totalPages))
            dispatch(loadElements())
            return
        }

        dispatch(changePageIdx(diff))
        dispatch(loadElements())
    }

    const selectElement = (element) => {
        setSelected(element)
    }

    const displayModal = () => {
        setShowModal(showModal => !showModal)
    }


    const onRemoveElement = (elementId) => {
        console.log(elementId)
        dispatch(removeElement(elementId))
    }

    if (!elements) return <h1>Loading...</h1>
    return (
        <section>
            <h3>Gallery App</h3>

            <main>
                <FilterBy
                    showModal={showModal}
                    displayModal={displayModal}
                />

                <List
                    onRemoveElement={onRemoveElement}
                    selectElement={selectElement}
                    elements={elements}
                    selected={selected}
                />
                <ActionBtns
                    changePage={changePage}
                    displayModal={displayModal}
                />
            </main>
        </section >
    )
}

