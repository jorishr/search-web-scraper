const documentSearch = require('../document_search');
const videoSearch = require('../video_search');
/*
Strategy pattern: depending on type of search return a slightly different
result (array). This approach makes it very easy to add additional search 
types from additional modules.
*/ 
const search = async (query, type) => {
    switch (type){
        case 'document' :
            return await documentSearch(query)
        case 'video' :
            return await videoSearch(query)
        default : 
            const searchDocs = await documentSearch(query);
            const searchVids = await videoSearch(query);
            return searchDocs.concat(searchVids);
    }
} 
module.exports = search;