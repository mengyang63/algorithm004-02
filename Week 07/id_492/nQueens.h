#ifndef _NQUEENS_H_
#define _NQUEENS_H_

#include <iostream>
#include <vector>

using namespace std;

// ������
class Solution {
public:
	vector<vector<string>> solveNQueens(int n) {
		vector<vector<string>> res;
		vector<string> nQueens(n, string(n, '.'));
		subSolveNQueens(res, nQueens, 0, n);
		return res;
	}

private:
	void subSolveNQueens(vector<vector<string>>& res, vector<string>& nQueens, int row, int& n) {
		if (row == n) {
			res.push_back(nQueens);
			return;
		}

		for (int col = 0; col < n; col++) {
			if (isValid(nQueens, row, col, n)) {
				nQueens[row][col] = 'Q';
				subSolveNQueens(res, nQueens, row + 1, n);
				nQueens[row][col] = '.';
			}	
		}
	}

	bool isValid(vector<string>& nQueens, int row, int col, int& n) {
		for (int i = 0; i < row; i++) {
			if (nQueens[i][col] == 'Q') {
				return false;
			}
		}

		for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (nQueens[i][j] == 'Q') {
				return false;
			}
		}

		for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (nQueens[i][j] == 'Q') {
				return false;
			}
		}

		return true;
	}
};

// ����flag����
class Solution {
public:
	vector<vector<string>> solveNQueens(int n) {
		vector<vector<string>> res;
		vector<string> nQueens(n, string(n, '.'));
		vector<bool> flagCol(n, true); // ��
		vector<bool> flagLd(2 * n - 1, true); // Ʋ
		vector<bool> flagRd(2 * n - 1, true); // ��
		subSolveNQueens(res, nQueens, flagCol, flagLd, flagRd, 0, n);
		return res;
	}

private:
	void subSolveNQueens(vector<vector<string>>& res, vector<string>& nQueens, vector<bool>& flagCol, vector<bool>& flagLd, vector<bool>& flagRd, int row, int& n) {
		if (row == n) {
			res.push_back(nQueens);
			return;
		}

		for (int col = 0; col < n; col++) {
			if (flagCol[col] && flagLd[col + row] && flagRd[n - 1 + col - row]) {
				flagCol[col] = flagLd[col + row] = flagRd[n - 1 + col - row] = false;
				nQueens[row][col] = 'Q';
				subSolveNQueens(res, nQueens, flagCol, flagLd, flagRd, row + 1, n);
				nQueens[row][col] = '.';
				flagCol[col] = flagLd[col + row] = flagRd[n - 1 + col - row] = true;
			}
		}
	}
};

// һ������
class Solution {
public:
	vector<vector<string>> solveNQueens(int n) {
		vector<vector<string>> res;
		vector<string> nQueens(n, string(n, '.'));
		// ���������ܴ�СΪn + 2 * n - 1 + 2 * n - 1 = 5 * n - 2
		vector<bool> flags(5 * n - 2, true);
		subSolveNQueens(res, nQueens, flags, 0, n);
		return res;
	}

private:
	void subSolveNQueens(vector<vector<string>>& res, vector<string>& nQueens, vector<bool>& flags, int row, int& n) {
		if (row == n) {
			res.push_back(nQueens);
			return;
		}

		// col����ռ�ݳ���Ϊn,ld�����±�Ϊn+col+row,ռ�ݳ���Ϊ2*n-1, rd�����±�Ϊn+2*n-1+n-1+col-row
		for (int col = 0; col < n; col++) {
			if (flags[col] && flags[n + col + row] && flags[4 * n - 2 + col - row]) {
				flags[col] = flags[n + col + row] = flags[4 * n - 2 + col - row] = false;
				nQueens[row][col] = 'Q';
				subSolveNQueens(res, nQueens, flags, row + 1, n);
				nQueens[row][col] = '.';
				flags[col] = flags[n + col + row] = flags[4 * n - 2 + col - row] = true;
			}
		}
	}
};

// λ����
class Solution {
public:
	vector<vector<string>> solveNQueens(int n) {

	}
};

#endif
