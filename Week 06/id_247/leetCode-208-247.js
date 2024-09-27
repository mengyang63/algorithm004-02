/**
 * 208. ʵ�� Trie (ǰ׺��)
    ʵ��һ�� Trie (ǰ׺��)������ insert, search, �� startsWith ������������

 * https://leetcode.com/problems/implement-trie-prefix-tree/discuss/399178/Clean-JavaScript-solution
 * 204 ms , ������ javascript �ύ�л����� 94.68% ���û�
 */

class Trie {

    constructor() {
        this.root = {};
    }

    insert( word ) {
        let node = this.root;
        for (let c of word) {
            node[c] = node[c] || {};
            node = node[c];
        }
        node.isWord = true;           // ��̬���ԣ��� search() ���õ�
    }

    traverse( word ) {
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (node == null) return null;
        }
        return node;
    }

    search( word ) {
        const node = this.traverse(word);
        return node && node.isWord === true;
    }

    startsWith( prefix ) {
        return this.traverse(prefix) != null;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log( trie );
console.log( trie.search("apple") );     // true
console.log( trie.search("app") );     // false



/*trie.startsWith("app");
trie.insert("app");
console.log( trie.search("app") );     // true*/
