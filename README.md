# Speechless AI
![CI](https://github.com/itaibo/speechless-ai/actions/workflows/ci.yml/badge.svg)

The JavaScript library for Speechless AI. Let your users interact with it and receive
an speechless response.

## Install
`npm i speechless-ai`

## Usage
The code below shows how to use the chat completions API.

```js
import Speechless from 'speechless-ai';

const speechless = new Speechless();

async function main() {
  const chatCompletion = await speechless.chat.completions.create([{ role: 'user', content: 'Are you an AI?' }]);
  console.log(chatCompletion); // 😮
}

main();
```
