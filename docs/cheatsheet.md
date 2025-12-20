# Vibecode Cheatsheet
## Prompting Patterns for Claude Code

---

## The Golden Rule

**Context → Task → Constraints → Examples**

More context = better output. Claude can't read your mind.

---

## Starting a Project

```
I'm building [what] for [who].
Tech stack: [languages/frameworks]
The goal is to [outcome].
Let's start with [first piece].
```

**Example:**
> I'm building an internal dashboard for our ops team.
> Tech stack: React, TypeScript, Tailwind.
> The goal is to show real-time loan application status.
> Let's start with the data fetching layer.

---

## Giving Good Context

| Instead of... | Try... |
|--------------|--------|
| "Make a form" | "Make a contact form with name, email, message. Validate email client-side. Show success state after submit." |
| "Fix this bug" | "This function returns undefined when the array is empty. It should return an empty array instead." |
| "Make it better" | "Make the error messages more specific — tell the user exactly which field failed and why." |

---

## Iteration Patterns

**Refine:**
> "Good, but make the error handling more robust"

**Redirect:**
> "Actually, let's use a different approach — instead of polling, use websockets"

**Expand:**
> "Now add loading states and empty states"

**Constrain:**
> "Simplify this — we don't need the edge cases yet"

---

## When Output is Wrong

**Don't start over.** Guide Claude back:

> "This is calling the wrong API endpoint. The correct one is /api/v2/users, not /api/users"

> "You're using an outdated pattern. In React 18+, we should use..."

> "This would work but it's not how our codebase does it. We use [pattern] instead."

---

## Reviewing AI Code: 30-Second Scan

1. **Does it run?** (syntax, imports, obvious errors)
2. **Does it do what I asked?** (check the happy path)
3. **What could break?** (edge cases, error handling)
4. **Is it secure?** (inputs validated? secrets exposed?)
5. **Will my team understand it?** (readable, follows conventions)

---

## Magic Prompts

**"Explain this code like I'm reviewing a PR"**
→ Gets you a summary focused on what matters

**"What are the edge cases I should test?"**
→ Claude thinks through failure modes

**"Refactor this to be more [readable/testable/maintainable]"**
→ Improves without changing behavior

**"Write this in the style of our existing codebase"**
→ (Requires CLAUDE.md with examples)

---

## Red Flags to Watch For

- 🚩 Hallucinated APIs or packages that don't exist
- 🚩 Outdated syntax (especially in fast-moving ecosystems)
- 🚩 Security issues (exposed secrets, SQL injection, XSS)
- 🚩 Over-engineering simple problems
- 🚩 Missing error handling
- 🚩 "It works on my machine" assumptions

---

## CLAUDE.md Essentials

Put this in your project root:

```markdown
# Project Name

## Overview
What this project does, who it's for.

## Tech Stack
Languages, frameworks, key dependencies.

## Conventions
- How we name things
- How we structure files
- Patterns we use (and avoid)

## Examples
Link to or paste good code samples.
```

---

## One More Thing

The best prompt is often just:

> "Here's what I'm trying to do: [goal]. Here's what I've tried: [attempt]. What am I missing?"

Claude is good at debugging your thinking, not just your code.

---

*Questions? Reach out: [your email]*
