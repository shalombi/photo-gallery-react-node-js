const logger = require('../../services/logger.service')
const axios = require('axios')

async function query(category) {
    try {
        const elements = await (
            await axios.get(
                `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
            )
        ).data
        return elements
    }
    catch (err) {
        logger.error('cannot find elements', err)
        throw err
    }
}

module.exports = {
    query,
}


