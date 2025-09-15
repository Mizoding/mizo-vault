# 🛡️ MizoVault
Deterministic and Stateless Password Generator & Manager
> "One master key, every password. No storage. No sync. Pure cryptography"

## What is MizoVault?
Is a password manager without storage. 
Instead of storing credentials, it deterministically generates them on demand using:
- **Master Key** -> Your personal secret pass
- **Service Identifier** -> `github.com`, `gmail`, `slack`

The same input always yield the same strong password, meaning:
- **Stateless:** Nothing stored on disk or cloud
- **Deterministic:** Reproducible anywhere, anytime
- **Portable:** Works offline, on any device
- **Zero Trust:** No central server can leak your secrets

## Why MizoVault?
Traditional Managers:
- Store secrets in databases or files
- Require sync across devices
- Can be breached or stolen

MizoVault:
- Generates instead of storing
- Needs no databases, no sync, no cloud
- Can be integrated as a login option for your apps (like "Sign in with Google", but stateless)

## How it works?
1. Combine:
`password= f(master_key, service, user)`
2. Derive a strong password that is:
- Long, random-looking
- Format-friendly (e.g. `Aa1!` rules if needed)
3. Every time you enter the same inputs, you get the same password - no storage required

# License

This project is licensed under the terms described in the [LICENSE](./LICENSE) file.