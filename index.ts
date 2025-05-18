import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./src/config/database";

import noteRoutes from "./src/routers/noteRouters";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/note", noteRoutes)


const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected and models synced.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
});