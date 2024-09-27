/**
 * 122. ������Ʊ�����ʱ�� II
 ����һ�����飬���ĵ�?i ��Ԫ����һ֧������Ʊ�� i ��ļ۸�
 ���һ���㷨�����������ܻ�ȡ�������������Ծ����ܵ���ɸ���Ľ��ף��������һ֧��Ʊ����
 [7,1,5,3,6,4] -> 7,  [1,2,3,4,5] -> 4,  [7,6,4,3,1] -> 0
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * 1. ֻ�ж��˾ͼ�����:  68 ms , ������ javascript �ύ�л����� 89.22% ���û�
 */

const maxProfit = (prices) => {

    let max = 0

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] > prices[i-1])
            max += prices[i] - prices[i-1]
    }
    return max
}