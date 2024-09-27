class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        newLen =  1
        
        if len(nums) == 0:
            return 0
        
        for i in range(1, len(nums)) :
            if nums[i] != nums[i-1]:
                nums[newLen] = nums[i]
                newLen += 1
        return newLen

if __name__ == "__main__":
    solution = Solution()
    
    nums = [1,1,2,1]
    newLen = solution.removeDuplicates(nums)
    print(newLen)