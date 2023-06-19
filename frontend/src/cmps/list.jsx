import React from 'react'

import { InfoModal } from '../cmps/info-modal'
import { Preview } from './preview'

export const List = ({ elements, selectElement, selected,onRemoveElement }) => {

    return (
        <ul className="element-list">

            {
                elements?.map(element =>
                    <Preview
                        key={element.id}
                        element={element}
                        selected={selected}
                        selectElement={selectElement}
                        onRemoveElement={onRemoveElement}
                    />)
            }

            {selected &&
                <InfoModal
                    selected={selected}
                    selectElement={selectElement}
                />
            }
        </ul>
    )
}

