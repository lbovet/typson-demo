enum Origin {
    LOCAL, // From here
    IMPORTED // From elsewhere
} 

/**
* Thing that we sell.
*/
interface Product {
    /** 
     * Uniquely defines the _product_
     * This must be unique, then
     */
    name: string;

    category: Category; // Classification
    
    /** Used for indexing */
    tags?: Tag[];
    
    /** Where it comes from */
    origin?: Origin;
    
    /** Additional info */
    props: { [k:string]: string; };
}

interface Ordered {
    /** Position for sorting @type integer */
    order?: number;
}

interface Category extends Ordered {
    /** Uniquely identifies the category @pattern [A-Z][a-z][0-9]*/
    name: string;
    
    /** Classification level @minimum 1 @maximum 5 */
    level: number;
}
    
interface Tag extends Ordered {
    name: string;
}
