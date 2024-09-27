/*
    Intution:
        ��������¥�ݣ�ÿ�ο�����һ����������������ͬ���ǣ�����Ǵ���26����27����
        a. problem(i) = problem(i-1) + int.Parse(substring(i-1, i))<27?problem(i-2):0
        û�п���current Ϊ0��������ˡ�
        b. ����״̬ dp(i)
        C. dp(i) = dp(i - 1) + int.Parse(substring(i-1, i) < 27) ? problem(i-2): 0

*/
public class Solution {
    public int NumDecodings(string s) {
        int prevous = 1;
        /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        �Լ�һ��ʼû�п�������Ϊ0��������������ʱ��Ҫ�����Թ�˵����
        "1012" => 2
        "100" => 0
        ������������������������������������
        */
        if (int.Parse(s.Substring(0, 1)) == 0) return 0;
        int current = 1;
        for (int i = 1; i < s.Length; i++)
        {
            var tmp = current;
            int twoDigit = int.Parse(s.Substring(i - 1, 2));
            current = (int.Parse(s.Substring(i,1)) > 0 ? current : 0) + (twoDigit < 27 && twoDigit >= 10 ? prevous : 0);
            prevous = tmp;
        }

        return current;
    }
}