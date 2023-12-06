export interface ColProps {
  col: ColType;
  idx: number;
}

export interface ColType {
  id: string;
  name: string;
  color: string;
  list: CardType[];
}

export interface CardProps {
  card: CardType;
  state: string;
  color: string;
  idx: number; // 方便使用 避免多次findIndex
}

export interface CardType {
  id: string;
  name: string;
  content: string;
  dueTo: number[];
  date: number;
}

export type DOMType = 'card' | 'col' | '';

export interface StoreState {
  list: ColType[]; // 数据
  DOMType: DOMType; // 操作的dom类型
  currentRow: number; // 当前行
  currentCol: number; // 当前列
  targetCol: number; // 目的列
  targetRow: number; // 目的行
  // 修改卡片数据
  setCard: <T extends keyof CardType>(
    key: T,
    value: CardType[T],
    colIdx: number,
    idx: number
  ) => void;
  // 修改列
  setCol: () => void;
  // 处理移动操作
  handleMove: () => void;
  // 设置当前列
  setCurrentCol: (colIdx: number) => void;
  // 设置当前行
  setCurrentRow: (rowIdx: number) => void;
  // 设置目标列
  setTargetCol: (colIdx: number) => void;
  // 设置目标行
  setTargetRow: (rowIdx: number) => void;
  // 清空目标
  clearTarget: () => void;
  // 清空当前操作对象
  clearCurrent: () => void;
  // 设置DOM type
  setDOMType: (type: 'card' | 'col' | '') => void;
}
