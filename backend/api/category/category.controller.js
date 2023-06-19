const logger = require('../../services/logger.service')
const categoryService = require('./category.service')

const ELEMENTS_PER_PAGE = 9

async function getElements(req, res) {
    try {
        let pageIdx = +req.query.pageIdx
        const category = req.query.type
        const filterBy = JSON.parse(req.query.filterBy)
        let elements = await categoryService.query(category)
        const totalPages = Math.ceil(elements.hits.length / ELEMENTS_PER_PAGE)

        if (pageIdx) {     
            let startIdx = (pageIdx-1) * ELEMENTS_PER_PAGE;
            elements = elements.hits.slice(startIdx, startIdx + ELEMENTS_PER_PAGE)
        }

        if (filterBy.sortBy) {

            if (filterBy.sortBy === 'byDownloads') {
                elements.sort(function (a, b) {
                    return a.downloads - b.downloads
                })
            }
            else if (filterBy.sortBy === 'byId') {
                elements.sort(function (a, b) {
                    return a.id - b.id
                })
            }
        }
        res.send({ elements, totalPages})
    } 
    catch (err) {
        logger.error('Cannot get elements', err)
        res.status(500).send({ err: 'Failed to get elements' })
    }
}

module.exports = {
    getElements,
}