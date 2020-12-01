import { config } from "dotenv";

config();

export default `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j0muu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
