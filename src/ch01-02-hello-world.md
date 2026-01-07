## Hello, World

Now that you’ve installed Rust and Oxur, it’s time to write your first Oxur program.
It’s traditional when learning a new language to write a little program that
prints the text `Hello, world!` to the screen, so we’ll do the same here!

> Note: This book assumes basic familiarity with the command line. Oxur makes
> no specific demands about your editing or tooling or where your code lives, so
> if you prefer to use an IDE instead of the command line, feel free to use your
> favorite IDE. Many IDEs now have some degree of Rust support; check the IDE’s
> documentation for details.

<!-- Old headings. Do not remove or links may break. -->
<a id="creating-a-project-directory"></a>

### Project Directory Setup

You’ll start by making a directory to store your Oxur code. It doesn’t matter
to Rust where your code lives, but for the exercises and projects in this book,
we suggest making a _projects_ directory in your home directory and keeping all
your projects there.

Open a terminal and enter the following commands to make a _projects_ directory
and a directory for the “Hello, world!” project within the _projects_ directory.

For Linux, macOS, and PowerShell on Windows, enter this:

```console
cd ~/projects
mkdir hello-world
cd hello-world
```

For Windows CMD, enter this:

```cmd
> mkdir "%USERPROFILE%\projects"
> cd /d "%USERPROFILE%\projects"
> mkdir hello-world
> cd hello-world
```

### Oxur Program Basics

Next, make a new source file and call it _main.oxr_. The preferred file extension for Oxur files is _.oxr_, but the Oxur compiler will attempt to parse and compile files with the following additional extensions: _.oxur_, _.ox_, and _.lisp_. If you’re using more than one word in your filename, the
convention is to use a hypen to separate them. For example, use
_hello-world.oxr_ rather than _hello_world.oxr_ or _helloworld.oxr_.

Now open the _main.oxr_ file you just created and enter the code in Listing 1-1.

<Listing number="1-1" file-name="main.oxr" caption="A program that prints `Hello, world!`">

```oxur
(deffn main ()
  (println! "Hello, world!"))
```

</Listing>

Save the file and go back to your terminal window in the
_~/projects/hello-world_ directory. On Linux or macOS, enter the following
commands to compile and run the file:

```console
$ ./bin/oxurc main.oxr
$ ./main
Hello, world!
```

On Windows, enter the command `.\main` instead of `./main`:

```powershell
> .\bin\oxurc main.oxr
> .\main
Hello, world!
```

Regardless of your operating system, the string `Hello, world!` should print to
the terminal. If you don’t see this output, refer back to the
[“Troubleshooting”][troubleshooting]<!-- ignore --> part of the Installation
section for ways to get help.

If `Hello, world!` did print, congratulations! You’ve officially written an Oxur
program. That makes you a Lisp programmer—welcome!

### The Anatomy of an Oxur Program

Let’s review this “Hello, world!” program in detail. Here’s the first piece of
the puzzle:

```oxur
(deffn main ()

)
```

These lines define a function named `main`. The `main` function is special: It
is always the first code that runs in every executable Oxur program. Here, the
first line declares a function named `main` that has no parameters and returns
nothing. If there were parameters, they would go inside the parentheses `()`.

As with all Lisps, the function is wrapped in `()`. Oxur requires parentheses around all
function functions (in fact, most forms -- but we'll get to that later). For simple functions like this, it’s good style for the function name, args, and return type (if there is one) to go on the first line, with the next line indented by two spaces.

> Note: If you want to stick to a standard style across Oxur projects, you can
> use an automatic formatter tool called `oxurfmt` to format your code in a
> particular style (more on `oxurfmt` in
> [Appendix D][devtools]<!-- ignore -->). The Oxur team has included this tool
> with the standard Oxur distribution, as `oxurc` is, so it should already be
> installed in the Oxur `./bin` directory you set up in the "Installation" section.

The body of the `main` function holds the following code:

```oxur
(println! "Hello, world!")
```

This line does all the work in this little program: It prints text to the
screen. There are three important details to notice here.

First, `println!` calls a Rust macro. If it had called a function instead, it
would be entered as `println` (without the `!`). Rust macros are a way to write
code that generates code to extend Rust syntax, and we’ll discuss them in more
detail in [Chapter 20][ch20-macros]<!-- ignore -->. For now, you just need to
know that using a `!` means that you’re calling a macro instead of a normal
function and that macros don’t always follow the same rules as functions.

Second, you see the `"Hello, world!"` string. We pass this string as an argument
to `println!`, and the string is printed to the screen.

### Compilation and Execution

You’ve just run a newly created program, so let’s examine each step in the
process.

Before running a Oxur program, you must compile it using the Oxur compiler by
entering the `oxurc` command and passing it the name of your source file, like
this:

```console
oxurc main.oxr
```

If you have used Rust before, you'll notice that Oxur takes the same appoarch, if youf have a C or C++ background, you’ll notice that this is similar to `gcc`
or `clang`. Like those, after compiling successfully, Oxur outputs a binary executable.

On Linux, macOS, and PowerShell on Windows, you can see the executable by
entering the `ls` command in your shell:

```console
$ ls
main  main.oxr
```

On Linux and macOS, you’ll see two files. With PowerShell on Windows, you’ll
see the same three files that you would see using CMD. With CMD on Windows, you
would enter the following:

```cmd
> dir /B %= the /B option says to only show the file names =%
main.exe
main.pdb
main.oxr
```

This shows the source code file with the _.oxr_ extension, the executable file
(_main.exe_ on Windows, but _main_ on all other platforms), and, when using
Windows, a file containing debugging information with the _.pdb_ extension.
From here, you run the _main_ or _main.exe_ file, like this:

```console
./main # or .\main on Windows
```

If your _main.oxr_ is your “Hello, world!” program, this line prints `Hello,
world!` to your terminal.

If you’re more familiar with a dynamic language, such as Ruby, Python, or
JavaScript, you might not be used to compiling and running a program as
separate steps. Oxur is an _ahead-of-time compiled_ language, meaning you can
compile a program and give the executable to someone else, and they can run it
even without having Oxur installed. If you give someone a _.rb_, _.py_, or
_.js_ file, they need to have a Ruby, Python, or JavaScript implementation
installed (respectively). But in those languages, you only need one command to
compile and run your program. Everything is a trade-off in language design.

Just compiling with `oxurc` is fine for simple programs, but as your project
grows, you’ll want to manage all the options and make it easy to share your
code. Next, we’ll introduce you to the Cargo tool, which will help you write
real-world Oxur programs.

[troubleshooting]: ch01-01-installation.html#troubleshooting
[devtools]: appendix-04-useful-development-tools.html
[ch20-macros]: ch20-05-macros.html
