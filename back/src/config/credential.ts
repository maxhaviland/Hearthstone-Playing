import { config } from 'dotenv';

config();

export default `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.j0muu.mongodb.net/Cluster0?retryWrites=true&w=majority`;
