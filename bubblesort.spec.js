describe('Bubble Sort', function(){
    it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with two elements', function(){
    var arrayToSort = [2,1];
    var r2 = arrayToSort.sort();

    expect( bubbleSort(arrayToSort) ).toEqual( [1,2] );
    });

    it('handles a large array', function(){
    expect( bubbleSort([6,8,10,2,5,4]) ).toEqual( [2,4,5,6,8,10] );
    });
});