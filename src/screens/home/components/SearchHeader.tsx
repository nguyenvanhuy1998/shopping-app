import {
  HambergerMenu,
  Menu,
  SearchNormal,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {Button, Image, Input, Row, Section, Text} from '../../../components';
import {colors, iconSizes, images, spacings} from '../../../constants';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormSearch} from '../HomeScreen';

interface Props {
  initialValues?: FormSearch;
}
const Header = ({initialValues}: Props) => {
  const {control} = useForm<FormSearch>({
    defaultValues: initialValues,
  });
  return (
    <Section marginTop={spacings.space_16}>
      <Row>
        <Button
          typeButton="round"
          iconRound={<HambergerMenu color={colors.white} variant="TwoTone" />}
        />
        <Button
          typeButton="round"
          dimension={spacings.space_56}
          backgroundColor={colors.gray3}
          borderColor={colors.gray3}
          iconRound={
            <Image
              source={images.avatar}
              width={spacings.space_56}
              height={spacings.space_56}
            />
          }
        />
      </Row>
      <View style={styles.headingContainer}>
        <Text text="Welcome," typeText="Heading" size="medium" />
        <Text
          text="Our Fashions App"
          typeText="SubHeading"
          color={colors.desc}
        />
      </View>
      <Row marginTop={spacings.space_20} gap={spacings.space_16}>
        <Input
          typeInput="secondary"
          name="search"
          control={control}
          prefix={
            <SearchNormal1 size={iconSizes.small20} color={colors.dark} />
          }
          placeholder="Search..."
        />
        <Button
          typeButton="round"
          dimension={spacings.space_50}
          iconRound={<Menu color={colors.white} variant="TwoTone" />}
        />
      </Row>
    </Section>
  );
};

export default Header;
const styles = StyleSheet.create({
  headingContainer: {
    marginTop: spacings.space_20,
  },
});
