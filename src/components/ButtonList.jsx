import Button from "./Button"

const ButtonList = () => {

  const buttonNames = ["All", "Web series", "Music", "Dramedy", "Software Engineering", "Computer Programming", "Mixes", "Live",
    "Movie musicals", "Vocabulary", "Strategies", "Asian music", "Lectures", "Motivation", "Recently uploaded", "Watched", "New to you"
  ];

  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar whitespace-nowrap p-2">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList