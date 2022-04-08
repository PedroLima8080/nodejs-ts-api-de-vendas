import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    public async findByName(name: string): Promise<Product | undefined> {
        return await this.findOne({
            where: {
                name,
            },
        });
    }
    public async findById(id: number): Promise<Product | undefined> {
        return await this.findOne({
            where: {
                id,
            },
        });
    }
}

export default ProductRepository;
