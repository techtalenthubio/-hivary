<h1 align="center">
  <br>
  <a href="http://www.hivary.io"><img src="https://avatars.githubusercontent.com/u/151664545?s=200&v=4" alt="Hivary utils" width="200"></a>
  <br>
  Hivary
  <br>
</h1>

<h4 align="center">Utils Library for Hivary Engine.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/@hivary%2Fengine-utils.svg">
    <img src="https://badge.fury.io/js/@hivary%2Fengine-utils.svg"
         alt="@hivary/engine-utils">
  </a>

</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Key Features

- This repository aims to provide a set of utils for Hivary Engine. Repeated code will be moved here.
- Also it can be applied for all nestjs projects that uses rest api.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies
$ npm install @hivary/engine-utils

```

```typescript
## Usage in Nestjs
import { Public, CurrentUser, Role  } from '@hivary/engine-utils';


@Public()
@Post('/your-path')
login(@Body() data: LoginDto) {
  return this.service.serviceFnc(data);
}

@Roles('permitted-role','another-permitted-role')
me(@CurrentUser() user: User) {
  return this.authService.me(user.email);
}

```

> **Note**
> Project uses node version v21.6.0

## Credits

This software uses the following open source packages:

- [Nestjs](http://nestjs.com/)
- [Node.js](https://nodejs.org/)

## License

MIT for more details [LICENSE](./LICENSE).

---

> [hivary.io](https://www.hivary.io) &nbsp;&middot;&nbsp;
> GitHub [TechtalentHub](https://github.com/techtalenthubio)
