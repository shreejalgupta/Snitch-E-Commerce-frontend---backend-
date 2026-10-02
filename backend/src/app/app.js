import express from "express"
import authRouter from "../routes/auth.routes.js";
import productRouter from "../routes/product.routes.js"
import cartRouter from "../routes/cart.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));


app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Ok got it");
});

app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)


export default app
