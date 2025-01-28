import Comment from "./Comment";

const commentsData = [
    {
        name: "Akshay Saini",
        text: "I propose of Opening a new section, named as \" LeetJob \", which exclusively feature jobs from companies directly shared with Leetcode. Also, there should be feasibility from users to post jobs too. @LeetCode",
        replies: [
            {
                name: "Tushar Srivastava",
                text: "Great idea! it would be also great to have a whole section for this in the Discuss, if it becomes popular. Also, if everyone follows the proposed format, when looking for a job, you can not accidentally stumble upon some kind of spam or full-screen beggar cats who ask for an upvote.",
                replies: [
                    {
                        name: "Sachin Singh",
                        text: "Hi anyone hiring for fresher SDE role (Remote/On-Site). I am actively looking for fresher role",
                        replies: [
                            {
                                name: "Shashi Prakash",
                                text: "Nice one! Perhaps we can also have a feature where recruiters can join leetcode and approach candidate proactively. Just throwing up some ideas :)",
                                replies: [
                                    {
                                        name: "Shivam Gupta",
                                        text: "Hi there, I'm a novice programmer looking for advice on landing a basic programming position. I'm self-taught from websites like Free Code Camp, Codecademy, and YouTube. I've dabbled a bit in Javascript, MySQL, Python, Swift, GitHub, HTML, SCC, with a heavy concentration in Javascript. I'm currently concentrating my efforts in Python so I'm more geared towards backend dev. I also have experience with Jira, Slack, and Stackoverflow. Any advice will be kindly received.",
                                        replies: [
                                
                                        ]
                                    },
                                    {
                                        name: "Alice Ong",
                                        text: "I'm a frontend developer from China. I have a beautiful and smart (emm...) female colleague sitting right next to me. Recently, she's been complaining about being boring during worktime. So I introduced LeetCode to her. And I'm glad she likes it. Everyday she'll pick one of the problems to solve. Today, she got herself one as usual. She's been staying at the problem page for, like, the whole morning. Every time I look at her screen, I found the cursor flashing at Ln6 Col5. And she's busy sliding her iPhone. Good job, Vee. lol.",
                                        replies: [
                                
                                        ]
                                    },
                                    {
                                        name: "Junior NITP",
                                        text: "I am a second-year computer science student. I have learnt C, C++, Web development(HTML, CSS, JavaScript), DSA, and PHP at the University. I know the basics of all of them, haven't done courses at a high level. Currently, I am learning JAVA. There will be an internship interview held in the next 3 months. I need to prepare for it, but not sure which should I focus on and what are necessary and demanding topics/languages to crack an interview. Kindly someone give me some advice.",
                                        replies: [
                                
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Striver",
                text: "people hating on question 2 should understand that this is what most actual software engineering jobs look like more time to understand the problem, figure out constraints, writing a lot of code to solve a problem that might not be very difficult ( or doesn't require out-of-the-box thinking, just grind ) over that you do meetings, give presentations, write documents, and write tests for that code LOL good luck with your Leetcoding",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "What on earth was Q2? Is that the kind of question that should be asked in a contest? So much time required!",
                        replies: [
                
                        ]
                    },
                    {
                        name: "Sachin Singh",
                        text: "TLE in 3rd Question Gang>?",
                        replies: [
                            {
                                name: "Tushar Srivastava",
                                text: "1/4 Gang....",
                                replies: [
                                    {
                                        name: "Satyam Russian",
                                        text: "I have no idea how works the brain of the person who created the 2nd question with its contradictory description and awkward data structures",
                                        replies: [
                                            {
                                                name: "Shashi Prakash",
                                                text: "I think the cheaters got banned. Top score is of person who solved in around 30 mins. Where did those folks go who solved in 5 mins?",
                                                replies: [
                                        
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: "Leetcoder",
                                        text: "i feel Q3 was pretty easy compared to recent ones. Q2 wasnt that implementation heavy either. a good day for me",
                                        replies: [
                                
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "Random Guy",
                                text: "Will Abhi find out a way to attend both? Share your thoughts in the comments below",
                                replies: [
                                    {
                                        name: "Random Girl",
                                        text: "Will Abhi find out a way to attend both? Share your thoughts in the comments below",
                                        replies: [
                                
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Modi ji",
                        text: "Just visited Kumbh and even after knowing all these things, it is nice to listen to this gentleman so much! After the disgusting Kejri interview, this is such like a breeze of positivity and joy ❤",
                        replies: [
                
                        ]
                    }
                ]
            },
            {
                name: "Dhruv Rathee",
                text: "I have already been to this Mahakumbh from uk on my own . Each word is exactly implemented on ground. Not worried about anything. Plz go and get this once in a while opportunity of Mahakumbh Snaan 🙏🏼 Jarrur jarrur jaaie aur Labh lijiye 🙏🏼",
                replies: [
        
                ]
            },
            {
        name: "Raj Shamini",
        text: "I am watching this video while I'm resting in a camp of the Kumbh mela and after experiencing the extreme powerful vibe of the kumbh in this Yogi era. I can definitely say that the govt. did a great job. The kumbh will definitely contribute to our Indian economy, from a small vendor, even small boat owners are earning around 35k everyday( I'm not exaggerating). Please come and explore the kumbh mela and don't miss this experience.",
        replies: [

        ]
    }
        ]
    }
  ];

const CommentsList = ({comments}) => {
    console.log(comments);
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment}/>
                {comment.replies && comment.replies.length > 0 && (
                    <div className="pl-5 ml-5">
                        <CommentsList comments={comment.replies} />
                    </div>
                )}
        </div>
))}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;