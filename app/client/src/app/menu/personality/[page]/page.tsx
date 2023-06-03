'use client';

import { SwitchCase } from '@toss/react';
import Link from 'next/link';

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  console.log(page);

  return (
    <main>
      <h2>성격</h2>
      <SwitchCase
        value={page}
        caseBy={{
          '1': <h3>사람들 앞에서 이야기하는 것을 즐기나요, 아니면 조용히 있는 것을 선호하나요?</h3>,
          '2': <h3>계획을 따르는 것을 선호하나요, 아니면 유연하게 상황에 맞춰 행동하는 것을 선호하나요?</h3>,
          '3': <h3>새로운 경험을 즐기나요, 아니면 익숙한 환경을 선호하나요?</h3>,
          '4': <h3>감정을 쉽게 보여주나요, 아니면 감정을 안정적으로 관리하나요?</h3>,
          '5': <h3>결정을 내릴 때, 이성적인 판단을 중요시하나요, 아니면 감정을 중요시하나요?</h3>,
          '6': <h3>당신의 성격에서 더 알려주고 싶은 정보를 자유롭게 얘기해주세요.</h3>,
        }}
      />
      <Link href={`/menu/personality/${page === '6' ? 'result' : Number(page) + 1}`}>다음</Link>
    </main>
  );
}
