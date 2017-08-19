
import operate from './operate';
import isNumber from './isNumber';

/**
* Given a button name and a calculator data object, return an updated
* calculator data object.
*
* Calculator data object contains:
*   total:String      the running total
*   next:String       the next number to be operated on with the total
*   operation:String  +, -, etc.
*/
export default function calculate( p_obj, p_buttonName ) {
    console.log( p_obj );
    console.log( p_buttonName );

    if( p_buttonName === 'AC' ) {
        return {
            total: null,
            next: null,
            operation: null,
        }
    }

    if( isNumber( p_buttonName ) ) {

        if( p_buttonName === '0' && p_obj.next === '0' )
            return {};

        if( p_obj.operation ) {

            if( p_obj.next )
                return { next: p_obj.next + p_buttonName }

            return { next: p_buttonName }
        }

        if( p_obj.next ) {
            return {
                next: p_obj.next + p_buttonName,
                total: null
            }
        }

        return {
            next: p_buttonName,
            total: null
        }
    }

    if( p_buttonName === '.' ) {
        if( p_obj.next ) {

            if( p_obj.next.includes( '.' ) )
                return {}

            return {
                next: p_obj.next+ '.'
            }
        }

        if( p_obj.operation )
            return { next: '0.' };

        if( p_obj.total ) {

            if( p_obj.total.includes( '.' ) )
                return {};

            return { total: p_obj.total + '.' };
        }

        return { total: '0.' };
    }

    if( p_buttonName === '=' ) {

        if( p_obj.next && p_obj.operation ) {

            return {
                total: operate( p_obj.total, p_obj.next, p_obj.operation ),
                next: null,
                operation: null,
            }
        } else {
            // --- '=' without any opertion
            return {};
        }
    }

    if( p_buttonName == '+/-' ) {
        if ( p_obj.next )
            return { next: ( -1 * parseFloat( p_obj.next ) ).toString() };
        
        if ( p_obj.total )
            return { total: ( -1 * parseFloat( p_obj.total ) ).toString() };
        
        return {};
    }

    // User pressed an operation button and there is an existing operation
    if ( p_obj.operation ) {
        return {
            total: operate( p_obj.total, p_obj.next, p_obj.operation ),
            next: null,
            operation: p_buttonName,
        };
    }

    // The user hasn't typed a number yet, just save the operation
    if ( !p_obj.next )
        return { operation: p_buttonName };

    // save the operation and shift 'next' into 'total'
    return {
        total: p_obj.next,
        next: null,
        operation: p_buttonName,
    };
}