/**
 * 51. N�ʺ�
 n �ʺ������о�������ν� n ���ʺ������ n��n �������ϣ�����ʹ�ʺ�˴�֮�䲻���໥������
 ����һ������ n���������в�ͬ��?n?�ʺ�����Ľ��������
 ÿһ�ֽⷨ����һ����ȷ��?n �ʺ���������ӷ��÷������÷����� 'Q' �� '.' �ֱ�����˻ʺ�Ϳ�λ��
 ����: 4
 ���: [
 [".Q..",  // �ⷨ 1
 "...Q",
 "Q...",
 "..Q."],

 ["..Q.",  // �ⷨ 2
 "Q...",
 "...Q",
 ".Q.."]
 ]
 *
 * https://leetcode-cn.com/problems/n-queens/
 */

const solveNQueens = ( n ) => {

    const res = [];
    const board = []

    const backtrack = (n, r) => {

        if (r === n) {
            res.push(board.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)));
            return;
        }

        for (let i = 0; i < n; i++) {

            if (!board.some((bc, br) => bc === i || bc === i + r - br || bc === i - r + br)) {

                board.push(i);
                backtrack(n, r + 1);
                board.pop();
            }
        }
    }

    backtrack(n, 0);
    return res;
}

var solveNQueens2 = function(n) {
    if (n < 1) return [];
    const r = [];
    const cols = new Set();
    const pie = new Set();
    const na = new Set();

    const dfs = (n, row=0, curState=[]) => {
        if (row >= n) {
            r.push(curState);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || pie.has(row - col) || na.has(row + col)) continue;
            cols.add(col);
            pie.add(row - col);
            na.add(row + col);

            dfs(n, row + 1, curState.concat([col]));

            cols.delete(col);
            pie.delete(row - col);
            na.delete(row + col);
        }
    }

    const result = [];
    const gen = n => {
        for (let i = 0; i < r.length; i++) {
            result.push(r[i].map(_r => '.'.repeat(_r) + 'Q' + '.'.repeat(n - _r - 1)));
        }
    }

    dfs(n);
    gen(n);

    return result;
};

console.log( solveNQueens2(5) )