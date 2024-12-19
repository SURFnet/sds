import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json" with { type: "json" };

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/" + packageJson.main,
                format: "cjs",
                sourcemap: false,
            },
            {
                file: "dist/" + packageJson.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        plugins: [
            resolve(),
            peerDepsExternal(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            image(),
            svgr({
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ]
                        },
                    }),
            postcss({
                extract: true
}),
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [{file: "dist/index.js", format: "esm"}],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];