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