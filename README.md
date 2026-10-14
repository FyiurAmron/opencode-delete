# opencode-delete

Delete the current OpenCode session via `/delete`.

Requires **OpenCode v2, 2.0.29 or newer**.

## Install

Add the package to your OpenCode configuration and restart:

```jsonc
{
  "plugins": ["opencode-delete"]
}
```

Or install it globally with the CLI:

```sh
opencode plugin add opencode-delete
```

## Usage

In OpenCode's normal input, run:

```text
/delete
```

This removes the current session via `ctx.session.remove({ sessionID })`. Removal stops active execution and recursively deletes child sessions.

## Development

```sh
npm install
npm run typecheck
```

## License

MIT
