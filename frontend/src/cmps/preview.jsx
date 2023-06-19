import React from 'react'

export const Preview = ({ selectElement, element, onRemoveElement }) => {

    return (
        <section className="">
            <li
                className="element-preview cursor-pointer"
                key={element.id}
            >
                <div onClick={() => selectElement(element)}>
                    <img src={element.largeImageURL} alt="" />
                </div>

                <button onClick={() => onRemoveElement(element.id)}>X</button>
            </li>
        </section>
    )
}

