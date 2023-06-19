const initialState = {
    elements: [],
    filterBy: {},
    pageIdx: 1,
    totalPages: '',
    category: { type: '' },
}
export function elementReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {

        case 'SET_ELEMENTS':
            newState = { ...state, elements: action.elements, totalPages: action.totalPages }
            break

        case 'CHANGE_PAGE':
            newState = { ...state, pageIdx: state.pageIdx + action.diff }
            break

        case 'SET_PAGE':
            newState = { ...state, pageIdx: action.pageIdx }
            break

        case 'SET_FILTER_BY':
            newState = { ...state, category: { ...state.category, type: action.filterBy.category, filterBy: action.filterBy } }
            break

        case 'REMOVE_ELEMENT':
            return {
                ...state,
                elements: state.elements.filter(element => element._id !== action.elementId)
            }
        default:
    }
    return newState

}


