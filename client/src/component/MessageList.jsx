export const MessageList = ({ messages }) => {
  return (
    <ul className="flex flex-col justify-center items-center my-5">
      {messages.map((message, index) => {
        if (message.user === 'Bot') {
          return (
            <li key={index} className="self-center flex flex-col justify-start items-center gap-2 text-start my-2 border border-black py-2 px-4 rounded-xl ">
              <p className="font-semibold">{message.message}</p>
            </li>
          )
        } else if (message.user === 'Tú') {
          return (
            <li key={index} className="self-end flex items-center gap-2 text-start my-2">
              <p className="border border-black py-2 px-4 rounded-xl">{message.message}</p>
              <p className="font-bold">{message.user}</p>
            </li>
          )
        } else {
          return (
            <li key={index} className="self-start flex justify-start items-center gap-2 text-start my-2">
              <p className="font-bold">{message.user}</p>
              <p className="border border-black py-2 px-4 rounded-xl">{message.message}</p>
            </li>
          )
        }
      })}
    </ul>
  )
}
