import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    name: string;

    @Column('int')
    price: number;

    @Column('int')
    quantity: number;

    @UpdateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;
