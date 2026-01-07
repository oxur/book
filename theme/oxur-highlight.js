// Add Oxur-specific keywords to Clojure highlighting
if (hljs && hljs.getLanguage('clojure')) {
  const clojureDef = hljs.getLanguage('clojure');

  hljs.registerLanguage('oxur', function(hljs) {
    // Create a pattern to match Oxur definition forms
    const oxurDefPattern = {
      begin: '\\(\\s*(deffn|defimpl)\\b',
      end: '(\\[|\\{|\\()',
      excludeEnd: true,
      keywords: {
        keyword: 'deffn defimpl'
      },
      contains: [
        {
          className: 'title',
          begin: '[a-zA-Z_\\-!.?+*=<>&#\'][a-zA-Z_\\-!.?+*=<>&#\'0-9/]*',
          relevance: 0
        }
      ]
    };

    // Combine with Clojure contains at the front (higher priority)
    const contains = [oxurDefPattern].concat(clojureDef.contains || []);

    return {
      name: 'Oxur',
      aliases: ['lisp'],
      contains: contains
    };
  });
}
hljs.highlightAll();
