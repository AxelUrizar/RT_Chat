export const MessageList = ({ messages }) => {
  return (
    <div className="flex-grow overflow-y-auto my-5">
      <ul className="flex flex-col justify-end items-center">
        {messages.map((message, index) => {
          if (message.user === 'Bot') {
            return (
              <li key={index} className="self-center flex flex-col justify-start items-center gap-2 text-start my-2 bg-violet-500 py-2 px-4 rounded-xl ">
                <p className="font-semibold">{message.message}</p>
              </li>
            )
          } else if (message.user === 'Tú') {
            return (
              <li key={index} className="self-end flex items-center gap-2 text-start my-2">
                <p className="max-w-[50vw] bg-zinc-500 py-2 px-4 rounded-xl">{message.message}</p>
                <p className="font-bold">{message.user}</p>
              </li>
            )
          } else {
            return (
              <li key={index} className="self-start flex justify-start items-center gap-2 text-start my-2">
                <p className="font-bold">{message.user}</p>
                <p className="max-w-[50vw] bg-zinc-700 py-2 px-4 rounded-xl">{message.message}</p>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
