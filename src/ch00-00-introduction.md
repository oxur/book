# Introduction

Welcome to _The Oxur Programming Language_, an introductory book about Oxur (pronounced "ochre").
Oxur is a Lisp dialect that compiles to Rust, combining Lisp's expressive power
with Rust's safety guarantees and performance. Lisp's homoiconicity and systems
programming power are often at odds in language design; Oxur bridges that gap.
Through 100% bidirectional interoperability with Rust, Oxur gives you the option
to leverage Rust's type system, ownership model, and entire ecosystem while
enjoying Lisp's metaprogramming capabilities and REPL-driven development.

## Who Oxur Is For

Oxur is ideal for many people for a variety of reasons. Let's look at a few of
the most important groups.

### Teams of Developers

Oxur is proving to be a productive tool for collaborating among large teams of
developers with varying backgrounds in both Lisp and systems programming.
Because Oxur compiles to Rust, it inherits Rust's compiler guarantees: the
compiler plays a gatekeeper role by refusing to compile code with elusive bugs,
including concurrency bugs. By combining this safety with Lisp's interactive
development style, teams can rapidly prototype and refactor while maintaining
confidence in their code's correctness.

Oxur brings powerful metaprogramming to the systems programming world:

- Cargo integration means Oxur projects use the same dependency manager and
  build tool as Rust, making interoperability seamless across the ecosystem.
- REPL-driven development with a network protocol enables interactive
  programming and live code updates.
- Full access to Rust's tooling ecosystem, including formatters and language
  servers.

By using these and other tools in the Rust ecosystem, developers can be
productive while writing expressive systems-level code.

### Students

Oxur is for students and those who are interested in learning about systems
concepts through the lens of Lisp. Using Oxur, people can explore topics like
ownership, lifetimes, and type systems while working in a familiar Lisp syntax.
The community is very welcoming and happy to answer students' questions.
Through efforts such as this book, the Oxur project wants to make systems
concepts more accessible through Lisp's elegant notation, especially for those
coming from functional programming backgrounds.

### Companies

While Oxur is a new language, it inherits the production-readiness of Rust.
Companies using Rust for command line tools, web services, DevOps tooling,
embedded devices, and other applications can adopt Oxur for tasks that benefit
from metaprogramming, rapid prototyping, or Lisp-style development workflows.
Because Oxur compiles to Rust and provides 100% interoperability, it
integrates seamlessly into existing Rust codebases.

### Open Source Developers

Oxur is for people who want to explore the intersection of Lisp and systems
programming. Whether you're interested in language design, compiler
construction, or building practical tools with Lisp, we'd love to have you
contribute to the Oxur language, its ecosystem, and its tooling.

### Lisp Enthusiasts Who Value Speed and Safety

Oxur is for Lispers who crave modern performance and safety guarantees. Because
Oxur compiles to Rust, it inherits Rust's speed and Rust's ownership-based
safety model. The compilation process ensures stability through feature
additions and refactoring. By striving for zero-cost abstractions—higher-level
Lisp features that compile to lower-level Rust code as fast as hand-written
Rust—Oxur endeavors to make expressive code be fast and safe code as well.

The Oxur language hopes to support many other users as well; those mentioned
here are merely some of the biggest stakeholders. Overall, Oxur's greatest
ambition is to bridge the expressive power of Lisp with the safety and
performance of Rust, providing metaprogramming _and_ memory safety, interactive
development _and_ compiled efficiency. Give Oxur a try, and see if this fusion
works for you.

## Who This Book Is For

This book assumes that you've written code in another programming language, but
it doesn't make any assumptions about which one. While familiarity with either
Lisp or Rust will be helpful, it's not required. We've tried to make the
material broadly accessible to those from a wide variety of programming
backgrounds, whether you're coming from functional programming, systems
programming, or elsewhere. We don't spend a lot of time talking about what
programming _is_ or how to think about it. If you're entirely new to
programming, you would be better served by reading a book that specifically
provides an introduction to programming.

## How to Use This Book

In general, this book assumes that you're reading it in sequence from front to
back. Later chapters build on concepts in earlier chapters, and earlier
chapters might not delve into details on a particular topic but will revisit
the topic in a later chapter.

You'll find two kinds of chapters in this book: concept chapters and project
chapters. In concept chapters, you'll learn about an aspect of Oxur. In project
chapters, we'll build small programs together, applying what you've learned so
far. Chapter 2, Chapter 12, and Chapter 21 are project chapters; the rest are
concept chapters.

**Chapter 1** explains how to install Oxur, how to write a "Hello, world!"
program, and how to use Cargo alongside Oxur. **Chapter 2** is a hands-on
introduction to writing a program in Oxur, having you build up a number-guessing
game. Here, we cover concepts at a high level, and later chapters will provide
additional detail. If you want to get your hands dirty right away, Chapter 2 is
the place for that. If you're a particularly meticulous learner who prefers to
learn every detail before moving on to the next, you might want to skip Chapter
2 and go straight to **Chapter 3**, which covers Oxur features that are similar
to those of other Lisp dialects; then, you can return to Chapter 2 when you'd
like to work on a project applying the details you've learned.

In **Chapter 4**, you'll learn about Rust's ownership system and how it's
expressed in Oxur. **Chapter 5** discusses structs and methods. **Chapter 6**
covers enums, match expressions, and the `if let` and `let...else` control flow
constructs. You'll use structs and enums to make custom types.

In **Chapter 7**, you'll learn about Rust's module system and about privacy
rules for organizing your code and its public application programming interface
(API). **Chapter 8** discusses some common collection data structures that Rust
provides: vectors, strings, and hash maps. **Chapter 9** explores Rust's
error-handling philosophy and techniques using Result and Option types.

**Chapter 10** digs into generics, traits, and lifetimes, which give you the
power to define code that applies to multiple types. **Chapter 11** is all
about testing, which even with Rust's safety guarantees is necessary to ensure
that your program's logic is correct. In **Chapter 12**, we'll build our own
implementation of a subset of functionality from the grep command line tool
that searches for text within files. For this, we'll use many of the concepts
we discussed in the previous chapters.

**Chapter 13** explores closures and iterators: features of Rust that come from
functional programming languages and feel natural in Oxur. In **Chapter 14**,
we'll examine Cargo in more depth and talk about best practices for sharing
your libraries with others. **Chapter 15** discusses smart pointers that the
standard library provides and the traits that enable their functionality.

In **Chapter 16**, we'll walk through different models of concurrent
programming and talk about how Rust helps you program in multiple threads
fearlessly. In **Chapter 17**, we build on that by exploring Rust's async and
await syntax, along with tasks, futures, and streams, and the lightweight
concurrency model they enable.

**Chapter 18** looks at how Oxur's Lisp heritage compares to object-oriented
programming principles you might be familiar with. **Chapter 19** is a
reference on patterns and pattern matching, which are powerful ways of
expressing ideas throughout Oxur programs. **Chapter 20** contains a
smorgasbord of advanced topics of interest, including macros, metaprogramming,
and more about lifetimes, traits, types, functions, and closures.

In **Chapter 21**, we'll complete a project in which we'll implement a
low-level multithreaded web server!

Finally, some appendixes contain useful information about the language in a
more reference-like format. **Appendix A** covers Oxur's special forms and
keywords, **Appendix B** covers operators and symbols, **Appendix C** covers
derivable traits provided by the standard library, **Appendix D** covers some
useful development tools, and **Appendix E** explains Oxur versions. In
**Appendix F**, you can find translations of the book, and in **Appendix G**
we'll cover how Oxur is made and its relationship with Rust.

There is no wrong way to read this book: If you want to skip ahead, go for it!
You might have to jump back to earlier chapters if you experience any
confusion. But do whatever works for you.

<span id="ferris"></span>

An important part of the process of learning Oxur is learning how to read the
error messages from the Rust compiler: Because Oxur compiles to Rust, these
error messages will guide you toward working code. Oxur's source mapping system
translates these errors back to your original Oxur code, providing
rustc-quality error messages that point to the exact location in your Oxur
source. As such, we'll provide many examples that don't compile along with the
error message the compiler will show you in each situation. Know that if you
enter and run a random example, it may not compile! Make sure you read the
surrounding text to see whether the example you're trying to run is meant to
error. In most situations, we'll lead you to the correct version of any code
that doesn't compile.

## Source Code

The source files from which this book is generated can be found on
[GitHub][book].

[book]: https://github.com/oxur/oxur-book/tree/main/src
