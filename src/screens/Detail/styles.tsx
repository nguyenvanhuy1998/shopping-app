import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Common
    flexOne: {
        flex: 1,
    },
    btn: {
        width: 52,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 52,
        borderWidth: 1,
        borderColor: "#fff",
    },
    // safeArea
    safeArea: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    // header
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        gap: 8,
    },
    // Bottom Sheet
    bottomSheet: {
        marginHorizontal: 20,
    },
    backgroundBottomSheet: {
        borderRadius: 24,
    },

    bodyBottomSheet: {
        padding: 16,
        gap: 16,
        flex: 1,
    },
    nameProduct: {
        fontSize: 20,
        fontWeight: "600",
    },
    viewRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    viewRating: {
        flexDirection: "row",
        gap: 2,
    },
    countReviews: {
        fontSize: 14,
        opacity: 0.5,
        marginTop: 4,
    },
    countProduct: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        padding: 6,
        borderRadius: 100,
    },
    btnCount: {
        width: 34,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 34,
    },
    count: {
        fontSize: 16,
        fontWeight: "600",
    },
    // Sizes
    titleSizes: {
        flexDirection: "row",
        alignItems: "center",
    },
    model: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    sizeGuide: {
        opacity: 0.5,
    },
    typeSizes: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 6,
    },
    btnItemType: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 44,
    },
    itemType: {
        fontSize: 16,
        fontWeight: "600",
    },
    titleDescription: {
        fontSize: 16,
        fontWeight: "600",
    },
    subDescription: {
        marginTop: 6,
        opacity: 0.75,
    },

    // Total && Add to cart
    footer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    titleTotal: {
        opacity: 0.75,
    },
    valueTotal: {
        marginTop: 4,
        fontSize: 18,
        fontWeight: "600",
    },
    btnAddToCart: {
        height: 64,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "row",
        padding: 12,
    },
    titleAddToCart: {
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 16,
    },
    iconAddToCart: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default styles;
