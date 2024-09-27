/**
 * 190. �ߵ�������λ
    �ߵ������� 32 λ�޷��������Ķ�����λ��
    00000010100101000001111010011100 �� 00111001011110000010100101000000
    �� 43261596 �� 964176192
 *
 * https://leetcode-cn.com/problems/reverse-bits/
 * 84 ms , ������ javascript �ύ�л����� 71.95% ���û�
 */

const reverseBits = ( n ) => {

    let res = 0
    let count = 32

    while (count--) {
        res *= 2
        res += n & 1
        n = n >> 1
    }
    return res
}

const reverseBits2 = ( n ) => {

    let res = 0

    for(let i = 0; i < 32; i++)
    {
        res <<= 1
        res |= n & 1
        n >>= 1
    }

    return res >>> 0;
}
