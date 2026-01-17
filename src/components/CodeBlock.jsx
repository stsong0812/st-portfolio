function highlightComments(code) {
  return code.replace(
    /(\/\/.*$)/gm,
    '<span class="text-gray-500 italic">$1</span>'
  );
}

export default function CodeBlock({ title, language, code, compact = false }) {
  return (
    <div className="flex justify-center my-6">
      <div className="inline-block w-max max-w-full rounded-xl border border-gray-200 bg-white shadow-sm">
        
        {/* Header */}
        {(title || language) && (
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-200 bg-gray-50 rounded-t-xl">
            {title && (
              <span className="text-xs font-mono font-semibold text-blue-700">
                {title}
              </span>
            )}
            {language && (
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                {language}
              </span>
            )}
          </div>
        )}

        {/* Code */}
        <pre
          className={`
            overflow-x-auto
            text-sm
            leading-relaxed
            ${compact ? "px-3 py-2" : "px-6 py-4"}
          `}
        >
          <code
            className="font-mono text-gray-900 whitespace-pre"
            dangerouslySetInnerHTML={{
              __html: highlightComments(code),
            }}
          />
        </pre>
      </div>
    </div>
  );
}
