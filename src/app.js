const search = require('./search');

(async () => {
    const query = process.argv.slice(2);
    console.log('####################');
    console.log(`Query: ${query}`);
    console.log('####################');
    const results = await search(query, 'all');
    console.log(results);
    console.log('####################');
})();