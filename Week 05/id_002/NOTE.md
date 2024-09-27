# NOTE

## 参考链接

### 12. 动态规划
* [递归代码模板](http://shimo.im/docs/DjqqGCT3xqDYwPyY/)
* [分治代码模板](http://shimo.im/docs/3xvghYh3JJPKwdvt/)
* [动态规划定义](https://en.wikipedia.org/wiki/Dynamic_programming)
* [MIT 动态规划课程最短路径算法](https://www.bilibili.com/video/av53233912?from=search&seid=2847395688604491997)
* [三角形最小路径和(top-down, bottom-up)](https://leetcode.com/problems/triangle/discuss/38735/Python-easy-to-understand-solutions-(top-down-bottom-up))
* [一个方法团灭 6 道股票问题](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/)

## 代码模板

### 递归代码模板
* Python 代码模板
    ```Python
    def recursion(level, param1, param2, ...): 
        # recursion terminator 
        if level > MAX_LEVEL: 
        process_result 
        return 

        # process logic in current level 
        process(level, data...) 

        # drill down 
        self.recursion(level + 1, p1, ...) 

        # reverse the current level status if needed
    ```
* Java 代码模板
    ```Java
        public void recur(int level, int param) { 

        // terminator 
        if (level > MAX_LEVEL) { 
            // process result 
            return; 
        } 

        // process current logic 
        process(level, param); 

        // drill down 
        recur( level: level + 1, newParam); 

        // restore current status 
        
        }
        ```

### 分治代码模板
* Python 代码模板
    ```Python
        def divide_conquer(problem, param1, param2, ...): 
            # recursion terminator 
            if problem is None: 
                print_result 
                return 

            # prepare data 
            data = prepare_data(problem) 
            subproblems = split_problem(problem, data) 

            # conquer subproblems 
            subresult1 = self.divide_conquer(subproblems[0], p1, ...) 
            subresult2 = self.divide_conquer(subproblems[1], p1, ...) 
            subresult3 = self.divide_conquer(subproblems[2], p1, ...) 
            …

            # process and generate the final result 
            result = process_result(subresult1, subresult2, subresult3, …)
                
            # revert the current level states
    ```

## DP方程
- [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/)
```
    爬楼梯相关DP方程及变形情况
    
    1. 1, 2 一步两步
        DP
            a. 重复子问题
                f[i] = f[i - 1] + f[i - 2]
            b. 状态数组定义
                f[i]
            c. DP方程
                f[i] = f[i - 1] + f[i - 2]

    2. 1,2,3 一步两步三步
        DP
            a. 重复子问题
                f[i] = f[i - 1] + f[i - 2] + f[i - 3]
            b. 状态数组
                f[i]
            c. DP方程
                 f[i] = f[i - 1] + f[i - 2] + f[i - 3]

    3. x1, x2, xm... k步
        DP
            a. 重复子问题
                for j Range(len(m)) :
                    a[i] += a[i - m[j]]
            b. 定义状态数组
                f[i]
            c. DP方程
                for j range(len(m))
                    f[i] += f[i - m[j]]
```

- [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/description/)
```
    1. 暴力
    2. DP：
        a. 分治（子问题) 
            problem(i, j) = Min(sub(i + 1, j), sub(i + 1, j + 1)) + a[i, j]
        b. 状态数组定义 f[i, j]
        c. DP方程 
            f(i, j) = Min(f(i + 1, j), f(i + 1, j + 1)) + a[i, j]
```

- [53.最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
 ```
     1. 暴力
     2. DP：
         a. 分治（子问题） max_sum(i) = Max(max_sub(i - 1), 0) + a[i]
         b. 状态数组定义   f[i]
         c. DP方程        f[i] = Max(f[i - 1], 0) + a[i]
```

- [152.乘积最大子序列](https://leetcode-cn.com/problems/maximum-product-subarray/submissions/)
 ```
     1. 暴力
     2. DP：
         a. 分治（子问题)
             res = [number[i], number[i] * a[i - 1][0], number[i] * a[i - 1][1]]
             a[i] = [Min(res), Max(res)]
         b. 状态数组定义 f[i] = [minVal, maxVal]
         c. DP方程 
              res = [number[i], number[i] * f[i - 1][0], number[i] * f[i - 1][1]]
              f[i] = [Min(res), Max(res)]
```

- [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)
```
  1. 暴力
  2. BFS
  3. DP
        a. 分治（子问题）
        b. 状态数组定义: f(n) = min(f(n - k), for(k in [1,2,5])) + 1
        c. DP方程
 ```

- [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
```
  DP:
    a. 分治（子问题）a[i] = [a[i - 1][1] + number[i], Max(a[i -1][0], a[i - 1][1])];
    b. 状态数组： f[i] = [0, 1]； 0：偷， 1：不偷
    c. DP 方程： f[i] = [f[i - 1][1] + number[i], Math.max(f[i -1][0], f[i - 1][1])];
```
* [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
* [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
* [123. 买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)
* [188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)

```
DP:（122 不考虑交易次数）
    a. 重复子问题
        max_profrit[i][0] = Max(max_profrit[i - 1][1] + prices[i], max_profrit[i - 1][0])
        max_profrit[i][1] = Max(max_profrit[i - 1][0] - prices[i], max_profrit[i - 1][1])
    b. 定义状态数组
        f[i] = [0, 1]
        0：代表不持有股票
        1: 代表持有股票
    c. DP方程
        f[i][0] = Max(f[i - 1][1] + prices[i], f[i - 1][0])
        f[i][1] = Max(f[i - 1][0] - prices[i], f[i - 1][1])

DP:(1次交易)
    a. 重复子问题
        max_profrit[i][0] = Max(max_profrit[i - 1][1] + prices[i], max_profrit[i - 1][0])
        max_profrit[i][1] = Max(- prices[i], max_profrit[i - 1][1])
    b. 定义状态数组
        f[i] = [0, 1]
            0 : 不持有股票
            1 : 持有股票
    c. DP方程
        f[i][0] = Max(f[i - 1][1] + prices[i], f[i - 1][0])
        f[i][1] = Max(- prices[i], f[i - 1][1])

DP: (123 最多2笔交易)
    a. 重复子问题
        maxPro[i][0][0] = maxPro[i - 1][0][0]
        maxPro[i][0][1] = Math.max(maxPro[i - 1][0][1], maxPro[i - 1][0][0] - prices[i])

        maxPro[i][1][0] = Math.max(maxPro[i - 1][1][0], maxPro[i - 1][0][1] + prices[i])
        maxPro[i][1][1] = Math.max(maxPro[i - 1][1][1], maxPro[i - 1][1][0] - prices[i])

        maxPro[i][2][0] = Math.max(maxPro[i - 1][2][0], maxPro[i - 1][1][1] + prices[i])
    b. 定义状态数组
        f[i][k][j]
            i: 第几天
            k: 
                0： 0次交易
                1： 第一次交易
                2： 第二次交易
            j: 
                0: 没有持有股票
                1： 持有股票
    c. DP方程
        f[i][0][0] = f[i - 1][0][0]
        f[i][0][1] = Max(f[i - 1][0][1], f[i - 1][0][0] - prices[i])

        f[i][1][0] = Max(f[i - 1][1][0], f[i - 1][0][1] + prices[i])
        f[i][1][1] = Max(f[i - 1][1][1], f[i - 1][1][0] - prices[i])

        f[i][2][0] = Max(f[i - 1][2][0], f[i - 1][1][1] + prices[i])


DP: (188 最多k笔交易)
    a. 重复子问题
        for k range(K) :
            k === 0
            maxPro[i][0][0] = maxPro[i - 1][0][0]
            maxPro[i][0][1] = Math.max(maxPro[i - 1][0][1], maxPro[i - 1][0][0] - prices[i])
            k > 0
            maxPro[i][k][0] = Math.max(maxPro[i - 1][k][0], maxPro[i - 1][k - 1][1] + prices[i])
            maxPro[i][k][1] = Math.max(maxPro[i - 1][k][1], maxPro[i - 1][k][0] - prices[i])

    b. 定义状态数组
        f[i][k][j]
            i: 第几天
            k: 
                0： 0次交易
                1： 第一次交易
                2： 第二次交易
            j: 
                0: 没有持有股票
                1： 持有股票
    c. DP方程
        for k Range(k) :
            k === 0
            f[i][0][0] = f[i - 1][0][0]
            f[i][0][1] = Max(f[i - 1][0][1], f[i - 1][0][0] - prices[i])

            k > 0
            f[i][k][0] = Max(f[i - 1][k][0], f[i - 1][k - 1][1] + prices[i])
            f[i][k][1] = Max(f[i - 1][k][1], f[i - 1][k][0] - prices[i])
```
- [32.最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/submissions/)
```
我们用 dp[i] 表示以 i 结尾的最长有效括号；
当 s[i] 为 (,dp[i] 必然等于 0，因为不可能组成有效的括号；
那么 s[i] 为 )
2.1 当 s[i-1] 为 (，那么 dp[i] = dp[i-2] + 2；
2.2 当 s[i-1] 为 ) 并且 s[i-dp[i-1] - 1] 为 (，那么 dp[i] = dp[i-1] + 2 + dp[i-dp[i-1]-2]；....()) dp[i - 1]前一个字符 '('
2.2 注意边界问题 dp[i - 2] 与 dp[i - dp[i - 1] - 2] 越界问题
DP:
    a. 重复子问题
        dp[i] = dp[i - 2] + 2 || dp[i-1] + 2 + dp[i-dp[i-1]-2]      
    b. 定义状态数组
        fn[i]
    c. DP方程
        f[i] = dp[i - 2] + 2 || dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
```

## 实战题目
| Week06 | 第12课 | 动态规划 |
| :---: | --- | --- |
| [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/) | DP | JavaScript |
| [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/description/) | DFS\DP | JavaScript |
| [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/description/) | DP | JavaScript |
| [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/) | DP | JavaScript |
| [152. 乘积最大子序列](https://leetcode-cn.com/problems/maximum-product-subarray/description/) | DP | JavaScript |
| [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/) | | JavaScript |
| [213. 打家劫舍 II](https://leetcode-cn.com/problems/house-robber-ii/description/) | | JavaScript |
| [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/#/description) | | JavaScript |
| [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/) | | JavaScript |
| [123. 买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/) | | JavaScript |
| [309. 最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | | JavaScript |
| [188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/) | | JavaScript |
| [714. 买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | | JavaScript |
| [32. 最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/) | DP | JavaScript |
| [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/) | DP | JavaScript |
| [91. 解码方法](https://leetcode-cn.com/problems/decode-ways/) | DP | JavaScript |
| [221. 最大正方形](https://leetcode-cn.com/problems/maximal-square/) | | JavaScript |
| [363. 矩形区域不超过 K 的最大数值和](https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/) | | JavaScript |
| [403. 青蛙过河](https://leetcode-cn.com/problems/frog-jump/) | | JavaScript |
| [410. 分割数组的最大值](https://leetcode-cn.com/problems/split-array-largest-sum/) | | JavaScript |
| [552. 学生出勤记录 II](https://leetcode-cn.com/problems/student-attendance-record-ii/) | | JavaScript |
| [621. 任务调度器](https://leetcode-cn.com/problems/task-scheduler/) | | JavaScript |
| [647. 回文子串](https://leetcode-cn.com/problems/palindromic-substrings/) | | JavaScript |
| [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/) | | JavaScript |
| [312. 戳气球](https://leetcode-cn.com/problems/burst-balloons/) | | JavaScript |
| [746. 使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/) | | JavaScript |
| 高级 DP| 标签 | 实现 |
| [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/submissions/) | | JavaScript |
| [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/) | 重点DP | JavaScript |
| [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/) | | JavaScript |
| [45. 跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/submissions/) | | JavaScript |
| [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/) | | JavaScript | 
| [63. 不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/submissions/) | DFS\DP | JavaScript |
| [980. 不同路径 III](https://leetcode-cn.com/problems/unique-paths-iii/) | | JavaScript |
| [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/) | | JavaScript |
| [518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/) | | JavaScript |
