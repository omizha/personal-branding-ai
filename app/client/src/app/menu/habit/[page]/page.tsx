'use client';

import { SwitchCase } from '@toss/react';
import Link from 'next/link';

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  console.log(page);

  return (
    <main>
      <h2>습관</h2>
      <SwitchCase
        value={page}
        caseBy={{
          '1': <h3>어떤 상황에서 가장 스트레스를 많이 받나요?</h3>,
          '2': <h3>스트레스를 받았을 때, 어떻게 이를 해소하나요?</h3>,
          '3': <h3>어떤 유형의 일에 가장 집중력을 발휘하나요?</h3>,
          '4': <h3>당신이 가장 자주 하는 취미나 여가 활동은 무엇인가요?</h3>,
          '5': <h3>당신의 습관에서 더 알려주고 싶은 정보를 자유롭게 얘기해주세요.</h3>,
        }}
      />
      <Link href={`/menu/habit/${page === '5' ? 'result' : Number(page) + 1}`}>다음</Link>
    </main>
  );
}
