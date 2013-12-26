enum Origin {
    LOCAL, IMPORTED
} 

/**
* Things that we sell 
*/
interface Product {
    /** 
     * Uniquely defines the product
     * This must be unique, then
     */
    name: string;
    /** Classification */
    category: Category;
    
    /** Used for indexing */
    tags: Tag[];
    
    /** Where it comes from */
    origin: Origin;
}

interface Ordered {
    /** position for sorting */
    order: number;
}

interface Category extends Ordered {
    /** Uniquely identifies the category */
    name: string;
    /** Classification level from 1 to 5 (highest) */
    level: number;
}
    
interface Tag extends Ordered {
    name: string;
}
