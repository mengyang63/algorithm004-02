#难度大,,对撇捺的理解，很重要
class Solution:
    def totalNQueens(self, n: int) -> int:
        #r=[]
        ans=0
        def dfs(q,cha,he):
            y=len(q)
            if y==n: #8
                #a=["."*i +"Q"+"."*(n-1-i) for i in q]
                #r.append(a)
                ans+=1
                return
            for x in range(n):
                if x not in q and y-x not in cha and y+x not in he:
                    dfs(q+[x],cha+[y-x],he+[y+x])
        dfs([],[],[])
        #return len(r)
        return ans
'''
class Solution:
    def totalNQueens(self, n: int) -> int:
        res=[]
        
        def dfs(queens,cha,he):
            y=len(queens)  #y轴，就是行号
            if y==n: #8
                a=["."*i +"Q"+"."*(n-1-i) for i in queens]
                res.append(a)
                return
            
            for x in range(n):
                if x in queens or y-x in cha or y+x in he:continue
                dfs(queens+[x],cha+[y-x],he+[y+x])
            #return
        dfs([],[],[])
        return len(res)
        
        
        
class Solution:
    def totalNQueens(self, n: int) -> int:
        res=[]
        
        def dfs(queens,cha,he):
            y=len(queens)  #y轴，就是行号
            if y==n: #8
                #a=["."*i +"Q"+"."*(n-1-i) for i in queens]
                res.append(1)
                return
            
            for x in range(n):
                if x in queens or y-x in cha or y+x in he:continue
                dfs(queens+[x],cha+[y-x],he+[y+x])
            
        dfs([],[],[])
        return len(res)
        
        
class Solution:
    def totalNQueens(self, n: int) -> int:
        a=0
        def dfs(q,cha,he):
            y=len(q)
            if y==n: 
                nonlocal a
                a+=1
                return
            for x in range(n):
                if x not in q and y-x not in cha and y+x not in he:
                    dfs(q+[x],cha|{y-x},he|{y+x})
        dfs([],set(),set())
        return a
'''
