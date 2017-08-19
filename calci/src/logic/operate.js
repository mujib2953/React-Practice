import Big from 'big.js';

export default function oprate( p_num_1, p_num_2, operation ) {
    const one = Big( p_num_1 );
    const two = Big( p_num_2 );

    if( operation === '+' )
        return one.plus( two ).toString();

    if( operation === '-' )
        return one.minus( two ).toString();

    if( operation === 'x' )
        return one.times( two ).toString();

    if( operation === '÷' )
        return one.div( two ).toString();

    if( operation === '%' )
        return one.mod( two ).toString();

    throw Error( `Unknown Operation :: '${ operation }'` );
}