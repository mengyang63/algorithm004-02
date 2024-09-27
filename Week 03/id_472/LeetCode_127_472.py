#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2019/11/3
# @Author  : xujun
from collections import defaultdict

"""
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

1.每次转换只能改变一个字母。
2.转换过程中的中间单词必须是字典中的单词。
说明:
1.如果不存在这样的转换序列，返回 0。
2.所有单词具有相同的长度。
3.所有单词只由小写字母组成。
4.字典中不存在重复的单词。
5.你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
"""


# 广度优先搜索
# class Solution(object):
#     def ladderLength(self, beginWord, endWord, wordList):
#         """
#         :type beginWord: str
#         :type endWord: str
#         :type wordList: List[str]
#         :rtype: int
#         """
#
#         if endWord not in wordList or not endWord or not beginWord or not wordList:
#             return 0
#
#         # Since all words are of same length.
#         L = len(beginWord)
#
#         # Dictionary to hold combination of words that can be formed,
#         # from any given word. By changing one letter at a time.
#         all_combo_dict = defaultdict(list)
#         for word in wordList:
#             for i in range(L):
#                 # Key is the generic word
#                 # Value is a list of words which have the same intermediate generic word.
#                 all_combo_dict[word[:i] + "*" + word[i + 1:]].append(word)
#
#         # Queue for BFS
#         queue = [(beginWord, 1)]
#         # Visited to make sure we don't repeat processing same word.
#         visited = {beginWord: True}
#         while queue:
#             current_word, level = queue.pop(0)
#             for i in range(L):
#                 # Intermediate words for current word
#                 intermediate_word = current_word[:i] + "*" + current_word[i + 1:]
#
#                 # Next states are all the words which share the same intermediate state.
#                 for word in all_combo_dict[intermediate_word]:
#                     # If at any point if we find what we are looking for
#                     # i.e. the end word - we can return with the answer.
#                     if word == endWord:
#                         return level + 1
#                     # Otherwise, add it to the BFS Queue. Also mark it visited
#                     if word not in visited:
#                         visited[word] = True
#                         queue.append((word, level + 1))
#                 all_combo_dict[intermediate_word] = []
#         return 0


# 双向广度优先搜索
class Solution(object):
    def __init__(self):
        self.length = 0
        # Dictionary to hold combination of words that can be formed,
        # from any given word. By changing one letter at a time.
        self.all_combo_dict = defaultdict(list)

    def visitWordNode(self, queue, visited, others_visited):
        current_word, level = queue.pop(0)
        for i in range(self.length):
            # Intermediate words for current word
            intermediate_word = current_word[:i] + "*" + current_word[i + 1:]

            # Next states are all the words which share the same intermediate state.
            for word in self.all_combo_dict[intermediate_word]:
                # If the intermediate state/word has already been visited from the
                # other parallel traversal this means we have found the answer.
                if word in others_visited:
                    return level + others_visited[word]
                if word not in visited:
                    # Save the level as the value of the dictionary, to save number of hops.
                    visited[word] = level + 1
                    queue.append((word, level + 1))
        return None

    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """

        if endWord not in wordList or not endWord or not beginWord or not wordList:
            return 0

        # Since all words are of same length.
        self.length = len(beginWord)

        for word in wordList:
            for i in range(self.length):
                # Key is the generic word
                # Value is a list of words which have the same intermediate generic word.
                self.all_combo_dict[word[:i] + "*" + word[i + 1:]].append(word)

        # Queues for birdirectional BFS
        queue_begin = [(beginWord, 1)]  # BFS starting from beginWord
        queue_end = [(endWord, 1)]  # BFS starting from endWord

        # Visited to make sure we don't repeat processing same word
        visited_begin = {beginWord: 1}
        visited_end = {endWord: 1}
        ans = None

        # We do a birdirectional search starting one pointer from begin
        # word and one pointer from end word. Hopping one by one.
        while queue_begin and queue_end:

            # One hop from begin word
            ans = self.visitWordNode(queue_begin, visited_begin, visited_end)
            if ans:
                return ans
            # One hop from end word
            ans = self.visitWordNode(queue_end, visited_end, visited_begin)
            if ans:
                return ans

        return 0
