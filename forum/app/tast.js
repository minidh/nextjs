import { MongoClient } from "mongodb";

const client = await MongoClient.connect('mongodb+srv://mindohui:<MINdh0158!>@mindohui.qlrxppf.mongodb.net/?retryWrites=true&w=majority&appName=mindohui',{useNewUrlParser:true});
const db = client.db("forum");
db.collection('post').find();