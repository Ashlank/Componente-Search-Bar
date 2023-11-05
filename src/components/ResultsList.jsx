export default function ResultsList({ list, selected }) {
  return (
    <>
      {
        list.map((item, index) => {
          return (
            <div key={String(item.show.name + index)}
                 className={`indent-3 border-b-gray-300
                             border-b-[1px]}
                             ${selected === index && 'bg-yellow-200'}`}>
              <a href={item.show.url} target="_blank" rel="noreferrer" className="block">
                {item.show.name}
              </a>
            </div>
          )
        })
      }
    </>
  )
}
