require('dotenv').config()
const {MongoClient} = require('mongodb');
console.log(process.env.MONGO_URL)
const client = new MongoClient(process.env.MONGO_URL);
async function main(){
    await client.connect();
    console.log('connexion ok');
    return '!done';
}
main()
.then(console.log)
.catch(console.error)