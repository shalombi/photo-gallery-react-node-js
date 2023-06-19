import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { loadElements, setFilterBy } from '../store/element.actions.js'



export const FilterBy = ({ showModal, displayModal }) => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({})

    const catagories = [
        { _id: 'c101', type: 'sport', name: 'Sport', },
        { _id: 'c102', type: 'work', name: 'Work', }
    ]
    const sortBy = [
        { _id: 's101', type: 'byDownloads', name: 'by downloads', },
        { _id: 's102', type: 'byId', name: 'by id', }
    ]



    useEffect(() => {
        dispatch(setFilterBy({ sortBy: filter.sort, category: filter.category }))
        dispatch(loadElements())

    }, [filter])

    const handleChange = async (ev) => {
        ev.preventDefault()

        const { name, value } = ev.target
        setFilter({ ...filter, [name]: value })
    }

    return (
        <section>
            <select
                className='cursor-pointer'
                onChange={handleChange}
                name="sort"
            >
                <option value="">Sort By</option>

                {sortBy?.map(s => (
                    <option key={s._id} value={s.type}>
                        {s.name}
                    </option>
                ))}
            </select>

            {
                showModal && <div className='category-modal'>
                    <h3>Select Category</h3>
                    <button onClick={displayModal}>x</button>

                    <select
                        className='cursor-pointer'
                        onChange={handleChange}
                        name="category"
                    >
                        <option value="">Select Category</option>
                        {catagories?.map(c => (
                            <option key={c._id} value={c.type}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            }

        </section>
    )
}

