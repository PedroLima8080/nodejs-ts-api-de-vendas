import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}

class CreateProductService {
    public async execute({ name, price, quantity }: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        let product = await productRepository.findByName(name);

        if (product) {
            throw new AppError('Já existe um produto com esse nome!');
        }

        product = productRepository.create({
            name,
            price,
            quantity,
        });
        await productRepository.save(product);

        return product;
    }
}

export default CreateProductService;
