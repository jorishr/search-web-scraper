const search = require('./search');

(async () => {
    //const query = process.argv.slice(2);
    const query = process.argv[2];
    const type  = process.argv[3] || 'all';
    if(!query) return console.log('No search query parameter!')
    console.log('####################');
    console.log(`Query: ${query}`);
    console.log('####################');
    const results = await search(query, type);
    console.log(results);
    console.log('####################');
})();