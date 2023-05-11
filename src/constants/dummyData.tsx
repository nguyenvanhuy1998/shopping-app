const AVATAR_URL =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const CATEGORIES = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Accessories 2",
    "Accessories 3",
    "Accessories 4",
];
const MASONRY_LIST_DATA = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
        title: "PUMA Everyday Hussle",
        price: 160,
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "PUMA Everyday Hussle",
        price: 180,
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
        title: "PUMA Everyday Hussle",
        price: 200,
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "PUMA Everyday Hussle",
        price: 180,
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "PUMA Everyday Hussle",
        price: 120,
    },
];
const MAX_PRICE = 500;
const COLORS = [
    {
        color: "#D93F3E",
        label: "Red",
        itemCount: 4,
    },
    {
        color: "#FFFFFF",
        label: "White",
        itemCount: 2,
    },
    {
        color: "#58AB51",
        label: "Green",
        itemCount: 6,
    },
    {
        color: "#FB8C1D",
        label: "Orange",
        itemCount: 10,
    },
    {
        color: "#D3B38D",
        label: "Tan",
        itemCount: 10,
    },
    {
        color: "#FDE737",
        label: "Yellow",
        itemCount: 10,
    },
];
const SLEEVES = [
    {
        id: "sortsleeve",
        label: "Sort Sleeve",
        itemCount: 20,
    },
    {
        id: "longsleeve",
        label: "Long Sleeve",
        itemCount: 100,
    },
    {
        id: "sleeveless",
        label: "Sleeve Less",
        itemCount: 60,
    },
];
const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

export default {
    AVATAR_URL,
    CATEGORIES,
    MASONRY_LIST_DATA,
    MAX_PRICE,
    COLORS,
    SLEEVES,
    SIZES,
};
