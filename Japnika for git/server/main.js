const express = require("express");
const connectdb = require("./configs/DB");
const cors = require("cors");
const CategoryRouter = require("./routers/CategoryRouter");
const ProductRouter = require("./Routers/ProductRouter");
const ExtrasRouter = require("./routers/ExtrasRouter");
const OrderRouter = require("./routers/OrderRouter");
const app = express();

connectdb();

const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);
app.use("/extra", ExtrasRouter);
app.use("/order", OrderRouter);

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
