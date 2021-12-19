# country to emoji
Convert country name and ISO code to Emoji Flags not need dependencies

## Install

```
$ npm install --save countrytoemoji
$ yarn add countrytoemoji
$ pnpm add countrytoemoji
```
## Usage


countryToEmoji({ name: 'china' })
 ~> 🇨🇳



countryToEmoji({ iso: 'cn' })
~> 🇨🇳


countryToEmoji({ name: null, iso: 'cn'  })}
~> 🇨🇳

countryToEmoji({ name: null, iso: null  })} ~> // enpty string 
