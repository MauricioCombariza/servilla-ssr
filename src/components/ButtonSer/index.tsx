interface Props {
    name: string
    type: string
    onClick?: () => void
  }

  
const ButtonSer: React.FC<Props> = ({name}) => {
  return (
    <button
    className="rounded shadow-lg hover:shadow-none bg-green-100 text-ser hover:bg-ser hover:text-white pdy-2 px-4 block mx-auto  border border-darkser"
  >
    {name}
  </button>
  )
}

export {ButtonSer}