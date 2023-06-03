'use client';

import { SwitchCase } from '@toss/react';
import Link from 'next/link';

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  console.log(page);

  return (
    <main>
      <h2>가치관</h2>
      <SwitchCase
        value={page}
        caseBy={{
          '1': <h3>자신에게 가장 중요한 가치는 무엇인가요? (예: 가족, 친구, 일, 여가, 건강 등)</h3>,
          '2': <h3>당신이 성공을 어떻게 정의하는지 설명해줄 수 있나요?</h3>,
          '3': <h3>당신이 가장 두려워하는 것은 무엇인가요?</h3>,
          '4': <h3>당신의 가치관에서 더 알려주고 싶은 정보를 자유롭게 얘기해주세요.</h3>,
        }}
      />
      <Link href={`/menu/viewpoint/${page === '4' ? 'result' : Number(page) + 1}`}>다음</Link>
    </main>
  );
}
