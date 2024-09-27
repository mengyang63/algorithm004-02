/**
 * 860. ����ˮ����
 ������ˮ̯�ϣ�ÿһ������ˮ���ۼ�Ϊ?5?��Ԫ��  �˿��Ŷӹ�����Ĳ�Ʒ�������˵� bills ֧����˳��һ�ι���һ����
 ÿλ�˿�ֻ��һ������ˮ��Ȼ�����㸶 5 ��Ԫ��10 ��Ԫ�� 20 ��Ԫ��������ÿ���˿���ȷ���㣬Ҳ����˵��������ÿλ�˿�����֧�� 5 ��Ԫ��
 ע�⣬һ��ʼ����ͷû���κ���Ǯ��  ������ܸ�ÿλ�˿���ȷ���㣬����?true?�����򷵻� false?��
 [5,5,5,10,20] -> true,   [5,5,10,10,20] -> false
 *
 * https://leetcode-cn.com/problems/lemonade-change/
 *
 * 1. 68 ms , ������ javascript �ύ�л����� 96.32% ���û�
 */

const lemonadeChange = (bills) => {

    let five = 0
    let ten = 0
    let i = 0

    while (bills[i]) {

        if ( bills[i] === 5)
            five++

        else if( bills[i] === 10) {

            if (five === 0)
                return false
            else {
                five--
                ten++
            }
        }
        else {
            if (ten > 0 && five > 0) {
                ten--
                five--
            }
            else if (five >= 3)
                five -= 3
            else
                return false
        }
        i++
    }

    return true
}
