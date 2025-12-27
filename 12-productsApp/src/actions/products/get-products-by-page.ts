import { tesloApi } from '../../config/api/tesloApi';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';
import type { Product } from '../../domain/entities/product';
import type { TesloProduct } from '../../infrastructure/interfaces/testlo-products.response';

export const getProductsByPage = async (
  page: number,
  limit: number = 20,
): Promise<Product[]> => {
  console.log({
    page,
    limit,
  });
  console.log('FETCH PAGE', page, 'offset', page * limit, 'time', Date.now());

  try {
    const { data } = await tesloApi.get<TesloProduct[]>(
      `/products?offset=${page * limit}&limit=${limit}`,
    );

    const products = data.map(ProductMapper.tesloProductToEntity);

    console.log('new products', products);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
