#include <stdlib.h>
#include <stdio.h>
#include <iostream>
using namespace std;
// λ1�ĸ���
int hammingWeight(uint32_t n) {
	int m = 0;
	for (;n;m++)
		n &= n - 1;
	return m;
}
int main() {
	uint32_t n = 00000000000000000000000000001011;
	printf("1�ĸ���==%d\n", hammingWeight(n));
	system("pause");
	return 0;
}