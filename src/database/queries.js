export const queries = {
    //Products//////////////////////////////
    //Obtener
    getAllProducts: 'SELECT [id],[Name],[Description],[Quantity] FROM [dbo].[Products]',
    getProductById: 'SELECT [id],[Name],[Description],[Quantity] FROM [dbo].[Products] WHERE [id] = @id',
    getCountProduct: 'SELECT COUNT(1) FROM [dbo].[Products]',

    //Insertar
    insertNewProducto: `INSERT INTO dbo.Products (name, description, quantity) 
                        VALUES (@name, @descriptiop, @quantity)`,
    procCreateProduct: '[dbo].[ProductSave]',

    //Eliminar
    deleteProductById: "DELETE FROM [dbo].[Products] WHERE id = @id",

    //Actualizar
    updateProduct: `UPDATE [dbo].[Products] 
                    SET [Name] = @name
                        ,[Description] = @description
                        ,[Quantity] = @quantity 
                    WHERE [id] = @id`,

    //Products//////////////////////////////
}