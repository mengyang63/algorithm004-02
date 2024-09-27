/** 322. 零钱兑换 **/
/*
 * 1. 暴力解法 递归 指数级
 * 2. BFS
 * 3. DP ：
 *    a. subProblems
 *    b. DP array: f(n) = min(f(n - k), for k in [1,2,5]) + 1;
 *    c. DP 方程
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let Max = amount + 1;
    let dp = Array(amount + 1).fill(amount + 1);

    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j ++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i] , dp[i - coins[j]] + 1);
            }
        }
    } 

    return dp[amount] >= Max ? -1 : dp[amount];
};

/**
 * BFS 方法
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    let queue = [amount];
    let visited = new Set();
    let dep = 0;
   
    while(queue.length) {
        let tmp = [];
        for(let i = 0; i < queue.length; i ++) {
            for( let j = coins.length - 1; j >= 0; j --) {
                let mount = queue[i] - coins[j];
                if (mount === 0) return dep + 1;
                if (mount < 0) continue;

                if (!visited.has(mount)) {
                    visited.add(mount);
                    tmp.push(mount);
                }
            }
        }

        dep ++;
        queue = tmp;
    }

    return -1;
};
