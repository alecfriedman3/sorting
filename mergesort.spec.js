describe('Split', function(){

    it('handles an array with 2 elements', function(){
    expect( split([0,4]) ).toEqual( [[0],[4]] );
    });

    it('handles an array with even number of elements > 2', function(){
    expect( split([0,4, 5, 8, 10, 12, 45, 94]) ).toEqual( [[0,4, 5, 8],[10, 12, 45, 94]] );
    });

    it('handles an array with odd number of elements', function(){
    expect( split([0,4, 5, 8, 10, 12, 45]) ).toEqual( [[0,4, 5],[8, 10, 12, 45]] );
    });
});

describe('Merge', function(){

    it('Merges two arrays in order', function(){
    expect( merge([1,3,6], [2, 3, 4, 7]) ).toEqual( [1, 2, 3, 3, 4, 6, 7] );
    });
});


describe('Merge Sort', function(){

    it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
    });

    it('merges an array', function(){
    expect( mergeSort([6,8,10,2,5,4]) ).toEqual( [2,4,5,6,8,10] );
    });
});
