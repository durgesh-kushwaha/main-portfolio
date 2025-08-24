interface SearchBarProps {
  placeholder?: string
}

export default function SearchBar({ placeholder = "Search blogs and projects..." }: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="relative">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder={placeholder}
          className="search-input"
          readOnly
        />
      </div>
    </div>
  )
}
