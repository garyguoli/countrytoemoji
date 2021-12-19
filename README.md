# country to emoji
Convert country name and ISO code to Emoji Flags not need dependencies

## Install

```
$ npm install countrytoemoji
$ yarn add countrytoemoji
$ pnpm add countrytoemoji
```
## Usage
import {countryToEmoji} from 'countrytoemoji';

countryToEmoji({ name: 'china' })
 ~> 🇨🇳

countryToEmoji({ iso: 'cn' })
~> 🇨🇳


countryToEmoji({ name: null, iso: 'cn'  })}
~> 🇨🇳

countryToEmoji({ name: null, iso: null  })} ~> // enpty string 

## Options

countryToEmoji supports 2 options , both of wich are optional:

name is country name (Defaults to null)

iso is ISO code (Defaults to null)
