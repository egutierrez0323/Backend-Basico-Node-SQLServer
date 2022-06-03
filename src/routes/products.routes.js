import {Router} from 'Express';

import { GetProducts,CreateNewProduct,GetProductsById, GetCountProducts, DeleteProductsById,UpdateProducts } from '../controllers/products.controller';

const router = Router();

router.get('/products',GetProducts);

router.post('/products',CreateNewProduct);

router.put('/products/:id',UpdateProducts);
//debe estar primero que las rutas por parametros porque de lo contrario prioriza la ruta por parametro en vez de esta
router.get('/products/count',GetCountProducts);

router.get('/products/:id',GetProductsById);

router.delete('/products/:id',DeleteProductsById);




export default router;


