export default function Input({ search, onChange, onKeyDown }) {
  return (
    <input
      type='text'
      value={search}
      name='search'
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder='Search...'
      className='indent-3 w-full'
    />
  )
}
