import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import ListProductService from '../services/ListProductsService';
import RemoveProductService from '../services/RemoveProductsService';
import ShowProductService from '../services/ShowProductsService';
import UpdateProductService from '../services/UpdateProductsService';

class ProductsController {
    public async index(req: Request, res: Response) {
        const products = await new ListProductService().execute();

        return res.json(products);
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;
        const product = await new ShowProductService().execute({ id: parseInt(id) });

        return res.json(product);
    }

    public async create(req: Request, res: Response) {
        const { name, price, quantity } = req.body;
        const product = await new CreateProductService().execute({ name, price: parseInt(price), quantity: parseInt(quantity) });

        return res.json(product);
    }

    public async update(req: Request, res: Response) {
        const { name, price, quantity } = req.body;
        const { id } = req.params;

        const product = await new UpdateProductService().execute({ id: parseInt(id), name, price: parseInt(price), quantity: parseInt(quantity) });

        return res.json(product);
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        await new RemoveProductService().execute({ id: parseInt(id) });

        return res.json({ message: 'Produto removido com sucesso!' });
    }
}

export default ProductsController;
