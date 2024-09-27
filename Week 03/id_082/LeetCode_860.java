/**
 * xxx 版权所有
 */
package week3;

/**
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 注意，一开始你手头没有任何零钱。
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 *
 * 输入：[5,5,5,10,20] 输出：true
 * 解释：
 * 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
 * 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
 * 由于所有客户都得到了正确的找零，所以我们输出 true。
 *
 * 输入：[10,10] 输出：false
 *
 * @version v1.0
 */
public class LeetCode860 {

	/**
	 * 收到 10 元时，首先考虑退 10+5 元的组合，没有再考虑退 5+5+5 的组合
	 * @param bills
	 * @return
	 */
	public boolean lemonadeChange(int[] bills) {
		int c5 = 0;
		int c10 = 0;
		for (int i=0; i<bills.length; i++) {
			if (bills[i] == 5) {
				c5 = c5 + 1;
			} else if (bills[i] == 10) {
				c10 = c10+1;
				c5 = c5-1;
			} else {
				if (c10 > 0) {
					c10 = c10 - 1;
					c5 = c5 - 1;
				} else {
					c5 = c5 - 3;
				}
			}

			if (c5 < 0) {
				return false;
			}
		}

		return true;
	}
}
