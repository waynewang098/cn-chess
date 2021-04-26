// 判断是否是红方棋子
export const isRed = (name) => { // name: string
  return name >= 'A' && name <= 'Z'
}

// 判断是否是黑方棋子
export const isBlack = (name) => { // name: string
  return name >= 'a' && name <= 'z'
}

// 判断是否是同色棋子
export const isSameColor = (chess1, chess2) => {
 return (isRed(chess1) && isRed(chess2)) || (isBlack(chess1) && isBlack(chess2))
}

// 获取关于中心对称的棋子坐标
export const getCentrosymmetricPoint = (point) => {
  return { 
    x: 8 - point.x,
    y: 9 - point.y
  }
}