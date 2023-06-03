'use client';

import { SwitchCase } from '@toss/react';
import Link from 'next/link';

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  console.log(page);

  return (
    <main>
      <h2>인간관계</h2>
      <SwitchCase
        value={page}
        caseBy={{
          '1': (
            <h3>
              새로운 사람을 만났을 때, 먼저 말을 거는 편인가요, 아니면 상대방이 말을 걸어오기를 기다리는 편인가요?
            </h3>
          ),
          '2': <h3>다른 사람의 문제를 들었을 때, 해결책을 제안하는 편인가요, 아니면 그저 들어주는 편인가요?</h3>,
          '3': <h3>당신이 친구와의 관계에서 가장 중요하게 생각하는 가치는 무엇인가요?</h3>,
          '4': <h3>당신의 인간관계에서 더 알려주고 싶은 정보를 자유롭게 얘기해주세요.</h3>,
        }}
      />
      <Link href={`/menu/relationship/${page === '4' ? 'result' : Number(page) + 1}`}>다음</Link>
    </main>
  );
}
