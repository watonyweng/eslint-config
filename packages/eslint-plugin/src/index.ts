import core from './configs/core'
import vue from './configs/vue'
import markdown from './configs/markdown'
import typescript from './configs/typescript'
import typescriptTypeChecking from './configs/typescript-type-checking'
import { definePlugin } from './utils'

const plugin = definePlugin({
  rules: {},
  configs: {
    // basic
    core,
    // frameworks
    vue,
    // ts
    typescript,
    typescriptTypeChecking,
    // docs
    markdown,
  },
})

const { rules, configs } = plugin

export {
  rules,
  configs,
}