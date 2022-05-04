import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import autoprefixer from 'autoprefixer';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json'
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json({compact: true}),
      typescript({ tsconfig: "./tsconfig.json" }),
      filesize(),
      postcss({
            writeDefinitions: true,
            plugins:[autoprefixer],
        })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];