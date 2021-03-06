USE [webstore]
GO
/****** Object:  StoredProcedure [dbo].[NewPreductSave]    Script Date: 2022-05-29 15:53:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ProductSave]

@name VARCHAR(50) = 'Trompo',
@description VARCHAR(200) = 'Trompo para jugar',
@quantity INT = 5

AS

BEGIN TRY
BEGIN TRANSACTION
	
	IF (ISNULL(@name,'') = '' AND ISNULL(@name,'') = '' AND ISNULL(@name,0) = 0)
		RAISERROR('Error: No se puede ingresar datos vacios a la tabla [dbo].[Products]. ',16,0);


	INSERT INTO [dbo].[Products] ([name],[description],[quantity])
	VALUES (@name, @description, @quantity)

COMMIT TRANSACTION

END TRY

BEGIN CATCH
--Getting the error description
	IF @@TRANCOUNT > 0
        BEGIN
            ROLLBACK TRANSACTION;
        END

        EXECUTE [dbo].[PrintErrorLog];
END CATCH

