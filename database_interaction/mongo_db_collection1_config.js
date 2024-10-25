import {MongoClient} from 'mongodb'; 
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 
const dbname = 'hackathon';
async function fetchcollection(){
      await client.connect(); 
      const db = client.db(dbname); 
      const collection = db.collection('login_system'); 
      return collection;
}   
async function disconnect_db(){
   return client.close();
}
export {fetchcollection,disconnect_db};