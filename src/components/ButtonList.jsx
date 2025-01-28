import Button from "./Button"

const ButtonList = () => {

  const buttonNames = ["All", "Web series", "Music", "Dramedy", "Software Engineering", "Computer Programming", "Mixes", "Live",
    "Movie musicals", "Vocabulary", "Strategies", "Asian music", "Lectures", "Motivation", "Recently uploaded", "Watched", "New to you"
  ];

  return (
    <div className="fixed mt-15 z-1 flex w-[1150px] overflow-x-scroll no-scrollbar whitespace-nowrap p-2 bg-white">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList