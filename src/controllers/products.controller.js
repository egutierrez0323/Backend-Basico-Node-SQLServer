import { ConnectSQL, sql, queries } from "../database/";

export const GetProducts = async (req, res) => {
	try {
		console.log("consultando Producto");
		const pool = await ConnectSQL();
		const result = await pool.request().query(queries.getAllProducts);
		res.json(result.recordset);
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
};

export const CreateNewProduct = async (req, res) => {
	const { name, description } = req.body;
	let { quantity } = req.body;

	if (name == null || description == null) {
		return res.status(400).json({
			msg: "Solicitud Incorrecta: Por favor, llene todos los campos requeridos",
		});
	}

	if (quantity == null) {
		quantity = 0;
	}
	// en el caso de que se quiera usar un query para ingresar el nuevo registro el pool debe ser asyncrono
	// const pool = await ConnectSQL();
	// await pool.request()
	//         .input("name",sql.VarChar, name)
	//         .input("description",sql.VarChar,description)
	//         .input("quantity",sql.Int, quantity)
	//         .query(queries.InsertNewProducto)

	//y por alguna extraña razon si se usa un stored procedure no debe ser asyncrono 🙄
	try {
		const pool = await ConnectSQL();
		const result = await pool
			.request()
			.input("name", sql.VarChar, name)
			.input("description", sql.VarChar, description)
			.input("quantity", sql.Int, quantity)
			.execute(queries.procCreateProduct);

		console.log(result);
		res.json("Process Succefull.");
		return result.recordset;
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
};

export const GetProductsById = async (req, res) => {
	try {
		console.log("Consultando por ID");
		const { id } = req.params;
		const pool = await ConnectSQL();
		const result = await pool
			.request()
			.input("id", sql.Int, id)
			.query(queries.getProductById);
		res.send(result.recordset[0]);
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
};

export const DeleteProductsById = async (req, res) => {
	try {
		const { id } = req.params;
		const pool = await ConnectSQL();
		const result = await pool
			.request()
			.input("id", sql.Int, id)
			.query(queries.deleteProductById);
		res.sendStatus(204);
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
};

export const GetCountProducts = async (req, res) => {
	try {
		console.log("contando Productos");
		const pool = await ConnectSQL();
		const result = await pool.request().query(queries.getCountProduct);
		res.json(result.recordset[0]);
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
};

export const UpdateProducts = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, description, quantity } = req.body;
		console.log(id);

		if (name === null || description === null || quantity === null) {
			return res.status(400).json({
				msg: "Solicitud Incorrecta: Por favor, llene todos los campos requeridos",
			});
		}

		const pool = await ConnectSQL();
		const result = await pool
			.request()
			.input("id", sql.Int, id)
			.input("name", sql.VarChar, name)
			.input("description", sql.VarChar, description)
			.input("quantity", sql.Int, quantity)
			.query(queries.updateProduct);
		res.json(result.recordset);
		// res.sendStatus(204);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};
