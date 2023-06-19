import { elementService } from "../services/element.service.js";
import {  showErrorMsg } from '../services/event-bus.service.js'

export function loadElements() {
    return async (dispatch, getState) => {
        try {
            let { pageIdx, category } = getState().elementModule
            const { elements ,totalPages} = await elementService.query(category.filterBy, pageIdx, category.type)
            
            dispatch({
                type: 'SET_ELEMENTS',
                elements,
                totalPages
            })

        } catch (err) {
            showErrorMsg('Cannot load elements')
            console.log('Cannot load elements', err)
        }
    }
}

export function changePageIdx(diff) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_PAGE',
            diff
        })
    }
}

export function setPage(pageIdx) {
    return (dispatch) => {
        dispatch({
            type: 'SET_PAGE',
            pageIdx
        })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({
            type: 'SET_FILTER_BY',
            filterBy
        })
    }
}


export function removeElement(elementId) {
    return (dispatch) => {
        elementService.remove(elementId)
            .then(() => {
                console.log('remove from action')
                dispatch({ type: 'REMOVE_ELEMENT', elementId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

