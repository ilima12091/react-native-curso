import { isAxiosError } from 'axios';
import { API_URL, tesloApi } from '../../config/api/tesloApi';
import { Product } from '../../domain/entities/product';
import { TesloProduct } from '../../infrastructure/interfaces/testlo-products.response';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';
import { StorageAdapter } from '../../config/adapters/storage.adapter';
import ReactNativeBlobUtil from 'react-native-blob-util';
import FormData from 'form-data';

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

  const checkedImages = await prepareImages(images);

  try {
    const { data } = await tesloApi.post<TesloProduct>(`/products`, {
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

  const checkedImages = await prepareImages(images);

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

const prepareImages = async (images: string[]) => {
  const fileImages = images.filter(image => image.startsWith('file://'));
  const currentImages = images.filter(image => !image.startsWith('file://'));

  if (fileImages.length > 0) {
    // const uploadPromises = [uploadWithBlobUtil(fileImages[0])];
    // const uploadPromises = [uploadImage(fileImages[0])];
    const uploadPromises = fileImages.map(image => uploadWithBlobUtil(image));

    const uploadedImages = await Promise.all(uploadPromises);

    currentImages.push(...uploadedImages);
  }

  return currentImages.map(image => image.split('/').pop());
};

const uploadImage = async (imageURI: string) => {
  const formData = new FormData();

  const filename = imageURI.split('/').pop() ?? `photo-${Date.now()}.jpg`;

  formData.append('file', {
    uri: imageURI,
    type: 'image/jpeg',
    name: filename,
  });

  try {
    const { data } = await tesloApi.post<{ image: string }>(
      '/files/product',
      formData,
      {
        timeout: 60000,
        transformRequest: d => d,
        headers: {
          'content-type': 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return data.image;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('axios error: ', error.response);
    }
    console.log('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};

const uploadWithBlobUtil = async (imageURI: string) => {
  const token = await StorageAdapter.getItem('token');
  const path = imageURI.replace('file://', '');
  const filename = imageURI.split('/').pop() ?? `photo-${Date.now()}.jpg`;

  const res = await ReactNativeBlobUtil.fetch(
    'POST',
    `${API_URL}/files/product`,
    {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
    },
    [
      {
        name: 'file',
        filename,
        type: 'image/jpeg',
        data: ReactNativeBlobUtil.wrap(path),
      },
    ],
  );

  const json = res.json();
  return json.image as string;
};
