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
}

interface Category {
    /** Uniquely identifies the category */
    name: string;
    /** Classification level from 1 to 5 (highest) */
    level: number;
}

interface Tag {
    name: string;
    order: number;
}
