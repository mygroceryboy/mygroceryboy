export const MenuLinksConfig = {
    StoreList: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" }
    ],
    NewStore: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" }
    ],
    StoreDetails: [
        { label: "Store Details", path: "store/:storeId" },
        { label: "My Stores", path: "store/list" },
        { label: "Grocery List", path: "store/grocery/list" },
        { label: "Add Grocery", path: "store/grocery/new" }
    ],
    Home: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ]
}