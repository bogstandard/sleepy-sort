module.exports = (function () {

    Array.prototype.sleepSort = function (order = true, cb = null) {

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // used for ascending sorts
        const spush = async (n) => {
            await sleep(n);
            this.shift();
            this.push(n);
        }

        // used for descending sorts
        const sunshift = async (n) => {
            await sleep(n);
            this.pop();
            this.unshift(n);
        }

        // iterate and sleep n before appending n
        let max = 0;
        this.forEach(n => {
            if (max < n) max = n;
            if (order) spush(n);
            else sunshift(n);
        });

        // await the largest of n to complete
        (async () => {
            await sleep(max);
            if(cb)
                cb(this); // perform callback on self
        })();

        return max; // return amount of ms it'll take

    };

})();