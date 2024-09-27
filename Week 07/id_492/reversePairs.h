#ifndef _REVERSEPAIRS_H_
#define _REVERSEPAIRS_H_

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	int reversePairs(vector<int>& nums) {
		if (nums.size() <= 0) {
			return 0;
		}
		return mergeSort(nums, 0, nums.size() - 1);
	}

private:
	int mergeSort(vector<int>& nums, int left, int right) {
		if (left >= right) {
			return 0;
		}

		int mid = left + (right - left) / 2;
		int count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);

		vector<int> cache(right - left + 1);
		// i���ڼ���Ҫ��ת�Եļ�����t���ڹ鲢����ļ���
		int i = left, j = mid + 1;
		int t = left, k = 0;
		for (; j <= right; j++, k++) {
			// �������������ֵ���Ҫ��ת�Ը������������������ź���
			while (i <= mid && nums[i] / 2.0 <= nums[j]) {
				i++;
			}
			count += mid - i + 1;

			while (t <= mid && nums[t] < nums[j]) {
				cache[k++] = nums[t++];
			}
			cache[k] = nums[j];
		}
		// ǰ�벿�ֻ�ʣ�µĽϴ��Ԫ�أ��ϲ���cache����
		while (t <= mid) {
			cache[k++] = nums[t++];
		}
		for (int p = 0; p < cache.size(); p++) {
			nums[left + p] = cache[p];
		}
		return count;
	}
};

#endif // _REVERSEPAIRS_H_
