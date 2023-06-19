import React from 'react'

export const InfoModal = ({ selected, selectElement }) => {

    return (
        <div className='modal flex column'>
            <div> tags : {selected.tags}</div>
            <div> views : {selected.views}</div>
            <div> downloads : {selected.downloads}</div>
            <div> collection : {selected.collections}</div>
            <div> id : {selected.id}</div>
            <button className='cursor-pinter' onClick={() => selectElement(null)} >X</button>
        </div>
    )
}

