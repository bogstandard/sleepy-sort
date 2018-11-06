require('./index.js');

let nums = [0,500,5,342,12,99,14,56,3000,90,80,70,60,50,40,30,20,10];
let expected = [0,500,5,342,12,99,14,56,3000,90,80,70,60,50,40,30,20,10].sort((a,b)=>{return a-b});

console.log('Starting Test..', 
             expected, '\ntime to take (ms):',
                nums.sleepSort(true, function(result){
                    console.log('Expected', expected);
                    console.log('Got     ', result);
                    console.log('Accuracy', result.map((n, i) => {
                        return n == expected[i] ? 1 : 0;
                    }));
                    console.log('Flawless', result.map((n, i) => {
                        return n == expected[i] ? 1 : 0;
                    }).filter((n, i, self)=>{return self.indexOf(n) == i}));
                    

                })
             );

