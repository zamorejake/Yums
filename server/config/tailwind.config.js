module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}

module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}

module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    content: [
      ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    plugins: [... require('flowbite/plugin')],
};

  import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function MyPage() {
  return (
    <Flowbite>
      ...
      <DarkThemeToggle />
      ...
    </Flowbite>
  );
}

import { Button } from 'flowbite-react';
//can change the className function to change the classes directly
export default function MyPage() {
  return <Button className="bg-red-500 hover:bg-red-600">Click me</Button>;
}

'use client';

import { Button } from 'flowbite-react';

export default function DefaultButtonGroup() {
  return (
    <Button.Group>
      <Button color="gray">
        Profile
      </Button>
      <Button color="gray">
        Settings
      </Button>
      <Button color="gray">
        Messages
      </Button>
    </Button.Group>
  )
}

<div className="flex p-6 font-mono">
  <div class= "flex-none w-48 mb-10 realtive z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400"></div>
  <img src="" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-6">
  <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
    <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
      Retro Shoe