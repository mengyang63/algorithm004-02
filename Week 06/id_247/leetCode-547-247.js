/**
 * 547. ����Ȧ
    ������?N?��ѧ����������Щ�������ѣ���Щ���ǡ����ǵ���������Ǵ����ԡ������֪ A �� B?�����ѣ�B �� C?�����ѣ�
    ��ô���ǿ�����Ϊ A Ҳ�� C?�����ѡ���ν������Ȧ����ָ�������ѵļ��ϡ�
    ����һ��?N * N?�ľ���?M����ʾ�༶��ѧ��֮������ѹ�ϵ�����M[i][j] = 1����ʾ��֪�� i ���� j ��ѧ����Ϊ���ѹ�ϵ��
    ����Ϊ��֪����������������ѧ���е���֪������Ȧ������

     [[1,1,0],
      [1,1,0],
      [0,0,1]] �� 2

     [[1,1,0],
      [1,1,1],
      [0,1,1]] �� 1
 *
 * https://leetcode-cn.com/problems/friend-circles/
 * 84 ms , ������ javascript �ύ�л����� 75.58% ���û�
 */


const findCircleNum = (M) => {

    const root = new Array(200).fill(0).map( (i,j) => j );
    console.log(root)

    function find(i) {
        while (i !== root[i]) {
            root[i] = root[ root[i] ];
            i = root[i];
        }
        return i;
    }

    function unior(a, b) {
        root[ find(a) ] = find(b)
    }

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1)  unior(i, j)
        }
    }

    const circle = {}
    for (let i = 0; i < M.length; i++) {
        if (!circle[find(i)])
            circle[find(i)] = true
    }
    console.log(circle)
    return Object.keys(circle).length
};

let M = [[1,1,0],
    [1,1,1],
    [0,1,1]]
findCircleNum(M)