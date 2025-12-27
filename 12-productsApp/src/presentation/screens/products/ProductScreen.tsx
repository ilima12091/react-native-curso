import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StackScreenProps } from '@react-navigation/stack';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { RootStackParams } from '../../navigation/StackNavigator';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { FullScreenLoader } from '../../components/fullScreenLoader/FullScreenLoader';
import { Text } from '../../components/text/Text';
import { FlatList, ScrollView, View } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { Button, Input } from '../../components/forms';
import { Gender, Size } from '../../../domain/entities/product';
import { Formik } from 'formik';

interface ProductScreenProps extends StackScreenProps<
  RootStackParams,
  'ProductScreen'
> {}

export const ProductScreen = (props: ProductScreenProps) => {
  const { route } = props;
  const { productId } = route.params;
  const productIdRef = useRef(productId);

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  if (!product) {
    return (
      <ScreenContainer title="Loading...">
        <FullScreenLoader />
      </ScreenContainer>
    );
  }

  return (
    <Formik initialValues={product} onSubmit={value => console.log(value)}>
      {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
        <ScreenContainer
          title={values.title || 'Product'}
          subtitle={`Cost: ${values.price}`}
        >
          {console.log({
            values,
          })}
          {isLoading ? (
            <FullScreenLoader />
          ) : (
            <ScrollView>
              <FlatList
                data={values.images}
                keyExtractor={item => item}
                contentContainerClassName="gap-4"
                renderItem={({ item }) => (
                  <FadeInImage
                    uri={item}
                    className="w-[300px] h-[300px]"
                    style={{ resizeMode: 'cover' }}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
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
                  />
                  <Input
                    placeholder="Stock"
                    className="flex-1"
                    value={values?.stock.toString()}
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
                <Button label="Save" />
              </View>
            </ScrollView>
          )}
        </ScreenContainer>
      )}
    </Formik>
  );
};
