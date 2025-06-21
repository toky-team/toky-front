'use client';

import client from '@/common/utils/client';

const TestButton = () => {
  return (
    <button
      className="bg-light-red cursor-pointer rounded-full px-4 py-2 text-white"
      onClick={async () => {
        const { data } = await client.get('/user');
        console.log(data);
      }}
    >
      테스트 API
    </button>
  );
};
export default TestButton;
