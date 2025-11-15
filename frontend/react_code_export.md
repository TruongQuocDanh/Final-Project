# React Project Code Export

Generated automatically by **react_code_exporter.py**


---

## `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Bookstore Admin</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

## `package-lock.json`

```json
{
  "name": "bookstore-admin",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "bookstore-admin",
      "version": "1.0.0",
      "dependencies": {
        "@ant-design/icons": "^6.1.0",
        "antd": "^5.28.0",
        "axios": "^1.7.7",
        "dayjs": "^1.11.11",
        "react": "^18.3.1",
        "react-dom": "^18.3.1"
      },
      "devDependencies": {
        "@vitejs/plugin-react": "^4.3.1",
        "vite": "^5.4.0"
      }
    },
    "node_modules/@ant-design/colors": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/@ant-design/colors/-/colors-8.0.0.tgz",
      "integrity": "sha512-6YzkKCw30EI/E9kHOIXsQDHmMvTllT8STzjMb4K2qzit33RW2pqCJP0sk+hidBntXxE+Vz4n1+RvCTfBw6OErw==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/fast-color": "^3.0.0"
      }
    },
    "node_modules/@ant-design/cssinjs": {
      "version": "1.24.0",
      "resolved": "https://registry.npmjs.org/@ant-design/cssinjs/-/cssinjs-1.24.0.tgz",
      "integrity": "sha512-K4cYrJBsgvL+IoozUXYjbT6LHHNt+19a9zkvpBPxLjFHas1UpPM2A5MlhROb0BT8N8WoavM5VsP9MeSeNK/3mg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.1",
        "@emotion/hash": "^0.8.0",
        "@emotion/unitless": "^0.7.5",
        "classnames": "^2.3.1",
        "csstype": "^3.1.3",
        "rc-util": "^5.35.0",
        "stylis": "^4.3.4"
      },
      "peerDependencies": {
        "react": ">=16.0.0",
        "react-dom": ">=16.0.0"
      }
    },
    "node_modules/@ant-design/cssinjs-utils": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@ant-design/cssinjs-utils/-/cssinjs-utils-1.1.3.tgz",
      "integrity": "sha512-nOoQMLW1l+xR1Co8NFVYiP8pZp3VjIIzqV6D6ShYF2ljtdwWJn5WSsH+7kvCktXL/yhEtWURKOfH5Xz/gzlwsg==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/cssinjs": "^1.21.0",
        "@babel/runtime": "^7.23.2",
        "rc-util": "^5.38.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@ant-design/fast-color": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@ant-design/fast-color/-/fast-color-3.0.0.tgz",
      "integrity": "sha512-eqvpP7xEDm2S7dUzl5srEQCBTXZMmY3ekf97zI+M2DHOYyKdJGH0qua0JACHTqbkRnD/KHFQP9J1uMJ/XWVzzA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.x"
      }
    },
    "node_modules/@ant-design/icons": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/@ant-design/icons/-/icons-6.1.0.tgz",
      "integrity": "sha512-KrWMu1fIg3w/1F2zfn+JlfNDU8dDqILfA5Tg85iqs1lf8ooyGlbkA+TkwfOKKgqpUmAiRY1PTFpuOU2DAIgSUg==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/colors": "^8.0.0",
        "@ant-design/icons-svg": "^4.4.0",
        "@rc-component/util": "^1.3.0",
        "clsx": "^2.1.1"
      },
      "engines": {
        "node": ">=8"
      },
      "peerDependencies": {
        "react": ">=16.0.0",
        "react-dom": ">=16.0.0"
      }
    },
    "node_modules/@ant-design/icons-svg": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/@ant-design/icons-svg/-/icons-svg-4.4.2.tgz",
      "integrity": "sha512-vHbT+zJEVzllwP+CM+ul7reTEfBR0vgxFe7+lREAsAA7YGsYpboiq2sQNeQeRvh09GfQgs/GyFEvZpJ9cLXpXA==",
      "license": "MIT"
    },
    "node_modules/@ant-design/react-slick": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@ant-design/react-slick/-/react-slick-1.1.2.tgz",
      "integrity": "sha512-EzlvzE6xQUBrZuuhSAFTdsr4P2bBBHGZwKFemEfq8gIGyIQCxalYfZW/T2ORbtQx5rU69o+WycP3exY/7T1hGA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.4",
        "classnames": "^2.2.5",
        "json2mq": "^0.2.0",
        "resize-observer-polyfill": "^1.5.1",
        "throttle-debounce": "^5.0.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
      "integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emotion/hash": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/@emotion/hash/-/hash-0.8.0.tgz",
      "integrity": "sha512-kBJtf7PH6aWwZ6fka3zQ0p6SBYzx4fl1LoZXE2RrnYST9Xljm7WfKJrU4g/Xr3Beg72MLrp1AWNUmuYJTL7Cow==",
      "license": "MIT"
    },
    "node_modules/@emotion/unitless": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/@emotion/unitless/-/unitless-0.7.5.tgz",
      "integrity": "sha512-OWORNpfjMsSSUBVrRBVGECkhWcULOAJz9ZW8uK9qgxD+87M7jHRcvh/A96XXNhXTLmKcoYSQtBEX7lHMO7YRwg==",
      "license": "MIT"
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@rc-component/async-validator": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/@rc-component/async-validator/-/async-validator-5.0.4.tgz",
      "integrity": "sha512-qgGdcVIF604M9EqjNF0hbUTz42bz/RDtxWdWuU5EQe3hi7M8ob54B6B35rOsvX5eSvIHIzT9iH1R3n+hk3CGfg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.24.4"
      },
      "engines": {
        "node": ">=14.x"
      }
    },
    "node_modules/@rc-component/color-picker": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@rc-component/color-picker/-/color-picker-2.0.1.tgz",
      "integrity": "sha512-WcZYwAThV/b2GISQ8F+7650r5ZZJ043E57aVBFkQ+kSY4C6wdofXgB0hBx+GPGpIU0Z81eETNoDUJMr7oy/P8Q==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/fast-color": "^2.0.6",
        "@babel/runtime": "^7.23.6",
        "classnames": "^2.2.6",
        "rc-util": "^5.38.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/color-picker/node_modules/@ant-design/fast-color": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/@ant-design/fast-color/-/fast-color-2.0.6.tgz",
      "integrity": "sha512-y2217gk4NqL35giHl72o6Zzqji9O7vHh9YmhUVkPtAOpoTCH4uWxo/pr4VE8t0+ChEPs0qo4eJRC5Q1eXWo3vA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.24.7"
      },
      "engines": {
        "node": ">=8.x"
      }
    },
    "node_modules/@rc-component/context": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@rc-component/context/-/context-1.4.0.tgz",
      "integrity": "sha512-kFcNxg9oLRMoL3qki0OMxK+7g5mypjgaaJp/pkOis/6rVxma9nJBF/8kCIuTYHUQNr0ii7MxqE33wirPZLJQ2w==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "rc-util": "^5.27.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/mini-decimal": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rc-component/mini-decimal/-/mini-decimal-1.1.0.tgz",
      "integrity": "sha512-jS4E7T9Li2GuYwI6PyiVXmxTiM6b07rlD9Ge8uGZSCz3WlzcG5ZK7g5bbuKNeZ9pgUuPK/5guV781ujdVpm4HQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.0"
      },
      "engines": {
        "node": ">=8.x"
      }
    },
    "node_modules/@rc-component/mutate-observer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rc-component/mutate-observer/-/mutate-observer-1.1.0.tgz",
      "integrity": "sha512-QjrOsDXQusNwGZPf4/qRQasg7UFEj06XiCJ8iuiq/Io7CrHrgVi6Uuetw60WAMG1799v+aM8kyc+1L/GBbHSlw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.0",
        "classnames": "^2.3.2",
        "rc-util": "^5.24.4"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/portal": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@rc-component/portal/-/portal-1.1.2.tgz",
      "integrity": "sha512-6f813C0IsasTZms08kfA8kPAGxbbkYToa8ALaiDIGGECU4i9hj8Plgbx0sNJDrey3EtHO30hmdaxtT0138xZcg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.0",
        "classnames": "^2.3.2",
        "rc-util": "^5.24.4"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/qrcode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rc-component/qrcode/-/qrcode-1.1.0.tgz",
      "integrity": "sha512-ABA80Yer0c6I2+moqNY0kF3Y1NxIT6wDP/EINIqbiRbfZKP1HtHpKMh8WuTXLgVGYsoWG2g9/n0PgM8KdnJb4Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.24.7",
        "classnames": "^2.3.2"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/tour": {
      "version": "1.15.1",
      "resolved": "https://registry.npmjs.org/@rc-component/tour/-/tour-1.15.1.tgz",
      "integrity": "sha512-Tr2t7J1DKZUpfJuDZWHxyxWpfmj8EZrqSgyMZ+BCdvKZ6r1UDsfU46M/iWAAFBy961Ssfom2kv5f3UcjIL2CmQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.0",
        "@rc-component/portal": "^1.0.0-9",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "^2.3.2",
        "rc-util": "^5.24.4"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/trigger": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@rc-component/trigger/-/trigger-2.3.0.tgz",
      "integrity": "sha512-iwaxZyzOuK0D7lS+0AQEtW52zUWxoGqTGkke3dRyb8pYiShmRpCjB/8TzPI4R6YySCH7Vm9BZj/31VPiiQTLBg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.2",
        "@rc-component/portal": "^1.1.0",
        "classnames": "^2.3.2",
        "rc-motion": "^2.0.0",
        "rc-resize-observer": "^1.3.1",
        "rc-util": "^5.44.0"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/@rc-component/util": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@rc-component/util/-/util-1.3.0.tgz",
      "integrity": "sha512-hfXE04CVsxI/slmWKeSh6du7sSKpbvVdVEZCa8A+2QWDlL97EsCYme2c3ZWLn1uC9FR21JoewlrhUPWO4QgO8w==",
      "license": "MIT",
      "dependencies": {
        "is-mobile": "^5.0.0",
        "react-is": "^18.2.0"
      },
      "peerDependencies": {
        "react": ">=18.0.0",
        "react-dom": ">=18.0.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.27",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.27.tgz",
      "integrity": "sha512-+d0F4MKMCbeVUJwG96uQ4SgAznZNSq93I3V+9NHA4OpvqG8mRCpGdKmK8l/dl02h2CCDHwW2FqilnTyDcAnqjA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.52.5.tgz",
      "integrity": "sha512-8c1vW4ocv3UOMp9K+gToY5zL2XiiVw3k7f1ksf4yO1FlDFQ1C2u72iACFnSOceJFsWskc2WZNqeRhFRPzv+wtQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.52.5.tgz",
      "integrity": "sha512-mQGfsIEFcu21mvqkEKKu2dYmtuSZOBMmAl5CFlPGLY94Vlcm+zWApK7F/eocsNzp8tKmbeBP8yXyAbx0XHsFNA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.52.5.tgz",
      "integrity": "sha512-takF3CR71mCAGA+v794QUZ0b6ZSrgJkArC+gUiG6LB6TQty9T0Mqh3m2ImRBOxS2IeYBo4lKWIieSvnEk2OQWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.52.5.tgz",
      "integrity": "sha512-W901Pla8Ya95WpxDn//VF9K9u2JbocwV/v75TE0YIHNTbhqUTv9w4VuQ9MaWlNOkkEfFwkdNhXgcLqPSmHy0fA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.52.5.tgz",
      "integrity": "sha512-QofO7i7JycsYOWxe0GFqhLmF6l1TqBswJMvICnRUjqCx8b47MTo46W8AoeQwiokAx3zVryVnxtBMcGcnX12LvA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.52.5.tgz",
      "integrity": "sha512-jr21b/99ew8ujZubPo9skbrItHEIE50WdV86cdSoRkKtmWa+DDr6fu2c/xyRT0F/WazZpam6kk7IHBerSL7LDQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.52.5.tgz",
      "integrity": "sha512-PsNAbcyv9CcecAUagQefwX8fQn9LQ4nZkpDboBOttmyffnInRy8R8dSg6hxxl2Re5QhHBf6FYIDhIj5v982ATQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.52.5.tgz",
      "integrity": "sha512-Fw4tysRutyQc/wwkmcyoqFtJhh0u31K+Q6jYjeicsGJJ7bbEq8LwPWV/w0cnzOqR2m694/Af6hpFayLJZkG2VQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.52.5.tgz",
      "integrity": "sha512-a+3wVnAYdQClOTlyapKmyI6BLPAFYs0JM8HRpgYZQO02rMR09ZcV9LbQB+NL6sljzG38869YqThrRnfPMCDtZg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.52.5.tgz",
      "integrity": "sha512-AvttBOMwO9Pcuuf7m9PkC1PUIKsfaAJ4AYhy944qeTJgQOqJYJ9oVl2nYgY7Rk0mkbsuOpCAYSs6wLYB2Xiw0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.52.5.tgz",
      "integrity": "sha512-DkDk8pmXQV2wVrF6oq5tONK6UHLz/XcEVow4JTTerdeV1uqPeHxwcg7aFsfnSm9L+OO8WJsWotKM2JJPMWrQtA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.52.5.tgz",
      "integrity": "sha512-W/b9ZN/U9+hPQVvlGwjzi+Wy4xdoH2I8EjaCkMvzpI7wJUs8sWJ03Rq96jRnHkSrcHTpQe8h5Tg3ZzUPGauvAw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.52.5.tgz",
      "integrity": "sha512-sjQLr9BW7R/ZiXnQiWPkErNfLMkkWIoCz7YMn27HldKsADEKa5WYdobaa1hmN6slu9oWQbB6/jFpJ+P2IkVrmw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.52.5.tgz",
      "integrity": "sha512-hq3jU/kGyjXWTvAh2awn8oHroCbrPm8JqM7RUpKjalIRWWXE01CQOf/tUNWNHjmbMHg/hmNCwc/Pz3k1T/j/Lg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.52.5.tgz",
      "integrity": "sha512-gn8kHOrku8D4NGHMK1Y7NA7INQTRdVOntt1OCYypZPRt6skGbddska44K8iocdpxHTMMNui5oH4elPH4QOLrFQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.52.5.tgz",
      "integrity": "sha512-hXGLYpdhiNElzN770+H2nlx+jRog8TyynpTVzdlc6bndktjKWyZyiCsuDAlpd+j+W+WNqfcyAWz9HxxIGfZm1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.52.5.tgz",
      "integrity": "sha512-arCGIcuNKjBoKAXD+y7XomR9gY6Mw7HnFBv5Rw7wQRvwYLR7gBAgV7Mb2QTyjXfTveBNFAtPt46/36vV9STLNg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.52.5.tgz",
      "integrity": "sha512-QoFqB6+/9Rly/RiPjaomPLmR/13cgkIGfA40LHly9zcH1S0bN2HVFYk3a1eAyHQyjs3ZJYlXvIGtcCs5tko9Cw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.52.5.tgz",
      "integrity": "sha512-w0cDWVR6MlTstla1cIfOGyl8+qb93FlAVutcor14Gf5Md5ap5ySfQ7R9S/NjNaMLSFdUnKGEasmVnu3lCMqB7w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.52.5.tgz",
      "integrity": "sha512-Aufdpzp7DpOTULJCuvzqcItSGDH73pF3ko/f+ckJhxQyHtp67rHw3HMNxoIdDMUITJESNE6a8uh4Lo4SLouOUg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.52.5.tgz",
      "integrity": "sha512-UGBUGPFp1vkj6p8wCRraqNhqwX/4kNQPS57BCFc8wYh0g94iVIW33wJtQAx3G7vrjjNtRaxiMUylM0ktp/TRSQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.52.5.tgz",
      "integrity": "sha512-TAcgQh2sSkykPRWLrdyy2AiceMckNf5loITqXxFI5VuQjS5tSuw3WlwdN8qv8vzjLAUTvYaH/mVjSFpbkFbpTg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.7.0.tgz",
      "integrity": "sha512-gUu9hwfWvvEDBBmgtAowQCojwZmJ5mcLn3aufeCsitijs3+f2NsrPtlAWIR6OPiqljl96GVCUbLe0HyqIpVaoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.27",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.17.0"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/antd": {
      "version": "5.28.0",
      "resolved": "https://registry.npmjs.org/antd/-/antd-5.28.0.tgz",
      "integrity": "sha512-AmCvyhWGHzlDQ6sfnGBBrFm/8sLPbBI8d/NDBsecliKqrTZUMr07TAQldo43iowwKzvgKxxuRoUHaBaYcBMdQA==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/colors": "^7.2.1",
        "@ant-design/cssinjs": "^1.23.0",
        "@ant-design/cssinjs-utils": "^1.1.3",
        "@ant-design/fast-color": "^2.0.6",
        "@ant-design/icons": "^5.6.1",
        "@ant-design/react-slick": "~1.1.2",
        "@babel/runtime": "^7.26.0",
        "@rc-component/color-picker": "~2.0.1",
        "@rc-component/mutate-observer": "^1.1.0",
        "@rc-component/qrcode": "~1.1.0",
        "@rc-component/tour": "~1.15.1",
        "@rc-component/trigger": "^2.3.0",
        "classnames": "^2.5.1",
        "copy-to-clipboard": "^3.3.3",
        "dayjs": "^1.11.11",
        "rc-cascader": "~3.34.0",
        "rc-checkbox": "~3.5.0",
        "rc-collapse": "~3.9.0",
        "rc-dialog": "~9.6.0",
        "rc-drawer": "~7.3.0",
        "rc-dropdown": "~4.2.1",
        "rc-field-form": "~2.7.1",
        "rc-image": "~7.12.0",
        "rc-input": "~1.8.0",
        "rc-input-number": "~9.5.0",
        "rc-mentions": "~2.20.0",
        "rc-menu": "~9.16.1",
        "rc-motion": "^2.9.5",
        "rc-notification": "~5.6.4",
        "rc-pagination": "~5.1.0",
        "rc-picker": "~4.11.3",
        "rc-progress": "~4.0.0",
        "rc-rate": "~2.13.1",
        "rc-resize-observer": "^1.4.3",
        "rc-segmented": "~2.7.0",
        "rc-select": "~14.16.8",
        "rc-slider": "~11.1.9",
        "rc-steps": "~6.0.1",
        "rc-switch": "~4.1.0",
        "rc-table": "~7.54.0",
        "rc-tabs": "~15.7.0",
        "rc-textarea": "~1.10.2",
        "rc-tooltip": "~6.4.0",
        "rc-tree": "~5.13.1",
        "rc-tree-select": "~5.27.0",
        "rc-upload": "~4.11.0",
        "rc-util": "^5.44.4",
        "scroll-into-view-if-needed": "^3.1.0",
        "throttle-debounce": "^5.0.2"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/ant-design"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/antd/node_modules/@ant-design/colors": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/@ant-design/colors/-/colors-7.2.1.tgz",
      "integrity": "sha512-lCHDcEzieu4GA3n8ELeZ5VQ8pKQAWcGGLRTQ50aQM2iqPpq2evTxER84jfdPvsPAtEcZ7m44NI45edFMo8oOYQ==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/fast-color": "^2.0.6"
      }
    },
    "node_modules/antd/node_modules/@ant-design/fast-color": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/@ant-design/fast-color/-/fast-color-2.0.6.tgz",
      "integrity": "sha512-y2217gk4NqL35giHl72o6Zzqji9O7vHh9YmhUVkPtAOpoTCH4uWxo/pr4VE8t0+ChEPs0qo4eJRC5Q1eXWo3vA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.24.7"
      },
      "engines": {
        "node": ">=8.x"
      }
    },
    "node_modules/antd/node_modules/@ant-design/icons": {
      "version": "5.6.1",
      "resolved": "https://registry.npmjs.org/@ant-design/icons/-/icons-5.6.1.tgz",
      "integrity": "sha512-0/xS39c91WjPAZOWsvi1//zjx6kAp4kxWwctR6kuU6p133w8RU0D2dSCvZC19uQyharg/sAvYxGYWl01BbZZfg==",
      "license": "MIT",
      "dependencies": {
        "@ant-design/colors": "^7.0.0",
        "@ant-design/icons-svg": "^4.4.0",
        "@babel/runtime": "^7.24.8",
        "classnames": "^2.2.6",
        "rc-util": "^5.31.1"
      },
      "engines": {
        "node": ">=8"
      },
      "peerDependencies": {
        "react": ">=16.0.0",
        "react-dom": ">=16.0.0"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/axios": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.1.tgz",
      "integrity": "sha512-hU4EGxxt+j7TQijx1oYdAjw4xuIp1wRQSsbMFwSthCWeBQur1eF+qJ5iQ5sN3Tw8YRzQNKb8jszgBdMDVqwJcw==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.23",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.8.23.tgz",
      "integrity": "sha512-616V5YX4bepJFzNyOfce5Fa8fDJMfoxzOIzDCZwaGL8MKVpFrXqfNUoIpRn9YMI5pXf/VKgzjB4htFMsFKKdiQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/browserslist": {
      "version": "4.27.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.27.0.tgz",
      "integrity": "sha512-AXVQwdhot1eqLihwasPElhX2tAZiBjWdJ9i/Zcj2S6QYIjkx62OKSfnobkriB81C3l4w0rVy3Nt4jaTBltYEpw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.8.19",
        "caniuse-lite": "^1.0.30001751",
        "electron-to-chromium": "^1.5.238",
        "node-releases": "^2.0.26",
        "update-browserslist-db": "^1.1.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001753",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001753.tgz",
      "integrity": "sha512-Bj5H35MD/ebaOV4iDLqPEtiliTN29qkGtEHCwawWn4cYm+bPJM2NsaP30vtZcnERClMzp52J4+aw2UNbK4o+zw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/classnames": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.5.1.tgz",
      "integrity": "sha512-saHYOzhIQs6wy2sVxTM6bUDsQO4F50V9RQ22qBpEdCW+I+/Wmke2HOl6lS6dTpdxVhb88/I6+Hs+438c3lfUow==",
      "license": "MIT"
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/compute-scroll-into-view": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/compute-scroll-into-view/-/compute-scroll-into-view-3.1.1.tgz",
      "integrity": "sha512-VRhuHOLoKYOy4UbilLbUzbYg93XLjv2PncJC50EuTWPA3gaja1UjBsUP/D/9/juV3vQFr6XBEzn9KCAHdUvOHw==",
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/copy-to-clipboard": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/copy-to-clipboard/-/copy-to-clipboard-3.3.3.tgz",
      "integrity": "sha512-2KV8NhB5JqC3ky0r9PMCAZKbUHSwtEo4CwCs0KXgruG43gX5PMqDEBbVU4OUzw2MuAWUfsuFmWvEKG5QRfSnJA==",
      "license": "MIT",
      "dependencies": {
        "toggle-selection": "^1.0.6"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "license": "MIT"
    },
    "node_modules/dayjs": {
      "version": "1.11.19",
      "resolved": "https://registry.npmjs.org/dayjs/-/dayjs-1.11.19.tgz",
      "integrity": "sha512-t5EcLVS6QPBNqM2z8fakk/NKel+Xzshgt8FFKAn+qwlD1pzZWxh0nVCrvFK7ZDb6XucZeF9z8C7CBWTRIVApAw==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.244",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.244.tgz",
      "integrity": "sha512-OszpBN7xZX4vWMPJwB9illkN/znA8M36GQqQxi6MNy9axWxhOfJyZZJtSLQCpEFLHP2xK33BiWx9aIuIEXVCcw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.4.tgz",
      "integrity": "sha512-KrGhL9Q4zjj0kiUt5OO4Mr/A/jlI2jDYs5eHBpYHPcBEVSiipAvn2Ko2HnPe20rmcuuvMHNdZFp+4IlGTMF0Ow==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-mobile": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/is-mobile/-/is-mobile-5.0.0.tgz",
      "integrity": "sha512-Tz/yndySvLAEXh+Uk8liFCxOwVH6YutuR74utvOcu7I9Di+DwM0mtdPVZNaVvvBUM2OXxne/NhOs1zAO7riusQ==",
      "license": "MIT"
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json2mq": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/json2mq/-/json2mq-0.2.0.tgz",
      "integrity": "sha512-SzoRg7ux5DWTII9J2qkrZrqV1gt+rTaoufMxEzXbS26Uid0NwaJd123HcoB80TgubEppxxIGdNxCx50fEoEWQA==",
      "license": "MIT",
      "dependencies": {
        "string-convert": "^0.2.0"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/rc-cascader": {
      "version": "3.34.0",
      "resolved": "https://registry.npmjs.org/rc-cascader/-/rc-cascader-3.34.0.tgz",
      "integrity": "sha512-KpXypcvju9ptjW9FaN2NFcA2QH9E9LHKq169Y0eWtH4e/wHQ5Wh5qZakAgvb8EKZ736WZ3B0zLLOBsrsja5Dag==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.25.7",
        "classnames": "^2.3.1",
        "rc-select": "~14.16.2",
        "rc-tree": "~5.13.0",
        "rc-util": "^5.43.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-checkbox": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/rc-checkbox/-/rc-checkbox-3.5.0.tgz",
      "integrity": "sha512-aOAQc3E98HteIIsSqm6Xk2FPKIER6+5vyEFMZfo73TqM+VVAIqOkHoPjgKLqSNtVLWScoaM7vY2ZrGEheI79yg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.3.2",
        "rc-util": "^5.25.2"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-collapse": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/rc-collapse/-/rc-collapse-3.9.0.tgz",
      "integrity": "sha512-swDdz4QZ4dFTo4RAUMLL50qP0EY62N2kvmk2We5xYdRwcRn8WcYtuetCJpwpaCbUfUt5+huLpVxhvmnK+PHrkA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "2.x",
        "rc-motion": "^2.3.4",
        "rc-util": "^5.27.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-dialog": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/rc-dialog/-/rc-dialog-9.6.0.tgz",
      "integrity": "sha512-ApoVi9Z8PaCQg6FsUzS8yvBEQy0ZL2PkuvAgrmohPkN3okps5WZ5WQWPc1RNuiOKaAYv8B97ACdsFU5LizzCqg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "@rc-component/portal": "^1.0.0-8",
        "classnames": "^2.2.6",
        "rc-motion": "^2.3.0",
        "rc-util": "^5.21.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-drawer": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/rc-drawer/-/rc-drawer-7.3.0.tgz",
      "integrity": "sha512-DX6CIgiBWNpJIMGFO8BAISFkxiuKitoizooj4BDyee8/SnBn0zwO2FHrNDpqqepj0E/TFTDpmEBCyFuTgC7MOg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@rc-component/portal": "^1.1.1",
        "classnames": "^2.2.6",
        "rc-motion": "^2.6.1",
        "rc-util": "^5.38.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-dropdown": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/rc-dropdown/-/rc-dropdown-4.2.1.tgz",
      "integrity": "sha512-YDAlXsPv3I1n42dv1JpdM7wJ+gSUBfeyPK59ZpBD9jQhK9jVuxpjj3NmWQHOBceA1zEPVX84T2wbdb2SD0UjmA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "^2.2.6",
        "rc-util": "^5.44.1"
      },
      "peerDependencies": {
        "react": ">=16.11.0",
        "react-dom": ">=16.11.0"
      }
    },
    "node_modules/rc-field-form": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rc-field-form/-/rc-field-form-2.7.1.tgz",
      "integrity": "sha512-vKeSifSJ6HoLaAB+B8aq/Qgm8a3dyxROzCtKNCsBQgiverpc4kWDQihoUwzUj+zNWJOykwSY4dNX3QrGwtVb9A==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.0",
        "@rc-component/async-validator": "^5.0.3",
        "rc-util": "^5.32.2"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-image": {
      "version": "7.12.0",
      "resolved": "https://registry.npmjs.org/rc-image/-/rc-image-7.12.0.tgz",
      "integrity": "sha512-cZ3HTyyckPnNnUb9/DRqduqzLfrQRyi+CdHjdqgsyDpI3Ln5UX1kXnAhPBSJj9pVRzwRFgqkN7p9b6HBDjmu/Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.2",
        "@rc-component/portal": "^1.0.2",
        "classnames": "^2.2.6",
        "rc-dialog": "~9.6.0",
        "rc-motion": "^2.6.2",
        "rc-util": "^5.34.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-input": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/rc-input/-/rc-input-1.8.0.tgz",
      "integrity": "sha512-KXvaTbX+7ha8a/k+eg6SYRVERK0NddX8QX7a7AnRvUa/rEH0CNMlpcBzBkhI0wp2C8C4HlMoYl8TImSN+fuHKA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.1",
        "classnames": "^2.2.1",
        "rc-util": "^5.18.1"
      },
      "peerDependencies": {
        "react": ">=16.0.0",
        "react-dom": ">=16.0.0"
      }
    },
    "node_modules/rc-input-number": {
      "version": "9.5.0",
      "resolved": "https://registry.npmjs.org/rc-input-number/-/rc-input-number-9.5.0.tgz",
      "integrity": "sha512-bKaEvB5tHebUURAEXw35LDcnRZLq3x1k7GxfAqBMzmpHkDGzjAtnUL8y4y5N15rIFIg5IJgwr211jInl3cipag==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "@rc-component/mini-decimal": "^1.0.1",
        "classnames": "^2.2.5",
        "rc-input": "~1.8.0",
        "rc-util": "^5.40.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-mentions": {
      "version": "2.20.0",
      "resolved": "https://registry.npmjs.org/rc-mentions/-/rc-mentions-2.20.0.tgz",
      "integrity": "sha512-w8HCMZEh3f0nR8ZEd466ATqmXFCMGMN5UFCzEUL0bM/nGw/wOS2GgRzKBcm19K++jDyuWCOJOdgcKGXU3fXfbQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.22.5",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "^2.2.6",
        "rc-input": "~1.8.0",
        "rc-menu": "~9.16.0",
        "rc-textarea": "~1.10.0",
        "rc-util": "^5.34.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-menu": {
      "version": "9.16.1",
      "resolved": "https://registry.npmjs.org/rc-menu/-/rc-menu-9.16.1.tgz",
      "integrity": "sha512-ghHx6/6Dvp+fw8CJhDUHFHDJ84hJE3BXNCzSgLdmNiFErWSOaZNsihDAsKq9ByTALo/xkNIwtDFGIl6r+RPXBg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "2.x",
        "rc-motion": "^2.4.3",
        "rc-overflow": "^1.3.1",
        "rc-util": "^5.27.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-motion": {
      "version": "2.9.5",
      "resolved": "https://registry.npmjs.org/rc-motion/-/rc-motion-2.9.5.tgz",
      "integrity": "sha512-w+XTUrfh7ArbYEd2582uDrEhmBHwK1ZENJiSJVb7uRxdE7qJSYjbO2eksRXmndqyKqKoYPc9ClpPh5242mV1vA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.1",
        "classnames": "^2.2.1",
        "rc-util": "^5.44.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-notification": {
      "version": "5.6.4",
      "resolved": "https://registry.npmjs.org/rc-notification/-/rc-notification-5.6.4.tgz",
      "integrity": "sha512-KcS4O6B4qzM3KH7lkwOB7ooLPZ4b6J+VMmQgT51VZCeEcmghdeR4IrMcFq0LG+RPdnbe/ArT086tGM8Snimgiw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "2.x",
        "rc-motion": "^2.9.0",
        "rc-util": "^5.20.1"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-overflow": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/rc-overflow/-/rc-overflow-1.5.0.tgz",
      "integrity": "sha512-Lm/v9h0LymeUYJf0x39OveU52InkdRXqnn2aYXfWmo8WdOonIKB2kfau+GF0fWq6jPgtdO9yMqveGcK6aIhJmg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.1",
        "classnames": "^2.2.1",
        "rc-resize-observer": "^1.0.0",
        "rc-util": "^5.37.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-pagination": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/rc-pagination/-/rc-pagination-5.1.0.tgz",
      "integrity": "sha512-8416Yip/+eclTFdHXLKTxZvn70duYVGTvUUWbckCCZoIl3jagqke3GLsFrMs0bsQBikiYpZLD9206Ej4SOdOXQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.3.2",
        "rc-util": "^5.38.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-picker": {
      "version": "4.11.3",
      "resolved": "https://registry.npmjs.org/rc-picker/-/rc-picker-4.11.3.tgz",
      "integrity": "sha512-MJ5teb7FlNE0NFHTncxXQ62Y5lytq6sh5nUw0iH8OkHL/TjARSEvSHpr940pWgjGANpjCwyMdvsEV55l5tYNSg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.24.7",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "^2.2.1",
        "rc-overflow": "^1.3.2",
        "rc-resize-observer": "^1.4.0",
        "rc-util": "^5.43.0"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "date-fns": ">= 2.x",
        "dayjs": ">= 1.x",
        "luxon": ">= 3.x",
        "moment": ">= 2.x",
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      },
      "peerDependenciesMeta": {
        "date-fns": {
          "optional": true
        },
        "dayjs": {
          "optional": true
        },
        "luxon": {
          "optional": true
        },
        "moment": {
          "optional": true
        }
      }
    },
    "node_modules/rc-progress": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/rc-progress/-/rc-progress-4.0.0.tgz",
      "integrity": "sha512-oofVMMafOCokIUIBnZLNcOZFsABaUw8PPrf1/y0ZBvKZNpOiu5h4AO9vv11Sw0p4Hb3D0yGWuEattcQGtNJ/aw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.2.6",
        "rc-util": "^5.16.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-rate": {
      "version": "2.13.1",
      "resolved": "https://registry.npmjs.org/rc-rate/-/rc-rate-2.13.1.tgz",
      "integrity": "sha512-QUhQ9ivQ8Gy7mtMZPAjLbxBt5y9GRp65VcUyGUMF3N3fhiftivPHdpuDIaWIMOTEprAjZPC08bls1dQB+I1F2Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.2.5",
        "rc-util": "^5.0.1"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-resize-observer": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/rc-resize-observer/-/rc-resize-observer-1.4.3.tgz",
      "integrity": "sha512-YZLjUbyIWox8E9i9C3Tm7ia+W7euPItNWSPX5sCcQTYbnwDb5uNpnLHQCG1f22oZWUhLw4Mv2tFmeWe68CDQRQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.7",
        "classnames": "^2.2.1",
        "rc-util": "^5.44.1",
        "resize-observer-polyfill": "^1.5.1"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-segmented": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/rc-segmented/-/rc-segmented-2.7.0.tgz",
      "integrity": "sha512-liijAjXz+KnTRVnxxXG2sYDGd6iLL7VpGGdR8gwoxAXy2KglviKCxLWZdjKYJzYzGSUwKDSTdYk8brj54Bn5BA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.1",
        "classnames": "^2.2.1",
        "rc-motion": "^2.4.4",
        "rc-util": "^5.17.0"
      },
      "peerDependencies": {
        "react": ">=16.0.0",
        "react-dom": ">=16.0.0"
      }
    },
    "node_modules/rc-select": {
      "version": "14.16.8",
      "resolved": "https://registry.npmjs.org/rc-select/-/rc-select-14.16.8.tgz",
      "integrity": "sha512-NOV5BZa1wZrsdkKaiK7LHRuo5ZjZYMDxPP6/1+09+FB4KoNi8jcG1ZqLE3AVCxEsYMBe65OBx71wFoHRTP3LRg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "@rc-component/trigger": "^2.1.1",
        "classnames": "2.x",
        "rc-motion": "^2.0.1",
        "rc-overflow": "^1.3.1",
        "rc-util": "^5.16.1",
        "rc-virtual-list": "^3.5.2"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": "*",
        "react-dom": "*"
      }
    },
    "node_modules/rc-slider": {
      "version": "11.1.9",
      "resolved": "https://registry.npmjs.org/rc-slider/-/rc-slider-11.1.9.tgz",
      "integrity": "sha512-h8IknhzSh3FEM9u8ivkskh+Ef4Yo4JRIY2nj7MrH6GQmrwV6mcpJf5/4KgH5JaVI1H3E52yCdpOlVyGZIeph5A==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.2.5",
        "rc-util": "^5.36.0"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-steps": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/rc-steps/-/rc-steps-6.0.1.tgz",
      "integrity": "sha512-lKHL+Sny0SeHkQKKDJlAjV5oZ8DwCdS2hFhAkIjuQt1/pB81M0cA0ErVFdHq9+jmPmFw1vJB2F5NBzFXLJxV+g==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.16.7",
        "classnames": "^2.2.3",
        "rc-util": "^5.16.1"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-switch": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/rc-switch/-/rc-switch-4.1.0.tgz",
      "integrity": "sha512-TI8ufP2Az9oEbvyCeVE4+90PDSljGyuwix3fV58p7HV2o4wBnVToEyomJRVyTaZeqNPAp+vqeo4Wnj5u0ZZQBg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.21.0",
        "classnames": "^2.2.1",
        "rc-util": "^5.30.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-table": {
      "version": "7.54.0",
      "resolved": "https://registry.npmjs.org/rc-table/-/rc-table-7.54.0.tgz",
      "integrity": "sha512-/wDTkki6wBTjwylwAGjpLKYklKo9YgjZwAU77+7ME5mBoS32Q4nAwoqhA2lSge6fobLW3Tap6uc5xfwaL2p0Sw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "@rc-component/context": "^1.4.0",
        "classnames": "^2.2.5",
        "rc-resize-observer": "^1.1.0",
        "rc-util": "^5.44.3",
        "rc-virtual-list": "^3.14.2"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-tabs": {
      "version": "15.7.0",
      "resolved": "https://registry.npmjs.org/rc-tabs/-/rc-tabs-15.7.0.tgz",
      "integrity": "sha512-ZepiE+6fmozYdWf/9gVp7k56PKHB1YYoDsKeQA1CBlJ/POIhjkcYiv0AGP0w2Jhzftd3AVvZP/K+V+Lpi2ankA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.2",
        "classnames": "2.x",
        "rc-dropdown": "~4.2.0",
        "rc-menu": "~9.16.0",
        "rc-motion": "^2.6.2",
        "rc-resize-observer": "^1.0.0",
        "rc-util": "^5.34.1"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-textarea": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/rc-textarea/-/rc-textarea-1.10.2.tgz",
      "integrity": "sha512-HfaeXiaSlpiSp0I/pvWpecFEHpVysZ9tpDLNkxQbMvMz6gsr7aVZ7FpWP9kt4t7DB+jJXesYS0us1uPZnlRnwQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "^2.2.1",
        "rc-input": "~1.8.0",
        "rc-resize-observer": "^1.0.0",
        "rc-util": "^5.27.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-tooltip": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/rc-tooltip/-/rc-tooltip-6.4.0.tgz",
      "integrity": "sha512-kqyivim5cp8I5RkHmpsp1Nn/Wk+1oeloMv9c7LXNgDxUpGm+RbXJGL+OPvDlcRnx9DBeOe4wyOIl4OKUERyH1g==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.11.2",
        "@rc-component/trigger": "^2.0.0",
        "classnames": "^2.3.1",
        "rc-util": "^5.44.3"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-tree": {
      "version": "5.13.1",
      "resolved": "https://registry.npmjs.org/rc-tree/-/rc-tree-5.13.1.tgz",
      "integrity": "sha512-FNhIefhftobCdUJshO7M8uZTA9F4OPGVXqGfZkkD/5soDeOhwO06T/aKTrg0WD8gRg/pyfq+ql3aMymLHCTC4A==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.10.1",
        "classnames": "2.x",
        "rc-motion": "^2.0.1",
        "rc-util": "^5.16.1",
        "rc-virtual-list": "^3.5.1"
      },
      "engines": {
        "node": ">=10.x"
      },
      "peerDependencies": {
        "react": "*",
        "react-dom": "*"
      }
    },
    "node_modules/rc-tree-select": {
      "version": "5.27.0",
      "resolved": "https://registry.npmjs.org/rc-tree-select/-/rc-tree-select-5.27.0.tgz",
      "integrity": "sha512-2qTBTzwIT7LRI1o7zLyrCzmo5tQanmyGbSaGTIf7sYimCklAToVVfpMC6OAldSKolcnjorBYPNSKQqJmN3TCww==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.25.7",
        "classnames": "2.x",
        "rc-select": "~14.16.2",
        "rc-tree": "~5.13.0",
        "rc-util": "^5.43.0"
      },
      "peerDependencies": {
        "react": "*",
        "react-dom": "*"
      }
    },
    "node_modules/rc-upload": {
      "version": "4.11.0",
      "resolved": "https://registry.npmjs.org/rc-upload/-/rc-upload-4.11.0.tgz",
      "integrity": "sha512-ZUyT//2JAehfHzjWowqROcwYJKnZkIUGWaTE/VogVrepSl7AFNbQf4+zGfX4zl9Vrj/Jm8scLO0R6UlPDKK4wA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "classnames": "^2.2.5",
        "rc-util": "^5.2.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-util": {
      "version": "5.44.4",
      "resolved": "https://registry.npmjs.org/rc-util/-/rc-util-5.44.4.tgz",
      "integrity": "sha512-resueRJzmHG9Q6rI/DfK6Kdv9/Lfls05vzMs1Sk3M2P+3cJa+MakaZyWY8IPfehVuhPJFKrIY1IK4GqbiaiY5w==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "react-is": "^18.2.0"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/rc-virtual-list": {
      "version": "3.19.2",
      "resolved": "https://registry.npmjs.org/rc-virtual-list/-/rc-virtual-list-3.19.2.tgz",
      "integrity": "sha512-Ys6NcjwGkuwkeaWBDqfI3xWuZ7rDiQXlH1o2zLfFzATfEgXcqpk8CkgMfbJD81McqjcJVez25a3kPxCR807evA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.0",
        "classnames": "^2.2.6",
        "rc-resize-observer": "^1.0.0",
        "rc-util": "^5.36.0"
      },
      "engines": {
        "node": ">=8.x"
      },
      "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">=16.9.0"
      }
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
      "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
      "license": "MIT"
    },
    "node_modules/react-refresh": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.17.0.tgz",
      "integrity": "sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resize-observer-polyfill": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/resize-observer-polyfill/-/resize-observer-polyfill-1.5.1.tgz",
      "integrity": "sha512-LwZrotdHOo12nQuZlHEmtuXdqGoOD0OhaxopaNFxWzInpEgaLWoVuAMbTzixuosCx2nEG58ngzW3vxdWoxIgdg==",
      "license": "MIT"
    },
    "node_modules/rollup": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.52.5.tgz",
      "integrity": "sha512-3GuObel8h7Kqdjt0gxkEzaifHTqLVW56Y/bjN7PSQtkKr0w3V/QYSdt6QWYtd7A1xUtYQigtdUfgj1RvWVtorw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.52.5",
        "@rollup/rollup-android-arm64": "4.52.5",
        "@rollup/rollup-darwin-arm64": "4.52.5",
        "@rollup/rollup-darwin-x64": "4.52.5",
        "@rollup/rollup-freebsd-arm64": "4.52.5",
        "@rollup/rollup-freebsd-x64": "4.52.5",
        "@rollup/rollup-linux-arm-gnueabihf": "4.52.5",
        "@rollup/rollup-linux-arm-musleabihf": "4.52.5",
        "@rollup/rollup-linux-arm64-gnu": "4.52.5",
        "@rollup/rollup-linux-arm64-musl": "4.52.5",
        "@rollup/rollup-linux-loong64-gnu": "4.52.5",
        "@rollup/rollup-linux-ppc64-gnu": "4.52.5",
        "@rollup/rollup-linux-riscv64-gnu": "4.52.5",
        "@rollup/rollup-linux-riscv64-musl": "4.52.5",
        "@rollup/rollup-linux-s390x-gnu": "4.52.5",
        "@rollup/rollup-linux-x64-gnu": "4.52.5",
        "@rollup/rollup-linux-x64-musl": "4.52.5",
        "@rollup/rollup-openharmony-arm64": "4.52.5",
        "@rollup/rollup-win32-arm64-msvc": "4.52.5",
        "@rollup/rollup-win32-ia32-msvc": "4.52.5",
        "@rollup/rollup-win32-x64-gnu": "4.52.5",
        "@rollup/rollup-win32-x64-msvc": "4.52.5",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/scroll-into-view-if-needed": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/scroll-into-view-if-needed/-/scroll-into-view-if-needed-3.1.0.tgz",
      "integrity": "sha512-49oNpRjWRvnU8NyGVmUaYG4jtTkNonFZI86MmGRDqBphEK2EXT9gdEUoQPZhuBM8yWHxCWbobltqYO5M4XrUvQ==",
      "license": "MIT",
      "dependencies": {
        "compute-scroll-into-view": "^3.0.2"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string-convert": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/string-convert/-/string-convert-0.2.1.tgz",
      "integrity": "sha512-u/1tdPl4yQnPBjnVrmdLo9gtuLvELKsAoRapekWggdiQNvvvum+jYF329d84NAa660KQw7pB2n36KrIKVoXa3A==",
      "license": "MIT"
    },
    "node_modules/stylis": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/stylis/-/stylis-4.3.6.tgz",
      "integrity": "sha512-yQ3rwFWRfwNUY7H5vpU0wfdkNSnvnJinhF9830Swlaxl03zsOjCfmX0ugac+3LtK0lYSgwL/KXc8oYL3mG4YFQ==",
      "license": "MIT"
    },
    "node_modules/throttle-debounce": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/throttle-debounce/-/throttle-debounce-5.0.2.tgz",
      "integrity": "sha512-B71/4oyj61iNH0KeCamLuE2rmKuTO5byTOSVwECM5FA7TiAiAW+UqTKZ9ERueC4qvgSttUhdmq1mXC3kJqGX7A==",
      "license": "MIT",
      "engines": {
        "node": ">=12.22"
      }
    },
    "node_modules/toggle-selection": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/toggle-selection/-/toggle-selection-1.0.6.tgz",
      "integrity": "sha512-BiZS+C1OS8g/q2RRbJmy59xpyghNBqrr6k5L/uKBGRsTfxmu3ffiRnd8mlGPUVayg8pvfi5urfnu8TU7DVOkLQ==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.4.tgz",
      "integrity": "sha512-q0SPT4xyU84saUX+tomz1WLkxUbuaJnR1xWt17M7fJtEJigJeWUNGUqrauFXsHnqev9y9JTRGwk13tFBuKby4A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    }
  }
}

```

---

## `package.json`

```json
{
  "name": "bookstore-admin",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@ant-design/icons": "^6.1.0",
    "antd": "^5.28.0",
    "axios": "^1.7.7",
    "dayjs": "^1.11.11",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}

```

---

## `README.md`

```markdown
# 📚 Bookstore Admin (Frontend)

React + Vite + Ant Design v5 admin UI for managing books.

- Backend API base: `http://localhost:5000/api/books`
- Uses **Axios** for requests
- Environment variable via `.env` (`VITE_API_BASE_URL`)
- Vite dev **proxy** configured to avoid CORS during development

## 🚀 Quick Start
```bash
npm install
npm run dev
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

> Adjust `.env` if your backend host/port changes.

## 🔧 Environment
```
VITE_API_BASE_URL=http://localhost:5000/api/books
```

## 📡 API Endpoints used
- `GET /api/books?page=1&limit=10`
- `POST /api/books/create` (multipart/form-data; field name: `cover_image`)
- `GET /api/books/search?q=keyword`
- `GET /api/books/filter?category=...&minPrice=...&maxPrice=...`
- `GET /api/books/:id`

## 🧩 Files
- `src/utils/api.js`: Axios helper (reads `VITE_API_BASE_URL`)
- `src/pages/Dashboard.jsx`: Fetches real API, pagination, add book
- `src/components/AddBookModal.jsx`: Validates fields, previews image, passes `cover_image` (File) to API

```

---

## `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

```

---

## `src\App.jsx`

```javascript
import Dashboard from "./pages/Dashboard";

function App() {
  return <Dashboard />;
}

export default App;

```

---

## `src\main.jsx`

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

---

## `src\api\apiClient.js`

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;

```

---

## `src\api\authorApi.js`

```javascript
import api from "./apiClient";

// Lấy danh sách tác giả
export const getAuthors = async () => {
  const res = await api.get("/authors");
  return res.data;
};

// Tạo mới tác giả
export const createAuthor = async (data) => {
  const res = await api.post("/authors", data);
  return res.data;
};

```

---

## `src\api\bookApi.js`

```javascript
import api from "./apiClient";

// Lấy danh sách sách (có filter/search)
export const getBooks = async (params = {}) => {
  const res = await api.get("/books", { params });
  return res.data;
};

// Lấy chi tiết sách
export const getBookById = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

// Thêm mới sách
export const createBook = async (formData) => {
  const res = await api.post("/books", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Cập nhật sách
export const updateBook = async (id, formData) => {
  const res = await api.put(`/books/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Xóa sách
export const deleteBook = async (id) => {
  const res = await api.delete(`/books/${id}`);
  return res.data;
};

```

---

## `src\api\categoryApi.js`

```javascript
import api from "./apiClient";

// Lấy danh sách thể loại
export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};

// Tạo mới thể loại
export const createCategory = async (data) => {
  const res = await api.post("/categories", data);
  return res.data;
};

```

---

## `src\api\healthApi.js`

```javascript
import api from "./apiClient";

export const checkServerHealth = async () => {
  const res = await api.get("/health");
  return res.data;
};

```

---

## `src\components\AddBookModal.css`

```css
/* Modal container */
.add-book-modal .ant-modal-content {
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.add-book-container {
  padding: 28px 36px;
}

/* Title */
.modal-title {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 30px;
  color: #111;
  letter-spacing: 0.5px;
}

/* Form labels */
.add-book-form .ant-form-item-label > label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

/* Inputs */
.add-book-form .ant-input,
.add-book-form .ant-select-selector,
.add-book-form textarea {
  border-radius: 6px !important;
  border: 1px solid #ccc;
  transition: all 0.2s ease;
}

.add-book-form .ant-input:focus,
.add-book-form .ant-select-focused .ant-select-selector {
  border-color: #0056d2 !important;
  box-shadow: 0 0 0 2px rgba(0, 86, 210, 0.15);
}

/* Upload Section */
.upload-section {
  text-align: center;
  padding-top: 10px;
}

.upload-title {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
  color: #222;
}

.upload-box {
  border: 2px dashed #cfcfcf;
  border-radius: 10px;
  padding: 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  transition: border-color 0.2s ease;
}

.upload-box:hover {
  border-color: #0056d2;
}

.upload-placeholder {
  color: #999;
  font-size: 14px;
}

.upload-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.upload-btn {
  background-color: #f3f4f6 !important;
  border-radius: 6px !important;
  border: 1px solid #ccc !important;
  color: #333 !important;
  font-weight: 500;
  transition: all 0.2s ease;
}

.upload-btn:hover {
  background-color: #e8f0ff !important;
  border-color: #0056d2 !important;
  color: #0056d2 !important;
}

/* Footer Buttons */
.modal-footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
}

/* Save Button */
.save-btn {
  background: #3b7d2e !important;
  color: #fff !important;
  width: 200px;
  font-weight: 600;
  border-radius: 6px !important;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
  border: none !important;
}

.save-btn:hover {
  background: #2d6224 !important;
}

/* Clear Button */
.clear-btn {
  background: #f0f2f5 !important;
  border-radius: 6px !important;
  color: #333 !important;
  border: 1px solid #ccc !important;
  width: 200px;
  font-weight: 600;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: #e0e0e0 !important;
}

/* Cancel Button */
.cancel-btn {
  border-color: #d62828 !important;
  color: #d62828 !important;
  width: 200px;
  font-weight: 600;
  border-radius: 6px !important;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
}

.cancel-btn:hover {
  background: #fff5f5 !important;
}

/* Validation error messages */
.ant-form-item-explain-error {
  font-size: 12px;
  color: #d62828 !important;
  margin-top: 2px;
}

/* Responsive layout */
@media (max-width: 768px) {
  .add-book-container {
    padding: 20px;
  }

  .modal-footer {
    flex-direction: column;
    gap: 12px;
  }

  .save-btn,
  .clear-btn,
  .cancel-btn {
    width: 100%;
  }
}

```

---

## `src\components\AddBookModal.jsx`

```javascript
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./AddBookModal.css";
import { getAuthors } from "../../api/authorApi";
import { getCategories } from "../../api/categoryApi";

const { Option } = Select;

export default function AddBookModal({ open, onCancel, onSave }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories when modal opens
  useEffect(() => {
    if (open) {
      loadAuthors();
      loadCategories();
    }
  }, [open]);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      message.error("Failed to load authors.");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories.");
    }
  };

  // ✅ Validate and preview image
  const beforeUpload = (file) => {
    const isValidType =
      file.type === "image/jpeg" || file.type === "image/png";
    if (!isValidType) {
      message.error("The cover image must be in JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }

    const isLt2M = file.size / 1024 / 1024 <= 2;
    if (!isLt2M) {
      message.error("The image exceeds the maximum allowed size (2MB).");
      return Upload.LIST_IGNORE;
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setFileList([file]);
    return false; // prevent auto-upload
  };

  // ✅ Save handler (send real FormData)
  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description || "");
        formData.append("price", values.price);
        formData.append("quantity", values.quantity || 0);
        formData.append("status", values.status || "In Stock");
        formData.append("author_id", values.author_id);
        formData.append("category_id", values.category_id);

        if (fileList[0]) {
          formData.append("image", fileList[0]);
        }

        onSave(formData);
        form.resetFields();
        setFileList([]);
        setPreviewUrl(null);
      })
      .catch(() => {
        message.error("Please fill in all required fields.");
      });
  };

  // ✅ Clear all inputs
  const handleClear = () => {
    form.resetFields();
    setFileList([]);
    setPreviewUrl(null);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={750}
      bodyStyle={{ padding: 0, borderRadius: "12px" }}
      className="add-book-modal"
      destroyOnClose
    >
      <div className="add-book-container">
        <h2 className="modal-title">Add New Book</h2>

        <Form
          layout="vertical"
          form={form}
          initialValues={{
            status: "In Stock",
          }}
          className="add-book-form"
        >
          <Row gutter={40}>
            {/* Left Column */}
            <Col xs={24} md={14}>
              <Form.Item
                label={
                  <>
                    Book Title<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="title"
                rules={[{ required: true, message: "Please enter Book Title." }]}
              >
                <Input placeholder="Enter Book Title" />
              </Form.Item>

              {/* Author from API */}
              <Form.Item
                label={
                  <>
                    Author<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="author_id"
                rules={[{ required: true, message: "Please select Author." }]}
              >
                <Select placeholder="Select Author">
                  {authors.map((a) => (
                    <Option key={a.id} value={a.id}>
                      {a.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Category from API */}
              <Form.Item
                label={
                  <>
                    Category<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="category_id"
                rules={[{ required: true, message: "Please select Category." }]}
              >
                <Select placeholder="Select Category">
                  {categories.map((c) => (
                    <Option key={c.id} value={c.id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Price<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="price"
                rules={[{ required: true, message: "Please enter Price." }]}
              >
                <Input type="number" min={1} placeholder="Enter Price" />
              </Form.Item>

              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                  {
                    validator: (_, value) =>
                      value === undefined ||
                      value === "" ||
                      (Number(value) >= 0 &&
                        Number.isInteger(Number(value)))
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Please enter a valid positive integer.")
                          ),
                  },
                ]}
              >
                <Input type="number" min={0} placeholder="Enter Quantity" />
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Status<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="status"
                rules={[{ required: true, message: "Please select Status." }]}
              >
                <Select placeholder="Select Status">
                  <Option value="In Stock">In Stock</Option>
                  <Option value="Out of Stock">Out of Stock</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea
                  rows={2}
                  placeholder="Enter a short description..."
                />
              </Form.Item>
            </Col>

            {/* Right Column – Cover Image */}
            <Col xs={24} md={10} className="upload-section">
              <p className="upload-title">Cover Image</p>
              <div className="upload-box">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="upload-preview"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                ) : (
                  <div className="upload-placeholder">📘 No image uploaded</div>
                )}
              </div>

              <Upload
                beforeUpload={beforeUpload}
                fileList={fileList.map((f) => ({
                  uid: f.uid || f.name,
                  name: f.name,
                }))}
                onRemove={() => {
                  setFileList([]);
                  setPreviewUrl(null);
                }}
                maxCount={1}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />} className="upload-btn">
                  Upload File
                </Button>
              </Upload>
            </Col>
          </Row>

          <div className="modal-footer">
            <Button className="save-btn" type="primary" onClick={handleSave}>
              Save
            </Button>
            <Button className="clear-btn" onClick={handleClear}>
              Clear
            </Button>
            <Button className="cancel-btn" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

```

---

## `src\components\BookCard.css`

```css
.book-card {
  width: 100%;
  max-width: 220px;
  height: 390px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 10px 14px;
  display: flex;                 
  flex-direction: column;        
  justify-content: space-between;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.book-card-img {
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.book-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 8px;
}

.book-card-title {
  font-weight: 600;
  font-size: 15px;
  margin: 8px 0 4px;
  text-align: center;
  color: #222;
  line-height: 1.3em;
  overflow: hidden;
}

.book-card-author {
  margin: 0;
  color: #555;
  font-size: 13px;
  text-align: left;
  line-height: 1.3em;
}

.book-card-category {
  font-size: 12px;
  color: #888;
  text-align: left;
  margin-top: 2px;
  margin-bottom: 10px;
}

.book-card-btn {
  background-color: #000 !important;
  color: #fff !important;
  border-radius: 6px !important;
  transition: background 0.2s ease;
  width: 100%;
  align-self: flex-end;        
  margin-top: auto;    
}

.book-card-btn:hover {
  background-color: #333 !important;
}



```

---

## `src\components\BookCard.jsx`

```javascript
import { Card, Badge, Button } from "antd";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={book.status}
        color={
          book.status === "In Stock"
            ? "green"
            : book.status === "Out of Stock"
              ? "red"
              : "gray"
        }
        style={{
          left: "80%",
          transform: "translateX(-90%)",
          textTransform: "uppercase",
        }}
      />
      <Card
        hoverable
        className="book-card"
        cover={
          <img
            alt={book.title}
            src={book.image}
            className="book-card-img"
          />
        }
      >
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">{book.author}</p>
        <p className="book-card-category">Category: {book.category}</p>

        <Button
          type="default"
          block
          size="small"
          className="book-card-btn"
          onClick={() => onView(book)}
        >
          View Details
        </Button>
      </Card>
    </div>
  );
}

```

---

## `src\components\BookDetailsModal.jsx`

```javascript
import { Modal, Descriptions, Image, Tag } from "antd";

export default function BookDetailsModal({ open, onCancel, book }) {
    if (!book) return null;

    const getStatusColor = (status) => {
        switch (status) {
            case "In Stock":
                return "green";
            case "Out of Stock":
                return "red";
            default:
                return "gray";
        }
    };

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            title="📘 Book Details"
            centered
            width={700}
            bodyStyle={{ padding: "28px 36px" }}
        >
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <Image
                    src={book.image}
                    alt={book.title}
                    width={180}
                    height={240}
                    style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                    preview={false}
                />

                <div style={{ flex: 1 }}>
                    <Descriptions column={1} bordered size="middle">
                        <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
                        <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
                        <Descriptions.Item label="Category">{book.category}</Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <Tag color={getStatusColor(book.status)}>{book.status}</Tag>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </Modal>
    );
}

```

---

## `src\components\BookList.css`

```css
.book-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-items: center;
  align-items: start;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
}
```

---

## `src\components\BookList.jsx`

```javascript
import BookCard from "./BookCards/BookCard";
import "./BookList.css";
export default function BookList({ books, onViewBook }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onView={onViewBook} />
      ))}
    </div>
  );
}

```

---

## `src\components\FilterPopup.jsx`

```javascript
import React, { useState, useEffect } from "react";
import {
  Modal,
  Checkbox,
  InputNumber,
  Slider,
  Select,
  Button,
  Form,
  Typography,
  message,
} from "antd";
import { getAuthors } from "../api/authorApi";
import { getCategories } from "../api/categoryApi";

const { Text } = Typography;
const { Option } = Select;

export default function FilterPopup({ open, onClose, onApply, onClear }) {
  const [form] = Form.useForm();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [priceError, setPriceError] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories from API when open
  useEffect(() => {
    if (open) {
      loadAuthors();
      loadCategories();
    }
  }, [open]);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      message.error("Failed to load authors.");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories.");
    }
  };

  // 🟡 Apply filters
  const handleApply = () => {
    if (minPrice > maxPrice) {
      setPriceError("Minimum price cannot be greater than maximum price.");
      return;
    }

    const filters = form.getFieldsValue();

    onApply({
      category_ids: filters.category_ids || [],
      status: filters.status || [],
      author_id: filters.author_id || null,
      minPrice,
      maxPrice,
    });

    onClose();
  };

  // 🔵 Clear all filters
  const handleClear = () => {
    form.resetFields();
    setMinPrice(0);
    setMaxPrice(500);
    setPriceError("");
    onClear();
  };

  return (
    <Modal
      title="Filter Books"
      open={open}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <Form form={form} layout="vertical">
        {/* Category */}
        <Form.Item label="Category" name="category_ids">
          <Checkbox.Group
            options={categories.map((c) => ({
              label: c.name,
              value: c.id,
            }))}
          />
        </Form.Item>

        {/* Price Range */}
        <Form.Item label="Price Range">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <InputNumber
              min={0}
              value={minPrice}
              onChange={(v) => setMinPrice(v || 0)}
              placeholder="Min"
            />
            <span>-</span>
            <InputNumber
              min={0}
              value={maxPrice}
              onChange={(v) => setMaxPrice(v || 0)}
              placeholder="Max"
            />
          </div>
          {priceError && <Text type="danger">{priceError}</Text>}
          <Slider
            range
            min={0}
            max={500}
            value={[minPrice, maxPrice]}
            onChange={([min, max]) => {
              setMinPrice(min);
              setMaxPrice(max);
              setPriceError("");
            }}
            style={{ marginTop: 16 }}
          />
        </Form.Item>

        {/* Author */}
        <Form.Item label="Author" name="author_id">
          <Select
            showSearch
            allowClear
            placeholder="Select author"
            optionFilterProp="label"
          >
            {authors.map((a) => (
              <Option key={a.id} value={a.id} label={a.name}>
                {a.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Status */}
        <Form.Item label="Status" name="status">
          <Checkbox.Group
            options={[
              { label: "In Stock", value: "In Stock" },
              { label: "Out of Stock", value: "Out of Stock" },
              { label: "Inactive", value: "Inactive" },
            ]}
          />
        </Form.Item>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 20,
          }}
        >
          <Button onClick={handleClear}>Clear</Button>
          <Button type="primary" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

```

---

## `src\components\SearchFilterBar.jsx`

```javascript
import React, { useState, useEffect } from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import FilterPopup from "./FilterPopup";

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  onFilterApply,
  onFilterClear,
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchTerm);

  // 🕓 Debounce typing — chỉ gửi search sau 300ms người dùng ngừng gõ
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchInput.trim() !== searchTerm.trim()) {
        onSearchChange(searchInput.trim());
        onSearchSubmit();
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [searchInput]);

  return (
    <>
      <Space size="middle">
        <Input
          placeholder="Search by title, author, or category"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          allowClear
          style={{
            width: 280,
            borderRadius: 8,
            boxShadow: "0 0 4px rgba(0,0,0,0.08)",
          }}
          prefix={<SearchOutlined style={{ color: "#888" }} />}
        />

        <Button
          icon={<FilterOutlined />}
          onClick={() => setFilterOpen(true)}
          style={{
            borderRadius: 8,
            background: "#f7f9ff",
          }}
        >
          Filter
        </Button>
      </Space>

      <FilterPopup
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(filters) => {
          onFilterApply(filters);
          setFilterOpen(false);
        }}
        onClear={() => {
          onFilterClear();
          setFilterOpen(false);
        }}
      />
    </>
  );
}

```

---

## `src\components\SideBar.css`

```css
/* Sidebar wrapper */
.sidebar {
  background: #0e1a40 !important;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
}

/* Logo section */
.sidebar-logo {
  text-align: center;
  padding: 16px 0;
}

.sidebar-title {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}

/* Menu */
.sidebar-menu {
  background: #0e1a40 !important;
  flex: 1;
  border-right: none;
}

/* Footer section (logout) */
.sidebar-footer {
  padding: 16px;
}

.logout-btn {
  width: 100%;
  background: #d62828;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;
}

.logout-btn:hover {
  background: #b91d1d;
}
```

---

## `src\components\SideBar.jsx`

```javascript
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={220}
      className="sidebar"
    >
      {/* Logo */}
      <div className="sidebar-logo">
        {!collapsed ? (
          <h2 className="sidebar-title">36BOOKSTORE</h2>
        ) : (
          <h2 className="sidebar-title">36B</h2>
        )}
      </div>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          { key: "1", icon: <BookOutlined />, label: "Product Management" },
          { key: "2", icon: <UserOutlined />, label: "User Management" },
          { key: "3", icon: <SettingOutlined />, label: "Setting" },
        ]}
        className="sidebar-menu"
      />

      {/* Log out button */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <PoweroffOutlined /> {!collapsed && "Log Out"}
        </button>
      </div>
    </Sider>
  );
}

```

---

## `src\components\AddNewBook\AddBookModal.css`

```css
/* Modal container */
.add-book-modal .ant-modal-content {
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.add-book-container {
  padding: 28px 36px;
}

/* Title */
.modal-title {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 30px;
  color: #111;
  letter-spacing: 0.5px;
}

/* Form labels */
.add-book-form .ant-form-item-label > label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

/* Inputs */
.add-book-form .ant-input,
.add-book-form .ant-select-selector,
.add-book-form textarea {
  border-radius: 6px !important;
  border: 1px solid #ccc;
  transition: all 0.2s ease;
}

.add-book-form .ant-input:focus,
.add-book-form .ant-select-focused .ant-select-selector {
  border-color: #0056d2 !important;
  box-shadow: 0 0 0 2px rgba(0, 86, 210, 0.15);
}

/* Upload Section */
.upload-section {
  text-align: center;
  padding-top: 10px;
}

.upload-title {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
  color: #222;
}

.upload-box {
  border: 2px dashed #cfcfcf;
  border-radius: 10px;
  padding: 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  transition: border-color 0.2s ease;
}

.upload-box:hover {
  border-color: #0056d2;
}

.upload-placeholder {
  color: #999;
  font-size: 14px;
}

.upload-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.upload-btn {
  background-color: #f3f4f6 !important;
  border-radius: 6px !important;
  border: 1px solid #ccc !important;
  color: #333 !important;
  font-weight: 500;
  transition: all 0.2s ease;
}

.upload-btn:hover {
  background-color: #e8f0ff !important;
  border-color: #0056d2 !important;
  color: #0056d2 !important;
}

/* Footer Buttons */
.modal-footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
}

/* Save Button */
.save-btn {
  background: #3b7d2e !important;
  color: #fff !important;
  width: 200px;
  font-weight: 600;
  border-radius: 6px !important;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
  border: none !important;
}

.save-btn:hover {
  background: #2d6224 !important;
}

/* Clear Button */
.clear-btn {
  background: #f0f2f5 !important;
  border-radius: 6px !important;
  color: #333 !important;
  border: 1px solid #ccc !important;
  width: 200px;
  font-weight: 600;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: #e0e0e0 !important;
}

/* Cancel Button */
.cancel-btn {
  border-color: #d62828 !important;
  color: #d62828 !important;
  width: 200px;
  font-weight: 600;
  border-radius: 6px !important;
  padding: 14px 0 !important;
  font-size: 16px;
  transition: all 0.2s ease;
}

.cancel-btn:hover {
  background: #fff5f5 !important;
}

/* Validation error messages */
.ant-form-item-explain-error {
  font-size: 12px;
  color: #d62828 !important;
  margin-top: 2px;
}

/* Responsive layout */
@media (max-width: 768px) {
  .add-book-container {
    padding: 20px;
  }

  .modal-footer {
    flex-direction: column;
    gap: 12px;
  }

  .save-btn,
  .clear-btn,
  .cancel-btn {
    width: 100%;
  }
}

```

---

## `src\components\AddNewBook\AddBookModal.jsx`

```javascript
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./AddBookModal.css";
import { getAuthors } from "../../api/authorApi";
import { getCategories } from "../../api/categoryApi";

const { Option } = Select;

export default function AddBookModal({ open, onCancel, onSave }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories
  useEffect(() => {
    if (open) {
      loadAuthors();
      loadCategories();
    }
  }, [open]);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      message.error("Failed to load authors");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories");
    }
  };

  // ✅ Validate image
  const beforeUpload = (file) => {
    const isValidType =
      file.type === "image/jpeg" || file.type === "image/png";
    if (!isValidType) {
      message.error("The cover image must be in JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }

    const isLt2M = file.size / 1024 / 1024 <= 2;
    if (!isLt2M) {
      message.error("The image exceeds the maximum allowed size (2MB).");
      return Upload.LIST_IGNORE;
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setFileList([file]);
    return false; // prevent auto upload
  };

  // ✅ Save handler
const handleSave = () => {
  form
    .validateFields()
    .then((values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("price", values.price);
      formData.append("quantity", values.quantity || 0);
      formData.append("status", values.status || "In Stock");
      formData.append("author_id", values.author_id);
      formData.append("category_id", values.category_id);

      if (fileList[0]) {
        formData.append("image", fileList[0]);  // file thật
      }

      onSave(formData);          // 👈 Gửi thẳng FormData cho Dashboard
      form.resetFields();
      setFileList([]);
      setPreviewUrl(null);
    })
    .catch(() => {
      message.error("Please fill in all required fields.");
    });
};


  const handleClear = () => {
    form.resetFields();
    setFileList([]);
    setPreviewUrl(null);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={750}
      bodyStyle={{ padding: 0, borderRadius: "12px" }}
      className="add-book-modal"
      destroyOnClose
    >
      <div className="add-book-container">
        <h2 className="modal-title">Add New Book</h2>

        <Form
          layout="vertical"
          form={form}
          initialValues={{
            status: "In Stock",
          }}
          className="add-book-form"
        >
          <Row gutter={40}>
            {/* Left Column */}
            <Col xs={24} md={14}>
              <Form.Item
                label={
                  <>
                    Book Name<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="title"
                rules={[{ required: true, message: "Please enter Book Name." }]}
              >
                <Input placeholder="Enter Book Name" />
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Author<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="author_id"
                rules={[{ required: true, message: "Please select Author." }]}
              >
                <Select placeholder="Select Author">
                  {authors.map((a) => (
                    <Option key={a.id} value={a.id}>
                      {a.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Category<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="category_id"
                rules={[{ required: true, message: "Please select Category." }]}
              >
                <Select placeholder="Select Category">
                  {categories.map((c) => (
                    <Option key={c.id} value={c.id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Price<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="price"
                rules={[{ required: true, message: "Please enter Price." }]}
              >
                <Input type="number" min={1} placeholder="Enter Price" />
              </Form.Item>

              <Form.Item label="Quantity" name="quantity">
                <Input type="number" min={0} placeholder="Enter Quantity" />
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Status<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="status"
                rules={[{ required: true, message: "Please select Status." }]}
              >
                <Select placeholder="Select Status">
                  <Option value="In Stock">In Stock</Option>
                  <Option value="Out of Stock">Out of Stock</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea
                  rows={2}
                  placeholder="Enter a short description..."
                />
              </Form.Item>
            </Col>

            {/* Cover Image */}
            <Col xs={24} md={10} className="upload-section">
              <p className="upload-title">Cover Image</p>
              <div className="upload-box">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="upload-preview"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                ) : (
                  <div className="upload-placeholder">📘 No image uploaded</div>
                )}
              </div>

              <Upload
                beforeUpload={beforeUpload}
                fileList={fileList.map((f) => ({
                  uid: f.uid || f.name,
                  name: f.name,
                }))}
                onRemove={() => {
                  setFileList([]);
                  setPreviewUrl(null);
                }}
                maxCount={1}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />} className="upload-btn">
                  Upload File
                </Button>
              </Upload>
            </Col>
          </Row>

          <div className="modal-footer">
            <Button className="save-btn" type="primary" onClick={handleSave}>
              Save
            </Button>
            <Button className="clear-btn" onClick={handleClear}>
              Clear
            </Button>
            <Button className="cancel-btn" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

```

---

## `src\components\BookCards\BookCard.css`

```css
.book-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
}

/* 🟩 Card chính */
.book-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 12px !important;
  overflow: hidden;
  min-width: 200px;
  max-width: 200px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* 🖼 Ảnh bìa vuông cố định */
.book-card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

/* 📘 Nội dung trong card */
.book-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 12px;
}

/* 📗 Tên sách — giới hạn 2 dòng */
.book-card-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Giới hạn 2 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 👤 Tác giả và thể loại */
.book-card-author,
.book-card-category {
  font-size: 13px;
  color: #666;
  margin: 3px 0;
}

/* 💰 Giá tiền */
.book-card-price {
  font-weight: 600;
  color: #0077cc;
  margin-top: auto;
  font-size: 14px;
}

/* 🔘 Nút xem chi tiết */
.book-card-btn {
  margin-top: 10px;
  font-weight: 500;
  background-color: #0056d2 !important;
  color: white !important;
  border-radius: 6px !important;
}

.book-card-btn:hover {
  background-color: #003f9e !important;
}

```

---

## `src\components\BookCards\BookCard.jsx`

```javascript
import { Card, Badge, Button, Tag } from "antd";
import {
  DollarOutlined,
  UserOutlined,
  BookOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  const title = book.title || "Untitled";
  const author = book.author_name || "Unknown Author";
  const category = book.category_name || "Uncategorized";
  const imageUrl = book.image_url
    ? `http://localhost:5000${book.image_url}`
    : "https://placehold.co/200x250";

  const ribbonColor =
    book.status === "In Stock"
      ? "green"
      : book.status === "Out of Stock"
      ? "red"
      : "gray";

  // 🪙 Format price
  const displayPrice =
    book.price && !isNaN(Number(book.price))
      ? new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(Number(book.price))
      : "N/A";

  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={book.status?.toUpperCase() || "UNKNOWN"}
        color={ribbonColor}
        placement="end"
        className="book-card-ribbon"
      >
        <Card
          hoverable
          bordered={false}
          className="book-card"
          cover={
            <div className="book-img-container">
              <img
                alt={title}
                src={imageUrl}
                className="book-card-img"
                onError={(e) => {
                  e.target.src = "https://placehold.co/200x250";
                }}
              />
            </div>
          }
        >
          <div className="book-card-content">
            <h3 className="book-card-title">{title}</h3>

            <p className="book-card-author">
              <UserOutlined style={{ marginRight: 6 }} />
              {author}
            </p>

            <p className="book-card-category">
              <BookOutlined style={{ marginRight: 6 }} />
              {category}
            </p>

            <Tag color="blue" className="book-card-price">
              <DollarOutlined /> {displayPrice}
            </Tag>

            <Button
              type="primary"
              icon={<EyeOutlined />}
              block
              className="book-card-btn"
              onClick={() => onView(book)}
            >
              View Details
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </div>
  );
}

```

---

## `src\components\BookDetails\BookDetailsEditForm.jsx`

```javascript
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Image,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getAuthors } from "../../api/authorApi";
import { getCategories } from "../../api/categoryApi";

const { Option } = Select;

export default function BookDetailsEditForm({ book, onSave, onCancelEdit }) {
  const [form] = Form.useForm();
  const [previewUrl, setPreviewUrl] = useState(
    book?.image_url ? `http://localhost:5000${book.image_url}` : null
  );
  const [fileList, setFileList] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories
  useEffect(() => {
    loadAuthors();
    loadCategories();
  }, []);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      message.error("Failed to load authors");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories");
    }
  };

  // 🟢 Validate and preview image
  const beforeUpload = (file) => {
    const isValid = file.type === "image/jpeg" || file.type === "image/png";
    if (!isValid) {
      message.error("Image must be JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }
    if (file.size / 1024 / 1024 > 2) {
      message.error("Image exceeds 2MB.");
      return Upload.LIST_IGNORE;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileList([file]);
    return false;
  };

  // 🟢 Handle save (prepare FormData)
  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("price", values.price);
      formData.append("quantity", values.quantity || 0);
      formData.append("status", values.status);
      formData.append("author_id", values.author_id);
      formData.append("category_id", values.category_id);

      if (fileList[0]) {
        formData.append("image", fileList[0]);
      }

      // gửi lại dữ liệu lên Dashboard để gọi update API
      onSave({ id: book.id, ...values, imageFile: fileList[0], formData });
      message.success("Book saved successfully!");
    } catch (err) {
      message.error("Please check the fields and try again.");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        title: book.title,
        author_id: book.author_id,
        category_id: book.category_id,
        price: book.price,
        quantity: book.quantity,
        description: book.description,
        status: book.status,
      }}
      className="book-details-edit-form"
    >
      <div className="book-edit-layout">
        <div className="book-edit-left">
          <Form.Item
            label="Book Title"
            name="title"
            rules={[{ required: true, message: "Please enter book title." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author_id"
            rules={[{ required: true, message: "Please select author." }]}
          >
            <Select placeholder="Select author">
              {authors.map((a) => (
                <Option key={a.id} value={a.id}>
                  {a.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Category"
            name="category_id"
            rules={[{ required: true, message: "Please select category." }]}
          >
            <Select placeholder="Select category">
              {categories.map((c) => (
                <Option key={c.id} value={c.id}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter price." }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Stock Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please enter quantity." }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={2} />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select status." }]}
          >
            <Select>
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Created Date">
            <Input
              value={
                book.createdAt
                  ? new Date(book.createdAt).toLocaleDateString()
                  : "Not available"
              }
              disabled
            />
          </Form.Item>
        </div>

        <div className="book-edit-right">
          <p className="cover-label">Cover Image</p>
          <Image
            src={previewUrl || "https://placehold.co/200x250"}
            alt="preview"
            width={180}
            height={230}
            className="cover-preview"
            preview={false}
          />
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            onRemove={() => {
              setFileList([]);
              setPreviewUrl(book.image_url);
            }}
            maxCount={1}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload New</Button>
          </Upload>
        </div>
      </div>

      <div className="book-details-buttons">
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
        <Button onClick={onCancelEdit}>Cancel</Button>
      </div>
    </Form>
  );
}

```

---

## `src\components\BookDetails\BookDetailsModal.css`

```css
.book-details-view {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.book-details-image {
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.book-details-info {
  flex: 1;
}

.book-status-tag {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.book-details-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
}

.book-details-edit-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.book-edit-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.book-edit-left {
  flex: 1;
}

.book-edit-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-label {
  font-weight: 500;
  margin-bottom: 6px;
}

.cover-preview {
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

```

---

## `src\components\BookDetails\BookDetailsModal.jsx`

```javascript
import { useState } from "react";
import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BookDetailsView from "./BookDetailsView";
import BookDetailsEditForm from "./BookDetailsEditForm";
import "./BookDetailsModal.css";

export default function BookDetailsModal({
  open,
  onCancel,
  book,
  onSave,
  onDelete,
}) {
  const [editMode, setEditMode] = useState(false);

  if (!book) return null;

  // 🗑️ Delete Confirmation (API-ready)
  const handleDelete = () => {
    Modal.confirm({
      title: `Are you sure you want to delete "${book.title}"?`,
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes, delete it",
      cancelText: "No, cancel",
      centered: true,
      onOk: async () => {
        try {
          await onDelete(book);
          message.success(`"${book.title}" has been deleted.`);
        } catch {
          message.error("Failed to delete this book.");
        } finally {
          onCancel();
        }
      },
    });
  };

  // 🟢 Handle save from edit form
  const handleSave = async (updatedBook) => {
    try {
      await onSave(updatedBook); // Dashboard sẽ gọi PUT /books/:id
      message.success("Book updated successfully!");
      setEditMode(false);
    } catch (err) {
      message.error("Failed to update book!");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        setEditMode(false);
        onCancel();
      }}
      footer={null}
      centered
      width={750}
      title={editMode ? "✏️ Edit Book Details" : "📘 Book Details"}
      bodyStyle={{ padding: "28px 36px" }}
      destroyOnClose
    >
      {!editMode ? (
        <BookDetailsView
          book={book}
          onEdit={() => setEditMode(true)}
          onDelete={handleDelete}
          onClose={onCancel}
        />
      ) : (
        <BookDetailsEditForm
          book={book}
          onSave={handleSave}
          onCancelEdit={() => setEditMode(false)}
        />
      )}
    </Modal>
  );
}

```

---

## `src\components\BookDetails\BookDetailsView.jsx`

```javascript
import { Descriptions, Image, Tag, Button } from "antd";

export default function BookDetailsView({ book, onEdit, onDelete, onClose }) {
  const getStatusColor = (status, quantity) => {
    if (status === "Inactive") return "gray";
    if (quantity === 0) return "red";
    return "green";
  };

  const getStatusText = (status, quantity) => {
    if (status === "Inactive") return "Hidden";
    if (quantity === 0) return "Out of Stock";
    return "In Stock";
  };

  const imageSrc = book.image_url
    ? `http://localhost:5000${book.image_url}`
    : "https://placehold.co/200x260";

  return (
    <>
      <div className="book-details-view">
        <Image
          src={imageSrc}
          alt={book.title}
          width={200}
          height={260}
          className="book-details-image"
          preview={false}
          onError={(e) => (e.target.src = "https://placehold.co/200x260")}
        />

        <div className="book-details-info">
          <Descriptions
            column={1}
            bordered
            size="middle"
            labelStyle={{ fontWeight: 600, width: 130 }}
          >
            <Descriptions.Item label="Title">
              {book.title || "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Author">
              {book.author_name || "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Category">
              {book.category_name || "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Price">
              {book.price ? `$${book.price}` : "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Stock Quantity">
              {book.quantity ?? "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {book.description || "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Created Date">
              {book.created_at
                ? new Date(book.created_at).toLocaleDateString()
                : book.createdAt
                ? new Date(book.createdAt).toLocaleDateString()
                : "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={getStatusColor(book.status, book.quantity)}>
                {getStatusText(book.status, book.quantity)}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>

      <div className="book-details-buttons">
        <Button type="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button danger onClick={onDelete}>
          Delete
        </Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </>
  );
}

```

---

## `src\pages\Dashboard.css`

```css
.dashboard {
  display: flex;
  background-color: #eaf2ff;
  min-height: 100vh;
}

.dashboard-main {
  flex: 1;
  padding: 40px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-header h1 {
  font-size: 22px;
  font-weight: 700;
}

.add-book-btn {
  background-color: #0056d2;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.add-book-btn:hover {
  background-color: #003f99;
}
```

---

## `src\pages\Dashboard.jsx`

```javascript
import { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Space,
  message,
  Pagination,
  Spin,
} from "antd";
import {
  PlusOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import AddBookModal from "../components/AddNewBook/AddBookModal";
import SearchFilterBar from "../components/SearchFilterBar";
import BookDetailsModal from "../components/BookDetails/BookDetailsModal";

import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../api/bookApi";

const { Header, Content } = Layout;

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const booksPerPage = 8;

  // 🟢 Load all books từ backend (chỉ gọi 1 lần)
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      console.error(err);
      message.error("Failed to load books from server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 🟢 Add new book
  const handleAddBook = async (formData) => {
    try {
      await createBook(formData);
      message.success("Book added successfully!");
      setIsModalOpen(false);
      fetchBooks();
    } catch (err) {
      console.error(err);
      message.error("Failed to add book!");
    }
  };

  // 🟢 View details
  const handleViewBook = (book) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  };

  // 🟢 Update book
  const handleUpdateBook = async (updatedBook) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedBook.title);
      formData.append("description", updatedBook.description || "");
      formData.append("price", updatedBook.price || 0);
      formData.append("quantity", updatedBook.quantity || 0);
      formData.append("status", updatedBook.status || "In Stock");
      formData.append("author_id", updatedBook.author_id || "");
      formData.append("category_id", updatedBook.category_id || "");
      if (updatedBook.imageFile) formData.append("image", updatedBook.imageFile);

      await updateBook(updatedBook.id, formData);
      message.success("Book updated successfully!");
      fetchBooks();
    } catch (err) {
      message.error("Failed to update book!");
    }
  };

  // 🟢 Delete book
  const handleDeleteBook = async (bookToDelete) => {
    try {
      await deleteBook(bookToDelete.id);
      message.success("Book deleted successfully!");
      setIsDetailsOpen(false);
      fetchBooks();
    } catch (err) {
      message.error("Failed to delete book!");
    }
  };

  // 🟢 Apply & Clear Filters
  const handleFilterApply = (filters) => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  const handleFilterClear = () => {
    setAppliedFilters(null);
    setCurrentPage(1);
  };

  // 🟢 Frontend filtering + search
  const filteredBooks = books.filter((book) => {
    const keyword = searchTerm.toLowerCase();

    const matchesSearch =
      book.title?.toLowerCase().includes(keyword) ||
      book.author_name?.toLowerCase().includes(keyword) ||
      book.category_name?.toLowerCase().includes(keyword);

    let matchesCategory = true;
    let matchesStatus = true;
    let matchesAuthor = true;
    let matchesPrice = true;

    if (appliedFilters) {
      const { category_ids, status, author_id, minPrice, maxPrice } = appliedFilters;

      if (category_ids?.length)
        matchesCategory = category_ids.includes(book.category_id);
      if (status?.length)
        matchesStatus = status.includes(book.status);
      if (author_id)
        matchesAuthor = book.author_id === author_id;
      if (minPrice !== undefined && maxPrice !== undefined)
        matchesPrice = book.price >= minPrice && book.price <= maxPrice;
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesAuthor &&
      matchesPrice
    );
  });

  const totalBooks = filteredBooks.length;
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

  return (
    <Layout style={{ minHeight: "100vh", background: "#eaf2ff" }}>
      <Sidebar collapsed={collapsed} />

      <Layout style={{ background: "#eaf2ff" }}>
        {/* Header */}
        <Header
          style={{
            background: "#eaf2ff",
            padding: "24px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "20px",
                color: "#000",
                marginRight: 10,
                marginTop: 20,
              }}
            />
            <h1 style={{ fontSize: "22px", fontWeight: 700, margin: 0 }}>
              List of Books
            </h1>
          </Space>

          <Space size="middle">
            <SearchFilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearchSubmit={() => setCurrentPage(1)}
              onFilterApply={handleFilterApply}
              onFilterClear={handleFilterClear}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              style={{ background: "#0056d2" }}
              onClick={() => setIsModalOpen(true)}
            >
              Add Books
            </Button>
          </Space>
        </Header>

        {/* Content */}
        <Content style={{ padding: "0 40px 40px", minHeight: "70vh" }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
              }}
            >
              <Spin size="large" tip="Loading books..." />
            </div>
          ) : filteredBooks.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                fontSize: "20px",
                color: "#666",
                fontWeight: 500,
              }}
            >
              No books found.
            </div>
          ) : (
            <>
              <BookList books={currentBooks} onViewBook={handleViewBook} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <Pagination
                  current={currentPage}
                  total={totalBooks}
                  pageSize={booksPerPage}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            </>
          )}
        </Content>

        {/* Modals */}
        <AddBookModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleAddBook}
        />

        <BookDetailsModal
          open={isDetailsOpen}
          onCancel={() => setIsDetailsOpen(false)}
          book={selectedBook}
          onSave={handleUpdateBook}
          onDelete={handleDeleteBook}
        />
      </Layout>
    </Layout>
  );
}

```

---
