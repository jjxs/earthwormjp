import { watchEffect } from "vue";
import { useCourseStore } from "~/store/course";
import { play, updateSource } from "./audio";

let prevWord = "";
export function useCurrentStatementJapaneseSound() {
  const courseStore = useCourseStore();

  watchEffect(() => {
    const word = courseStore.currentStatement?.japanese;
    if (prevWord !== word) {
      updateSource(`https://dict.youdao.com/dictvoice?audio=${word}&type=4&le=jap`);
    }
    prevWord = courseStore.currentStatement?.japanese!
  });

  return {
    playSound: () => {
      play();
    },
  };
}

// 朗读每日一句
export function readOneSentencePerDayAloud(str: string) {
  updateSource(`https://dict.youdao.com/dictvoice?audio=${str}&type=1`);
  play();
}

export function reset() {
  prevWord = "";
}
