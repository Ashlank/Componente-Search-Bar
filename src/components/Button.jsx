import SearchIcon from './SearchIcon'
import CloseIcon from './CloseIcon'

export default function Button({ search, onClick }) {
  return (
    <button type='button'
            className='bg-gray-400 rounded-r-2xl w-8 flex justify-center items-center'
            onClick={search ? onClick : null}>
      {
        search
          ?
        <CloseIcon />
          :
        <SearchIcon />
      }
    </button>
  )
}
