# sleepy-sort
JS Implementation of [Sleep Sort](https://www.cs.princeton.edu/courses/archive/fall13/cos226/lectures/52Tries.pdf) on the Array Prototype. Just for fun.

It will mutate the array.

## Example Usage
The method will return the time it will take to finishing sorting.
```
let timeToSort = [5,4,3,2,1].sleepSort();
```

The method by default sorts in ascending order, set the first parameter to `false` to sort in descending order.

The method accepts a callback which is passed the result on sorting completion.

```
let timeToSort = [5,4,3,2,1].sleepSort(true, function(result){
    console.log('Sorted Array:' result)
});

console.log('time sleepysort will take (ms):', timeToSort);
```

## Why make this?
Why not? Programming for fun should be encouraged.

## Why use this?
Please don't use this.