interface Product {
    /** Uniquely defines the product */
    name: string;
    /** Classification */
    category: Category;
}

interface Category {
    /** Uniquely identifies the category */
    name: string;
    /** Classification level from 1 to 5 (highest) */
    level: number;
}
