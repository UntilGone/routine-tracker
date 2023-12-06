import { create } from 'zustand';
import { StoreState } from '../type';
import { getUUID } from '../utils';
import dayjs from 'dayjs';

export const useStore = create<StoreState>((set, get) => ({
  list: [
    {
      id: getUUID(),
      name: 'Next up',
      color: '#ff0000',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
    {
      id: getUUID(),
      name: 'In Progress',
      color: '#00ff00',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
    {
      id: getUUID(),
      name: 'Complete',
      color: '#0000ff',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
  ],
  DOMType: '',
  currentCol: -1,
  currentRow: -1,
  targetCol: -1,
  targetRow: -1,
  setCard(key, value, colIdx, idx) {
    const { list } = get();
    const temp = [...list];
    if (temp[colIdx] && temp[colIdx].list[idx]) {
      temp[colIdx].list[idx][key] = value;
    }
    set(() => ({ list: temp }));
  },
  setCol() {},
  handleMove() {
    // state
    const {
      list,
      DOMType,
      currentCol,
      currentRow,
      targetCol,
      targetRow,
      clearCurrent,
      clearTarget,
      setDOMType,
    } = get();
    const temp = [...list];
    console.log(
      'target',
      DOMType,
      currentCol,
      currentRow,
      targetCol,
      targetRow
    );
    if (DOMType === 'card') {
      // -1 is invalid
      if (
        currentCol !== -1 &&
        currentRow !== -1 &&
        targetCol !== -1 &&
        targetRow !== -1
      ) {
        const card = temp[currentCol].list[currentRow];
        // insert card
        if (currentCol === targetCol) {
          temp[currentCol].list.splice(targetRow, 0, card);
          temp[currentCol].list.splice(
            targetRow > currentRow ? currentRow : currentRow + 1,
            1
          );
        } else {
          temp[currentCol].list.splice(currentRow, 1);
          temp[targetCol].list.splice(targetRow, 0, card);
        }
        console.log('temp', temp);
        set(() => ({
          list: temp,
        }));
      }
    } else if (DOMType === 'col') {
      if (currentCol !== -1 && targetCol !== -1) {
        const col = temp[currentCol];
        // insert col
        temp.splice(targetCol, 0, col);
        // delete old col
        temp.splice(targetCol > currentCol ? currentCol : currentCol + 1, 1);
        set(() => ({
          list: temp,
        }));
      }
    }
    // clear state
    clearCurrent();
    clearTarget();
    setDOMType('');
  },
  setTargetCol(idx) {
    set(() => ({ targetCol: idx }));
  },
  setTargetRow(rowIdx) {
    set(() => ({ targetRow: rowIdx }));
  },
  setCurrentCol(idx) {
    console.log('first', idx);
    set(() => ({ currentCol: idx }));
  },
  setCurrentRow(rowIdx) {
    set(() => ({ currentRow: rowIdx }));
  },
  clearTarget() {
    set(() => ({
      targetCol: -1,
      targetRow: -1,
    }));
  },
  clearCurrent() {
    set(() => ({
      currentCol: -1,
      currentRow: -1,
    }));
  },
  setDOMType(type) {
    set(() => ({
      DOMType: type,
    }));
  },
}));
