import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

interface IRequest {
    id: number;
}

class RemoveProductService {
    public async execute({ id }: IRequest): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findOne(id);

        if (!product) throw new AppError('Produto não encontrado');

        await productRepository.remove(product);
    }
}

export default RemoveProductService;
