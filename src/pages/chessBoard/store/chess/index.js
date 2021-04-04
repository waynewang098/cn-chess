import Knight from './knight'
import King from './king'
import Advisor from './advisor'
import Bishop from './bishop'

export const record = [ // 初始局面
  ['r', 'n', 'b', 'a', 'k', 'a', 'b', 'n', 'r'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', 'c', '0', '0', '0', '0', '0', 'c', '0'],
  ['p', '0', 'p', '0', 'p', '0', 'p', '0', 'p'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['P', '0', 'P', '0', 'P', '0', 'P', '0', 'P'],
  ['0', 'C', '0', '0', '0', '0', '0', 'C', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['R', 'N', 'B', 'A', 'K', 'A', 'B', 'N', 'R']
]

// 象棋字典：采用国际象棋中FEN串的起名方法表示
export const chessDictionary = {
  // 红方
  'K': {
    name: '帅',
    generateMoves (x, y, situation) {
      const king = new King()
      return king.generateMoves(x, y, situation)
    }
  },
  'A': {
    name: '仕',
    generateMoves (x, y, situation) {
      const advisor = new Advisor()
      return advisor.generateMoves(x, y, situation)
    }
  },
  'B': {
    name: '相',
    generateMoves (x, y, situation) {
      const bishop = new Bishop()
      return bishop.generateMoves(x, y, situation)
    }
  },
  'N': {
    name: '马',
    // 生成走法
    generateMoves (x, y, situation) {
      const knight = new Knight()
      return knight.generateMoves(x, y, situation)
    }
  },
  'R': {
    name: '車'
  },
  'C': {
    name: '炮'
  },
  'P': {
    name: '兵'
  },
  // 黑方
  'k': {
    name: '将',
    generateMoves (x, y, situation) {
      const king = new King()
      return king.generateMoves(x, y, situation)
    }
  },
  'a': {
    name: '士',
    generateMoves (x, y, situation) {
      const advisor = new Advisor()
      return advisor.generateMoves(x, y, situation)
    }
  },
  'b': {
    name: '象',
    generateMoves (x, y, situation) {
      const bishop = new Bishop()
      return bishop.generateMoves(x, y, situation)
    }
  },
  'n': {
    name: '马',
    generateMoves (x, y, situation) {
      const knight = new Knight()
      return knight.generateMoves(x, y, situation)
    }
  },
  'r': {
    name: '車'
  },
  'c': {
    name: '炮'
  },
  'p': {
    name: '卒'
  },
}
