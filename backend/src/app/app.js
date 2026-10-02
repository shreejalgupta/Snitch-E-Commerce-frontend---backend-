import express from "express"
import authRouter from "../routes/auth.routes.js";
import productRouter from "../routes/product.routes.js"
import cartRouter from "../routes/cart.routes.js"
import cookieParser from "cookie-parser"


const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Ok got it");
});

app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)


export default app