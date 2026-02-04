import { MEMOS } from './memo-raw.js';
import {
    transformToRouteData,
    transformToSidebarData
} from '../../_utils/browser/data-transformer/data-transformer.js';

const MEMOS_ROUTE = transformToRouteData(MEMOS);
const MEMOS_SIDEBAR = transformToSidebarData(MEMOS);

export { MEMOS, MEMOS_ROUTE, MEMOS_SIDEBAR };
