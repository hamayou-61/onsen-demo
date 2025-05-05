import { useState, useEffect } from 'react';

/**
 * 指定された間隔で画像をスライドさせるカスタムフック
 * @param items スライドさせる項目の配列
 * @param interval スライド間隔（ミリ秒）
 * @returns [現在のインデックス]
 */
export function useImageSlider<T>(items: T[]): number {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  return currentIndex;
}
