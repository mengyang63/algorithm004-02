/**
    46. 全排列 ???（25~27）   
*/
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> output = new LinkedList();
        ArrayList<Integer> nums_list = new ArrayList<Integer>();
        for (int num : nums) {
            nums_list.add(num);
        }
        int n = nums.length;
        backtrack(n, nums_list, output, 0);
        return output;
    }
    
    public void backtrack(int n, 
                         ArrayList<Integer> nums, 
                         List<List<Integer>> output, 
                         int first) {
        if (first == n) {
            output.add(new ArrayList<Integer>(nums));
        }
        for (int i = first; i < n; i++) {
            Collections.swap(nums, first, i);
            backtrack(n, nums, output,first+1);
            Collections.swap(nums, first,i);
        }
    }
}