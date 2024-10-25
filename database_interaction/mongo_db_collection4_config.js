import {MongoClient} from 'mongodb'; 
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 
const dbname = 'hackathon';
async function fetchcollection(collection_name){
      await client.connect(); 
      const db = client.db(dbname); 
      const collection = db.collection(`${collection_name}`); 
      return collection;
}   
async function disconnect_db(){
   return client.close();
}
export {fetchcollection,disconnect_db};