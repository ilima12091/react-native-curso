import React, { useRef } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { RootStackParams } from '../../navigation/StackNavigator';
import { FullScreenLoader } from '../../components/fullScreenLoader/FullScreenLoader';
import { Button, Input } from '../../components/forms';
import { Gender, Product, Size } from '../../../domain/entities/product';
import { ProductImages } from '../../components/products/ProductImages';
import { getProductById, updateCreateProduct } from '../../../actions/products';
import { CameraAdapter } from '../../../config/adapters/camera.adapter';

interface ProductScreenProps extends StackScreenProps<
  RootStackParams,
  'ProductScreen'
> {}

export const ProductScreen = (props: ProductScreenProps) => {
  const { route } = props;
  const { productId } = route.params;
  const productIdRef = useRef(productId);
  const queryClient = useQueryClient();

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  const mutation = useMutation({
    mutationFn: async (data: Product) => {
      const result = await updateCreateProduct({
        ...data,
        id: productIdRef.current,
      });
      if (!result) throw new Error('Failed to update product');
      return result;
    },
    onSuccess: (data: Product) => {
      productIdRef.current = data.id;

      queryClient.invalidateQueries({
        queryKey: ['products', 'infinite'],
      });
      // queryClient.invalidateQueries({
      //   queryKey: ['products', data.id],
      // });
      queryClient.setQueryData(['product', data.id], data);
    },
  });

  if (!product) {
    return (
      <ScreenContainer title="Loading...">
        <FullScreenLoader />
      </ScreenContainer>
    );
  }

  const onPressTakePicture = async (
    values: Product,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const photos = await CameraAdapter.pickImageFromLibrary();

    setFieldValue('images', [...values.images, ...photos]);
  };

  return (
    <Formik initialValues={product} onSubmit={mutation.mutate}>
      {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
        <ScreenContainer
          title={values.title || 'Product'}
          subtitle={`Cost: ${values.price}`}
          rightActionIconName="image-outline"
          onPressRightAction={() => onPressTakePicture(values, setFieldValue)}
        >
          {isLoading ? (
            <FullScreenLoader />
          ) : (
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={120}
            >
              <ScrollView keyboardDismissMode="interactive">
                <ProductImages images={values.images} />
                <View className="gap-4 p-4">
                  <Input
                    placeholder="Title"
                    value={values?.title}
                    onChangeText={handleChange('title')}
                  />
                  <Input
                    placeholder="Slug"
                    value={values?.slug}
                    onChangeText={handleChange('slug')}
                  />
                  <Input
                    placeholder="Description"
                    value={values?.description}
                    onChangeText={handleChange('description')}
                    multiline
                  />
                  <View className="gap-4 flex-row">
                    <Input
                      placeholder="Cost"
                      className="flex-1"
                      value={values?.price.toString()}
                      onChangeText={handleChange('price')}
                      keyboardType="numeric"
                    />
                    <Input
                      placeholder="Stock"
                      className="flex-1"
                      value={values?.stock.toString()}
                      onChangeText={handleChange('stock')}
                      keyboardType="numeric"
                    />
                  </View>
                  <View className="flex-row">
                    {Object.values(Size).map(size => (
                      <Button
                        key={size}
                        label={size}
                        className={`rounded-none border-none flex-1 ${values?.sizes?.includes(size) ? '' : 'opacity-60'}`}
                        onPress={() => {
                          setFieldValue(
                            'sizes',
                            values.sizes.includes(size)
                              ? values.sizes.filter(s => s !== size)
                              : [...values.sizes, size],
                          );
                        }}
                      />
                    ))}
                  </View>
                  <View className="flex-row">
                    {Object.values(Gender).map(gender => (
                      <Button
                        key={gender}
                        label={gender}
                        className={`rounded-none border-none flex-1 ${values?.gender.startsWith(gender) ? '' : 'opacity-60'}`}
                        onPress={() => setFieldValue('gender', gender)}
                      />
                    ))}
                  </View>
                  <Button
                    label="Save"
                    onPress={() => handleSubmit()}
                    disabled={mutation.isPending}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </ScreenContainer>
      )}
    </Formik>
  );
};
