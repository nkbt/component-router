import {getDefault} from '../index';
import RedBlock from './RedBlock';
import GreenBlock from './GreenBlock';
import DynamicList from './DynamicList';


export default {
  block1: {
    [getDefault()]: RedBlock,
    First: GreenBlock,
    Second: RedBlock
  },
  block2: {
    X: GreenBlock,
    Y: RedBlock
  },
  block3: {
    Hello: GreenBlock,
    World: RedBlock
  },
  list: DynamicList,
  list2: DynamicList
};
