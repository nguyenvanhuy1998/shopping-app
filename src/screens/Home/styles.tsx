import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    //Common
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    action: {
        width: 52,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 52,
        borderWidth: 1,
    },
    flexOne: {
        flex: 1,
    },
    flexOneGap12: {
        flex: 1,
        gap: 12,
    },

    // Container
    container: {
        gap: 24,
        paddingVertical: 24,
    },
    // Header
    header: {
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    avatar: {
        width: 52,
        aspectRatio: 1,
        borderRadius: 52,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    subTitle: {
        marginTop: 8,
        opacity: 0.75,
    },
    // Filter
    filter: {
        flexDirection: "row",
        paddingHorizontal: 24,
        gap: 12,
    },
    search: {
        flex: 1,
        height: 52,
        borderRadius: 52,
        borderWidth: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        flexDirection: "row",
        gap: 12,
    },
    icon: {
        opacity: 0.5,
    },
    placeholder: {
        flex: 1,
        fontSize: 16,
        opacity: 0.5,
    },

    // Collections
    collections: {
        paddingHorizontal: 24,
    },
    titleCollections: {
        fontSize: 20,
        fontWeight: "700",
    },
    card: {
        flexDirection: "row",
        height: 200,
        gap: 12,
        marginTop: 12,
    },
    cardItem: {
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
    },
    imageCardItem: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    priceCardItem: {
        position: "absolute",
        left: 16,
        top: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: 100,
    },
    valuePriceCardItem: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
    },

    // Categories
    categories: {
        paddingHorizontal: 16,
        gap: 12,
    },
    itemCategory: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 100,
    },
    nameCategory: {
        fontSize: 16,
        fontWeight: "600",
    },
    // Masonry List
    masonry: {
        paddingHorizontal: 12,
    },
    rootMasonryItem: {
        padding: 6,
    },
    masonryItem: {
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
    },
    masonryItemContentTop: {
        flexDirection: "row",
        padding: 4,
        gap: 8,
    },
    masonryItemContentTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
    },
    favorite: {
        height: 32,
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    masonryItemContentBottom: {
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        padding: 8,
        borderRadius: 100,
        overflow: "hidden",
    },
    masonryItemContentBottomPrice: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginLeft: 4,
    },
    masonryItemContentBottomAction: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: "#fff",
    },
});
export default styles;
