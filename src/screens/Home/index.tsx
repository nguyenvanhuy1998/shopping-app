import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    StyleSheet,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { dummyData } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import Card from "./components/Card";
import MasonryList from "reanimated-masonry-list";
import { BlurView } from "expo-blur";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../../components/CustomBackdrop";
import FilterView from "../../components/FilterView";

const Home = () => {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const openFilterModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleItemCategory = (index) => {
        setCategoryIndex(index);
    };
    const renderItemCategory = ({ item, index }) => {
        const isSelected = categoryIndex === index;
        return (
            <TouchableOpacity
                style={{
                    ...styles.itemCategory,
                    backgroundColor: isSelected ? colors.primary : colors.card,
                    borderWidth: isSelected ? 0 : 1,
                    borderColor: colors.border,
                }}
                onPress={() => handleItemCategory(index)}
            >
                <Text
                    style={{
                        ...styles.nameCategory,
                        color: isSelected ? colors.background : colors.text,
                        opacity: isSelected ? 1 : 0.5,
                    }}
                >
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };
    const renderMasonryItem = (item, i) => {
        return (
            <View style={styles.rootMasonryItem}>
                <View
                    style={{
                        ...styles.masonryItem,
                        aspectRatio: i === 0 ? 1 : 2 / 3,
                    }}
                >
                    <Image
                        source={{
                            uri: item.imageUrl,
                        }}
                        resizeMode="cover"
                        style={StyleSheet.absoluteFill}
                    />
                    {/* Masonry Item Content Top */}
                    <View style={(StyleSheet.absoluteFill, { padding: 12 })}>
                        <View style={styles.masonryItemContentTop}>
                            <Text
                                style={{
                                    ...styles.masonryItemContentTitle,
                                    color: colors.text,
                                }}
                            >
                                {item.title}
                            </Text>
                            <View
                                style={{
                                    ...styles.favorite,
                                    backgroundColor: colors.background,
                                }}
                            >
                                <Icons
                                    name="favorite-border"
                                    size={20}
                                    color={colors.text}
                                />
                            </View>
                        </View>
                    </View>
                    {/* FlexOne */}
                    <View style={styles.flexOne} />
                    {/* Masonry Item Content Bottom */}
                    <BlurView
                        style={styles.masonryItemContentBottom}
                        intensity={20}
                    >
                        <Text
                            style={styles.masonryItemContentBottomPrice}
                            numberOfLines={1}
                        >
                            ${item.price}
                        </Text>
                        <TouchableOpacity
                            style={styles.masonryItemContentBottomAction}
                        >
                            <Icons
                                name="add-shopping-cart"
                                size={20}
                                color={"#000"}
                            />
                        </TouchableOpacity>
                    </BlurView>
                </View>
            </View>
        );
    };
    return (
        <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={styles.container}>
                {/* Header  */}
                <View style={styles.header}>
                    <Image
                        source={{
                            uri: dummyData.AVATAR_URL,
                        }}
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                    <View style={styles.content}>
                        <Text
                            style={{ ...styles.title, color: colors.text }}
                            numberOfLines={1}
                        >
                            Hi, James 👋
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={{ ...styles.subTitle, color: colors.text }}
                        >
                            Discover fashion that suit your style
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ ...styles.action, borderColor: colors.border }}
                    >
                        <Icons
                            name="notifications"
                            color={colors.text}
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
                {/* Filter  */}
                <View style={styles.filter}>
                    <TouchableOpacity
                        style={{ ...styles.search, borderColor: colors.border }}
                    >
                        <Icons
                            name="search"
                            size={24}
                            color={colors.text}
                            style={styles.icon}
                        />
                        <Text
                            style={{
                                ...styles.placeholder,
                                color: colors.text,
                            }}
                        >
                            Search
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={openFilterModal}
                        style={{
                            ...styles.action,
                            backgroundColor: colors.primary,
                        }}
                    >
                        <Icons
                            name="tune"
                            color={colors.background}
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
                {/* Collections*/}
                <View style={styles.collections}>
                    {/* Title bar */}
                    <View style={styles.row}>
                        <Text style={styles.titleCollections}>
                            New Collections
                        </Text>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card */}
                    <View style={styles.card}>
                        <Card
                            price={130}
                            imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        />
                        <View style={styles.flexOneGap12}>
                            <Card
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            />
                            <Card
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            />
                        </View>
                    </View>
                </View>
                {/* Categories */}
                <FlatList
                    data={dummyData.CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categories}
                    renderItem={renderItemCategory}
                />
                {/* MasonryList */}
                <MasonryList
                    data={dummyData.MASONRY_LIST_DATA}
                    numColumns={2}
                    contentContainerStyle={styles.masonry}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => renderMasonryItem(item, i)}
                    onEndReachedThreshold={0.1}
                />
            </SafeAreaView>
            {/* Bottom Sheet Modal */}
            <BottomSheetModal
                snapPoints={["85%"]}
                index={0}
                ref={bottomSheetModalRef}
                backdropComponent={(props) => <CustomBackdrop {...props} />}
            >
                <FilterView />
            </BottomSheetModal>
        </ScrollView>
    );
};

export default Home;
