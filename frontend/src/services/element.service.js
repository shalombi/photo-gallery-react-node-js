import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'elements'

export const elementService = {
    query,
    remove,
}


async function query(filterBy, pageIdx, category = '') {
    const data = await httpService.get(`category`, { filterBy, type: category, pageIdx }) 
    // Save to local storage
    const localData = await storageService.postMany(STORAGE_KEY, data) 
    return localData
}


function remove(elementId) {
    return storageService.remove(STORAGE_KEY, elementId)
}

function getById(elementId) {
    return storageService.get(STORAGE_KEY, elementId)
}

function save(element) {
    if (element._id) {
        return storageService.put(STORAGE_KEY, element)
    } else {
        element.batteryStatus = 100
        return storageService.post(STORAGE_KEY, element)
    }
}

// elements




