class Solution {
    /** 官方题解 栈的应用 C++代码 改编 
        时间复杂度：O(n)。
            单次遍历 O(n) ，每个条形块最多访问两次（由于栈的弹入和弹出），并且弹入和弹出栈都是 O(1) 的。
        空间复杂度：O(n)。 栈最多在阶梯型或平坦型条形块结构中占用 O(n) 的空间。
    */
    public int trap(int[] height) {
        int ans = 0, current = 0;
        Stack<Integer> stack = new Stack<Integer>();
        while (current < height.length) {
            while (!stack.empty() && height[current] > height[stack.peek()]) {
                int top = stack.peek();
                stack.pop();
                if (stack.empty()) {
                    break;
                }
                int distance = current - stack.peek() - 1;
                int bounded_height = Math.min(height[current], height[stack.peek()]) - height[top];
                ans += distance * bounded_height;
            }
            stack.push(current++);
        }
        return ans;
    }
}