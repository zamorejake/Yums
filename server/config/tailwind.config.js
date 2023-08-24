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


