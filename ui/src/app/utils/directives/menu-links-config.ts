const DefaultLinks = [
    { label: "Home", path: "home" },
    { label: "My Stores", path: "store/list" },
    { label: "About Us", path: "about-us" },
    { label: "Contact Us", path: "contact-us" }
];

export const MenuLinksConfig = {
    Home: [...DefaultLinks],
    AboutUs: [...DefaultLinks],
    ContactUs: [...DefaultLinks],
    UserProfile: [...DefaultLinks],
    Login: [
        { label: "Home", path: "home" },
        { label: "Login", path: "login" },
        { label: "Register", path: "register" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }],
    Register: [
        { label: "Home", path: "home" },
        { label: "Login", path: "login" },
        { label: "Register", path: "register" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }],
    StoreList: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    NewStore: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    StoreDetails: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Store Details", path: "store/:storeId" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    GroceryList: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Store Details", path: "store/:storeId" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    NewGrocery: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Store Details", path: "store/:storeId" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    GroceryDetails: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Store Details", path: "store/:storeId" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Grocery Details", path: "store/:storeId/grocery/:groceryId" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ]
}