describe('Bubble Sort', function(){

    beforeEach(function () {
        spyOn(window, 'swap').and.callThrough();
    });


    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('works on array of size 1', function() {
        let array = [3];
        expect( bubbleSort(array) ).toEqual([3]);
    });

    it('works on array with multiple items', function() {
        let array = [3, 9, 2, 125, 35, 10];
        expect( bubbleSort(array) ).toEqual([2, 3, 9, 10, 35, 125]);
    });

    it('works on array with multiple items with strings', function() {
        let array = ["hello", "there", "it's", "me"];
        expect( bubbleSort(array) ).toEqual(['hello', "it's", "me", "there"]);
    });

    it('swaps items 6 times', function() {
        let array = [4, 3, 2 , 1];
        bubbleSort(array);
        expect(window.swap.calls.count()).toEqual(6);
    });
  });