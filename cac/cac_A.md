# cac

[TOC]



## 前言

### 定义

> **C**ommand **A**nd **C**onquer is a JavaScript library for building CLI apps.

[源码地址](https://github.com/cacjs/cac)

1. 根据`readme.md`来看，是一个用于构建脚手架(e.g. vue-cli)的js库，使用方法就是命令行界面输入
2. `project-tree`插件，control+shift+p,输入project tree回车，即可自动生成目录树
3. 第一次接触此类源码，看起来比较吃力，作业也无从下手。多亏大佬[zzzzzx](https://github.com/alexzhang1030/100-node-env-libs)超级详细的文档，我得以读懂一些大概流程，感谢~~

### 阅读源码的流程

> 1. 下载好了代码先安装依赖
>    - 这个项目用 yarn
> 2. 运行一下测试 检测是否可以跑起来
> 3. 基于一个测试跑一下  先大概了解一下流程
>    - 基于断点看执行的流程
>    - 用的是jest测试框架，使用`npm run test`运行测试用例
>    - 学会打断点看执行过程
> 4. 自己给他写一个测试 这个测试包含你想要了解的功能
>    - 比如 <>  或者 []  看看它是如何解析的

### windows生成目录结构树

1.  电脑中打开cmd
2. 在cmd中进入要生成目录结构的目录
3. 输入：tree /f > list.txt（目录结构输入成功，并保存为一个list.txt文件）
4. 打开此文件，即可看到生成的目录结构树

## 基本用法

```javascript
const cli = require('cac')()

cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log('remove ' + dir + (options.recursive ? ' recursively' : ''))
  })

cli.help()
cli.parse()
```

1. `mri`对命令行参数进行转换,通过`process.argv`得到执行文件的参数

   ```javascript
   node index.js foo bar 
   ```

   ```javascript
   // 结果：
   // ['your node.js executable file path', 'index.js', 'foo', 'bar']
   console.log(process.argv)
   ```

   

2. `command`用于注册指令

3. `action`用于执行匹配指令的回调函数

## 目录结构

### 通用配置文件

```javascript
//通用配置文件
├─ .editorconfig//编辑器配置
├─ .gitattributes//配置项目的git属性
├─ .gitignore//配置此文件可以让 git 对某些特定文件不追踪变化
├─ .prettierrc//prettier的配置文件
├─ license//软件License，是授权用户合法使用软件的许可证（一般是MIT)
├─ package.json//npm 规范的项目描述文件
├─ tsconfig.json// TS 配置文件 通过该配置文件可以指定 ts 编译的版本，编译的配置选项开关等https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
```

### cac目录

```javascript
cac
├─ .editorconfig//编辑器配置：跨编辑器或IDE统一代码风格，遵循一定的样式
├─ .gitattributes//配置项目的git属性
├─ .github//github配置文件
│    ├─ FUNDING.yml//github赞助配置文件，为开源项目提供资助选项
│    └─ ISSUE_TEMPLATE.md//github yaml模板配置文件
├─ .gitignore//配置此文件可以让 git 对某些特定文件不追踪变化
├─ .prettierrc//prettier的配置文件
├─ LICENSE//软件License，是授权用户合法使用软件的许可证
├─ README.md//项目介绍文件
├─ circle.yml//CircleCI 的配置文件(CircleCI 是一个持续集成/持续部署的服务,类似Jenkins)
├─ examples//示例
├─ index-compat.js//主入口、主要是为了兼容commonjs
├─ jest.config.js//jest配置文件
├─ mod.js//兼容deno
├─ mod.ts//兼容deno(一个安全的JavaScript和TypeScript运行时环境,类似node)
├─ mod_test.ts
├─ package.json//npm 规范的项目描述文件https://docs.npmjs.com/cli/v7/configuring-npm/package-json/
├─ rollup.config.js//rollup 配置文件（主要是打包用的）
├─ scripts//项目中用到的脚本
│    └─ build-deno.ts
├─ src//项目主目录
│    ├─ CAC.ts
│    ├─ Command.ts
│    ├─ Option.ts
│    ├─ __test__
│    ├─ deno.ts
│    ├─ index.ts
│    ├─ node.ts
│    └─ utils.ts
├─ tsconfig.json// TS 配置文件
└─ yarn.lock//yarn 的依赖锁文件 (锁定yarn所依赖的文件版本)

```

#### prettierrc

> prettier 的配置文件
>
> 通常的表现形式有：
>
> - `package.json` 中配置 `prettier` 字段
> - 用 JSON 或者 yaml 写 `.prettierrc` 文件
> - 一个 `.prettierrc.json`、`.prettierrc.yaml`、`.prettierrc.yml`、`.prettierrc.json5` 文件
> - 一个 `.prettierrc.js`、`.prettierrc.cjs`、`prettier.config.js`、`prettier.config.cjs` 文件用 `module.exports` 导出
> - 一个 `.prettierrc.toml` 文件
>
> ##### 例子
>
> 一个 `.prettierrc` 文件示例(使用 json 编写)
>
> ```
> {
>   "trailingComma": "es5",
>   "tabWidth": 4,
>   "semi": false,
>   "singleQuote": true
> }
> ```

#### gitignore 文件

> 配置此文件可以让 git 对某些特定文件不追踪变化
>
> #### gitignore 语法规则
>
> - 空行不匹配任何文件，可以作为分隔符来提高可读性
>
> - `#` 为开头的行作为注释，若真的需要 `#`，则需要使用 `\#`
>
> - `/` 作为目录分割
>
> - `!` 用于排除已忽略目录中的某个子文件/目录（即再次追踪）
>
> - 如果在某个模式的开头或者中间（或者两者都有）存在 `/`，那么就是 `gitignore` 文件所在的根目录
>
> - 如果末尾存在 `/`，那么只匹配目录，不再匹配文件
>
> - `*` 匹配除了 `/` 之外的任何，`?` 匹配除 `/` 之外的**一个字符**，范围符号例如 [a-zA-Z] 匹配范围中的一个字符
>
> - ```
>   **
>   ```
>
>    
>
>   的意义就比较多了
>
>   - 例如 `**/foo` 匹配所有地方的 `foo` 文件或文件夹，与 `foo` 的模式相同
>   - `**/foo/bar` 匹配任何地方的 `foo` 目录下的 `bar` 文件或文件夹
>   - 后面的 `/**` 则匹配所有的子目录或者子文件，例如 `a/**` 匹配 a 下的所有目录和文件
>   - 中间的 `**` 则表示无限深度的子目录，例如 `a/**/b` 匹配 a 下的所有子目录下的 b 文件或文件夹
>
> ##### 例子
>
> ```
> .cache
> .DS_Store
> .idea
> *.log
> *.tgz
> coverage
> dist
> lib-cov
> logs
> node_modules
> temp
> ```



#### editorconfig

> 跨编辑器/IDE 规范编码风格，使用 yaml 风格，配置文件为 `.editorconfig`
>
> [官网](https://editorconfig.org/)
>
> 注意在 VSCode 中需要下载一个插件，用于支持 `editorconfigCore`
>
> 一个规范的 `.editorconfig` 通常是这样的：
>
> ```
> # EditorConfig 配置文件顶级文件
> root = true
> 
> # 每一个文件用一个新的空行结尾
> [*]
> charset = utf-8
> indent_size = 2
> indent_style = space
> end_of_line = lf
> insert_final_newline = true
> trim_trailing_whitespace = true
> 
> [*.md]
> insert_final_newline = false
> trim_trailing_whitespace = false
> 
> 
> # 使用大括号匹配多种拓展名的文件
> [*.{js,py}]
> charset = utf-8
> 
> # 使用4个空格缩进
> [*.py]
> indent_style = space
> indent_size = 4
> 
> # 制表符缩进（未指定尺寸）
> [Makefile]
> indent_style = tab
> 
> # lib目录下所有js文件，缩进2个空格
> [lib/**.js]
> indent_style = space
> indent_size = 2
> 
> # 匹配 package.json 或者 .travis.yml 文件，缩进2个空格
> [{package.json,.travis.yml}]
> indent_style = space
> indent_size = 2
> ```



#### gitattributes

> 当执行 git 动作时，.gitattributes 文件允许你指定由 git 使用的文件和路径的属性，例如：git commit 等。
>
> 比较常用的有 `eol`(end of line) 属性，主要原因在于 Windows 和 Unix like 的文件结尾行不同
>
> - windows 是 `CRLF`(Carriage Return Line Feed) 回车换行
> - 但在 unix like 系统中，使用 `LF`(Line Feed) 换行
>
> 由于换行符不同，不同操作平台之间的开发者很容易导致 Git 提交的文件不一致(可能会从 LF 改为 CRLF 或者反之)，所以 gitattributes 就可以排上用场了：
>
> 一个规范的 `.gitattributes` 的文件可能是这样的：
>
> ```
> *.js  eol=lf
> *.jsx eol=lf
> *.ts  eol=lf
> *.tsx eol=lf
> ```
>
> 如果希望工作区的所有文本都是规范化的，可以采用
>
> ```
> * text=auto
> *.js text eol=lf
> *.ts text eol=crlf
> *.sh -text
> ```
>
> 在上面的配置文件中规范：
>
> - 所有文件是 `auto`
> - `.js` 是 `lf`
> - `.ts` 是 `crlf`
> - `.sh` 不进行格式化
>
> ##### 引用
>
> - [详解](https://www.cnblogs.com/kidsitcn/p/4769344.html)



#### package.json

> https://docs.npmjs.com/cli/v7/configuring-npm/package-json/
>
> 
>
> ```json
> {
> 	#必须属性
>     "name": "cac",   		// 发布时的包名 
>     "version": "6.0.0"，    // 版本号
>     
>     #描述信息
>     "description":"Simple yet powerful framework for building command-line apps.",					   //描述信息
>     "keywords": [""],   	// 搜索关键字(用户npm search时会展示)
>     "author":"egoist <0x142857@gmail.com>",	//作者
>     "contributions":"",		//贡献者
>     "homepage":"",			//主页
>     "repository": {			//仓库地址和仓库类型
>         "url": "egoist/cac",
>         "type": "git"
>     },		
>     "bugs":"",				//仓库反馈地址
>     
>     #文件&目录
>     "main": "index-compat.js",	//包的入口文件
>     "module": "dist/index.mjs",	//程序入口,定义 npm 包的 ESM 规范的入口文件
>     "browser":"./src/index.js",	//定义 npm 包在 browser 环境下的入口文件
> 
>     "bin": "",				//命令行工具入口
>     "files":[//发布文件配置.当 npm 包发布时，files 指定的文件会被推送到 npm 服务器中
>         "dist",
>         "!**/__test__/**",
>         "/mod.js",
>         "/mod.ts",
>         "/deno",
>         "/index-compat.js"
>      ],
>     "directories":"",		//规范项目的目录
>     "exports": {			//定义不同path的导出，优先级高于main、file、module、browser
>         ".": {
>             "import": "./dist/index.mjs",//条件引用,import引入方式的入口文件
>             "require": "./index-compat.js"//条件引用,require引入方式的入口文件
>         },
>         "./package.json": "./package.json",
>         "./": "./"
>     },
>     #发布配置
>     "private":true,			//防止意外将私有库发布到npm服务器,只需设置为 true
>     "preferGlobal":true,	//用户不把该模块安装为全局模块时，设置为true就会显示警告
>     
>     "publishConfig": {
>       "tag": "1.1.0",		//限制发布版本
>       "registry": "https://registry.npmjs.org/",//让模块发布到特定 npm 仓库
>       "access": "public"
>     },
>     "os":["linux"],			//限制用户安装系统
>     "cpu":["x64", "AMD64"],	//限制用户安装cpu
>     "license":"MIT",		//开源许可协议
>     
>     #脚本配置
>     "scripts":{		//package.json 中内置的脚本入口，键值对格式,
>         "test": "jest",
>         "test:cov": "jest --coverage",
>         "build:deno": "node -r sucrase/register scripts/build-deno.ts",
>         "build:node": "rollup -c",
>         //rollup -c会生成umd/es/commonjs三种模块的代码, 
>         //"c"是config缩写, 代表读取rollup.config.js
>         "build": "yarn build:deno && yarn build:node",
>         "toc": "markdown-toc -i README.md",
>         "prepublishOnly": "npm run build && cp mod.js mod.mjs",
>         "docs:api": "typedoc --out api-doc --readme none --exclude \"**/__test__/**\" --theme minimal"
>     },	
>     "release": {
>         "branch": "master"
>     },
>     "config": {	//用来配置 scripts 运行时的配置参数
>         "commitizen": {
>             "path": "./node_modules/cz-conventional-changelog"
>         }
>     },
> 
>     "man":[			//指定 man 命令查找的文档地址
>         "./man/npm-access.1",
>  		"./man/npm-audit.1"
>     ],	
> 
>     #第三方配置
>     "typings":"dist/index.d.ts",	//指定 TypeScript 的入口文件
> 	"types": "dist/index.d.ts",		//同上
> 
>     "eslintConfig":"",	//eslint 的配置，可以写在单独的配置文件.eslintrc.json中
>     "babel":{},			//指定 Babel 的编译配置
>  	
> 	"unpkg": "dist/vue.js",// npm 上所有的文件都开启 cdn 服务
> //一个在Git暂存文件上运行linters的工具，配置后每次修改一个文件即可给所有文件执行一次lint检查，通常配合gitHooks一起使用。使用lint-staged时，每次提交代码只会检查当前改动的文件
>     "lint-staged":{
>         "linters": {
>             "*.{js,json,ts}": [
>                 "prettier --write",
>                 "git add"
>             ],
>             "*.md": [
>                 "markdown-toc -i",
>                 "prettier --write",
>                 "git add"
>             ]
>         },
>         "ignore": [
>             "dist/**",
>             "mod.js"
>         ]
>     },
> //husky是一个Git Hook工具，借助husky可以在git提交的不同生命周期进行一些自动化操作
>     "husky": {
>         "hooks": {
>             "pre-commit": "npm t && lint-staged"
>         }
>     },
>     //"gitHooks":{//gitHooks 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查
>     //  "pre-commit": "lint-staged"//用于实现每次提交只检查本次提交所修改的文件。
>     //},
>     "browserslist":"",
>     
> 	#依赖配置
>     "devDependencies": {//开发环境依赖
>         "@babel/core": "^7.12.10",
>         "@babel/plugin-syntax-typescript": "^7.12.1",
>         "@rollup/plugin-commonjs": "^17.0.0",
>         "@rollup/plugin-node-resolve": "^11.0.0",
>         "@types/fs-extra": "^9.0.5",//@types是npm的一个分支，用来存放*.d.ts文件
>         "@types/jest": "^26.0.19",
>         "@types/mri": "^1.1.0",	
>         "cz-conventional-changelog": "^2.1.0",
>         "esbuild": "^0.8.21",
>         "eslint-config-rem": "^3.0.0",
>         "execa": "^5.0.0",		//为 child_process 模块提供了一个包装器
>         "fs-extra": "^9.0.1",	//额外的文件系统方法 mkdirp...
>         "globby": "^11.0.1",
>         "husky": "^1.2.0",
>         "jest": "^24.9.0",		//测试库
>         "lint-staged": "^8.1.0",
>         "markdown-toc": "^1.2.0",//生成 markdown 页面的目录
>         "mri": "^1.1.6",		//简易的参数处理库 process.argv
>         "prettier": "^2.2.1",
>         "rollup": "^2.34.2",	//模块打包器
>         "rollup-plugin-dts": "^2.0.1",
>         "rollup-plugin-esbuild": "^2.6.1",
>         "semantic-release": "^17.3.0",	//用来实现自动化部署
>         "sucrase": "^3.16.0",
>         "ts-jest": "^26.4.4",
>         "ts-node": "^9.1.1",
>         "typedoc": "^0.19.2",	//typescript文档生成器
>         "typescript": "^4.1.2"
>     },	
>     
> 	"dependencies": {},		//生产环境依赖 
>     "bundledDependencies":{},	//	打包依赖
>     "peerDependencies":{},		//用来供插件指定其所需要的主工具的版本
>     "optionalDependencies":{},	//如果找不到包或安装失败时，npm仍能继续运行
> 	"engines":{
>         "node": ">=8"	//Node版本>=8
>     },				
> //npm包的版本或者Node版本有特殊要求,engines 只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装。
> }
> ```
>
> ##### 发布相关配置
>
> https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
>
> ##### 版本号
>
> 版本号遵循**「主版本号. 次版本号. 修订号」**的格式规定
>
> **「固定版本：」**4.0.3 就是固定版本
>
> **「波浪号：」**~ 4.0.3 表示安装 4.0.x 的最新版本（不低于 4.0.3）
>
> **「插入号：」** ^17.0.2表示安装 17.x.x 的最新版本（不低于 17.0.2）
>
> ##### 配置入口文件
>
>  /* 
>  三个入口文件相关的配置是有差别的.
>  在 Web 环境中，如果使用 loader 加载 ESM（ES module），
>  那么这三个配置的加载顺序是 browser→module→main，
>  如果使用 require 加载 CommonJS 模块，
>  则加载的顺序为 main→module→browser。
>  */
>
> ##### license
>
> license 字段用于指定软件的开源协议，开源协议表述了其他人获得代码后拥有的权利，可以对代码进行何种操作，何种操作又是被禁止的。常见的协议如下：
>
> - MIT ：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。
> - Apache ：类似于 MIT ，同时还包含了贡献者向用户提供专利授权相关的条款。
> - GPL ：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。

### circle.yml

CircleCI持续集成持续部署的配置文件由三部分组成

- 版本（version)
  - 你要使用的CircleCI版本
- 工作（jobs)
  - 你要执行的job清单，集合中：键为job名称，值位job内容。
  - 如使用workflow,job名称要唯一
  - 如不适用worflow,必须包含名称为build的job来作为提交代码时的默认job
- 工作流（workflows)

```yaml
# PHP CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-php/ for more details
#
# docker 键是用来指定 CircleCI 当前 job 使用 docker, 其值image是指 docker 所使用的镜像，必要时你可以同时指定多个镜像，比如你的项目需要依赖 mysql 或者 redis
# working_directory 属性是用来定义steps 在哪个目录运行
# steps 当前 job 要运行的 命令 (command) 列表
version: 2
jobs:
  #这是一个job
  build:
    docker:	
      - image: circleci/node:12	#第一个列出的容器为主容器，steps 都会在主容器中进行
    branches:
      ignore:
        - gh-pages # list of branches to ignore
        - /release\/.*/ # or ignore regexes
    steps: #steps 将负责对环境的初始化，与项目的构建、部署和测试 
      - checkout	#检出代码：将分支中的代码检出到 working_directory 
      - restore_cache: #从缓存中恢复composer依赖目录，避免每次都重新composer install
      	  #给yarn.lock这个文件的文件内容Base64后取 SHA256 hash
          key: dependency-cache-{{ checksum "yarn.lock" }}
          
      - run:		
          name: install dependences #安装依赖
          command: yarn
      - save_cache:  				#缓存依赖
          key: dependency-cache-{{ checksum "yarn.lock" }}
          paths:
            - ./node_modules
     
      - run:
          name: test	 			#运行单元测试
          command: yarn test:cov
      - run:
          name: upload coverage
          command: bash <(curl -s https://codecov.io/bash)
      - run:
          name: Release
          command: yarn semantic-release

```



### rollup.config.js

[javascript中的cjs(commonjs)、amd、umd、esm是什么？](https://juejin.cn/post/6935973925004247077)

不同的模块化方法。

cjs就是commonjs(require、module.exports),esm是es6语法(import..from,export)

```javascript
// rollup本身不支持处理从node_modules引入的第三方模块，
//需要通过额外的plugin — @rollup/plugin-node-resolve来处理。
import nodeResolvePlugin from '@rollup/plugin-node-resolve'//	处理第三方模块
import esbuildPlugin from 'rollup-plugin-esbuild'	//处理es模块
import dtsPlugin from 'rollup-plugin-dts'			//处理ts

function createConfig({ dts, esm } = {}) {
  let file = 'dist/index.js'
  if (dts) {
    file = file.replace('.js', '.d.ts')
  }
  //默认使用cjs模块语法，后缀.cjs 以.cjs和.mjs两种后缀来区分在配置文件中使用的模块语法。
  if (esm) {
    file = file.replace('.js', '.mjs')
  }
  return {
    input: 'src/index.ts',
    output: {
      format: dts || esm ? 'esm' : 'cjs',
      file,
      exports: 'named',
    },
    plugins: [
      nodeResolvePlugin({
        mainFields: dts ? ['types', 'typings'] : ['module', 'main'],
        extensions: dts ? ['.d.ts', '.ts'] : ['.js', '.json', '.mjs'],
        customResolveOptions: {
          moduleDirectories: dts
            ? ['node_modules/@types', 'node_modules']
            : ['node_modules'],
        },
      }),
      // emmmmm... 看上去写法好像很高级
      !dts && require('@rollup/plugin-commonjs')(),
      !dts &&
        esbuildPlugin({
          target: 'es2017',
        }),
      dts && dtsPlugin(),
    ].filter(Boolean),
  }
}

export default [
  createConfig(),
  createConfig({ dts: true }),
  createConfig({ esm: true }),
]

```

### ts.config.js

```javascript
{
  "compilerOptions": {
    "target": "es2015",// 目标js的版本
    "declaration": true,// 是否生成声明文件
    "declarationDir": "types",// 声明文件路径
    "esModuleInterop": true,// import * as React from "react"
    "pretty": true,
    "moduleResolution": "node",
    "lib": ["es2015", "es2016.array.include"],
    "allowSyntheticDefaultImports": true,
    "stripInternal": true,
    "noImplicitAny": true,// 在表达式和声明上有隐含的 any类型时报错。
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "alwaysStrict": true, // 严格模式, 强烈建议开启
    "module": "commonjs", // 目标代码的模块结构版本
    "outDir": "lib"// 目标文件所在路径
  },
  "include": ["src", "declarations.d.ts"],// 入口文件
  "exclude": ["src/deno.ts"]
}

```

### jest.config.js

Jest.config.js 是 jest 测试框架的配置文件,Jest 的测试脚本名形如*.test.js，不论 Jest 是全局运行还是通过 npm run test 运行，它都会执行当前目录下所有的*.test.js 或 *.spec.js 文件，并完成测试。

```javascript
module.exports = {
  testEnvironment: 'node',
  //文件转换器（编译器）设置，不同的文件需要不同的转换器。
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/'],
  //模块需要测试的文件扩展名，即让jest知道你需要测试覆盖的文件的扩展名都是什么。模块使用的文件扩展名数组，如果未指定，则使用默认数组，按从左到右的顺序查找的扩展名。建议将项目中最常用的扩展名放在左侧
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

```

## README结构

- banner
  - logo或者预览图，徽章badge
- 目录
  - 锚点跳转 （目录树可以用tree生成也可以用project-tree插件)
- 背景
  - 解决了什么问题
  - 使用场景
  - 技术栈
- 安装
  - 环境配置
  - 如何安装
- 示例 或 用法
  - demo
- 维护者
  - 维护者和协作者
  - 贡献者
- 使用许可
  - license



## 对cac的理解

### cac的程序流程图

> 抄的大佬的

[流程图](https://github.com/alexzhang1030/100-node-env-libs/blob/main/packages/001.cac/flow.svg)

### 如何实现链式调用

`return this`

```javascript
 command(rawName: string, description?: string, config?: CommandConfig) {
    const command = new Command(rawName, description || '', config, this)
    command.globalCommand = this.globalCommand
    this.commands.push(command)
    return command //链式调用
  }

  /**
   * Add a global CLI option.
   *
   * Which is also applied to sub-commands.
   */
  option(rawName: string, description: string, config?: OptionConfig) {
    this.globalCommand.option(rawName, description, config)
    return this
  }

  /**
   * Show help message when `-h, --help` flags appear.
   *
   */
  help(callback?: HelpCallback) {
    this.globalCommand.option('-h, --help', 'Display this message')
    this.globalCommand.helpCallback = callback
    this.showHelpOnExit = true
    return this
  }
```

### Brackets

#### Brackets 应该如何使用

- `command`中，`<>`代表必传，`[]`代表可选
- `option`中，`<>`代表只能传`string/number`，`[]`代表还能是`true`

```javascript
const cli = require('cac')()

cli
  .command('deploy <folder>', 'Deploy a folder to AWS')
  .option('--scale [level]', 'Scaling level')
  .action((folder, options) => {
    // ...
  })

cli
  .command('build [project]', 'Build a project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    // ...
  })

cli.parse()
```



#### Brackets  是如何实现的

- option

  ```javascript
  if (rawName.includes('<')) {
        this.required = true
      } else if (rawName.includes('[')) {
        this.required = false
      } else {
        // No arg needed, it's boolean flag
        this.isBoolean = true
      }
  }
  ```

- command

  ```javascript
  checkRequiredArgs() {
      const minimalArgsCount = this.args.filter((arg) => arg.required).length
  
      if (this.cli.args.length < minimalArgsCount) {
        throw new CACError(
          `missing required args for command \`${this.rawName}\``
        )
      }
    }
  ```

  





### Negated Options是如何实现的

允许选项为false

```javascript
cli
  .command('build [project]', 'Build a project')
  .option('--no-config', 'Disable config file')
  .option('--config <path>', 'Use a custom config file')
```

```javascript
export default class Option {
 	...
  negated: boolean

  constructor(
    public rawName: string,
      ...
  ) {
    rawName = rawName.replace(/\.\*/g, '')

    this.negated = false
    this.names = removeBrackets(rawName)
      .split(',')
      .map((v: string) => {
        let name = v.trim().replace(/^-{1,2}/, '')
        if (name.startsWith('no-')) {	//处理no开头的
          this.negated = true
          name = name.replace(/^no-/, '')
        }

        return camelcaseOptionName(name)
      })
	//...

    if (this.negated && this.config.default == null) {//处理
      this.config.default = true
    }

  }
}
```

