import { Plugin } from "@opencode/plugin"

export default Plugin.define({
  id: "delete",
  async setup(ctx) {
    const registration = await ctx.command.transform((editor) => {
      editor.add({
        name: "delete",
        description: "Delete the current session",
        async execute({ sessionID }) {
          await ctx.session.remove({ sessionID })
        },
      })
    })
    return () => registration.dispose()
  },
})
