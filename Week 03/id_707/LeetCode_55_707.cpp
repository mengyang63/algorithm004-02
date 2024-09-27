#include <stdlib.h>
#include <stdio.h>
#include<vector>
#include <iostream>
#include <algorithm>
using namespace std;
// ��Ծ��Ϸ
bool canJump(vector<int>& nums) {
	int k = 0;
	for (int i = 0; i < nums.size(); i++)
	{
		if (i > k) 
			return false;
		k = max(k, i + nums[i]);
	}
	return true;
}

int main() {
	vector<int> nums = { 3,2,1,0,4 };
	if (canJump(nums)) {
		printf("����Ծ\n");
	}
	else {
		printf("������Ծ\n");
	}

	system("pause");
	return 0;
}