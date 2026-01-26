import { create } from 'zustand';
import { getCurDate } from '../../_utils/browser/date/getCurDate';
import { diff } from '../../_utils/browser/date/diffDate';

const initialBirth = localStorage.getItem('count-down-birth') || '';
const initialFinal = localStorage.getItem('count-down-final-year') || '';

export const useDateStates = create(set => ({
    wholeDate: getCurDate(new Date()),
    localeDate: new Date(),

    // 设定的倒计时的目标日
    target: {
        birthDate: initialBirth,
        finalYearDate: initialFinal
    },

    // 倒计时时间计算
    diffTime: {
        countdownBirth: diff(new Date(), new Date(initialBirth)) || null,
        countdownFinalYear: diff(new Date(), new Date(initialFinal)) || null
    },

    setWholeDate: () => set({ wholeDate: getCurDate(new Date()) }), // 更新完整的日期
    setLocaleDate: () => set({ localeDate: new Date() }), // 更新当前日期

    // 基于 input 更新 birthDate 信息
    setBirthDate: e => {
        const value = e.target.value;
        localStorage.setItem('count-down-birth', value); // 在 storage 更新保存的数据

        set(state => ({
            target: {
                ...state.target,
                birthDate: value
            }
        }));

        set(state => ({
            diffTime: {
                ...state.diffTime,
                countdownBirth: diff(state.localeDate, new Date(value))
            }
        }));
    },

    // 基于 input 更新 finalYearDate 信息
    setFinalYearDate: e => {
        const value = e.target.value;
        localStorage.setItem('count-down-final-year', value);

        set(state => ({
            target: {
                ...state.target,
                finalYearDate: value
            }
        }));

        set(state => ({
            diffTime: {
                ...state.diffTime,
                countdownFinalYear: diff(state.localeDate, new Date(value))
            }
        }));
    }
}));
