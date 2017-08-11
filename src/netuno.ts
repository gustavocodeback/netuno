import * as firebase from 'firebase';

export abstract class Netuno {
    
    // indica se o app já foi inicializado
    private static __init = false;

    /**
     * init
     * 
     * inicializa o firebase
     * 
     */
    public static init( config ) {

        // verifica se já iniciou
        if ( !Netuno.__init ) {
            firebase.initializeApp( config );
        }
        
        // seta como inicializado
        Netuno.__init = true;
    }
};

/* end of file */