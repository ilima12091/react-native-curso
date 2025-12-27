import { isAxiosError } from 'axios';
import { tesloApi } from '../../config/api/tesloApi';
import { Product } from '../../domain/entities/product';
import { TesloProduct } from '../../infrastructure/interfaces/testlo-products.response';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';

export const updateCreateProduct = async (
  product: Partial<Product>,
): Promise<Product> => {
  product.stock = Number(product.stock);
  product.price = Number(product.price);

  if (Number.isNaN(product.stock) || Number.isNaN(product.price)) {
    throw new TypeError('Stock and price must be valid numbers');
  }

  if (product.id && product.id !== 'new') {
    return await updateProduct(product);
  }

  return await createProduct(product);
};

const createProduct = async (product: Partial<Product>): Promise<Product> => {
  const { id, images = [], ...rest } = product;

  const checkedImages = prepareImages(images);

  try {
    const { data } = await tesloApi.post<TesloProduct>(`/products/${id}`, {
      images: checkedImages,
      ...rest,
    });

    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('axios error: ', error.response);
    }

    throw new Error(`Error updating product with id: ${id}`);
  }
};

const updateProduct = async (product: Partial<Product>) => {
  const { id, images = [], ...rest } = product;

  const checkedImages = prepareImages(images);

  try {
    const { data } = await tesloApi.patch<TesloProduct>(`/products/${id}`, {
      images: checkedImages,
      ...rest,
    });

    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('axios error: ', error.response);
    }

    throw new Error(`Error updating product with id: ${id}`);
  }
};

const prepareImages = (images: string[]) => {
  return images.map(image => image.split('/').pop());
};
