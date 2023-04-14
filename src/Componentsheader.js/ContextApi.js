import React from "react";
import { createContext, useState } from "react";
import Download from './Download.jpeg';
import Dusri from './Dusri.jpeg';
import Everest from './Everest.jpg'


export const ContextData = createContext();

export const ProvideData = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      category: "mountain",
      image: Download,
      name: "K2 in China",
      height: "1798m",
      

    },

    {
      id: 2,
      category: "mountain",
      name: "CUERNOS DEL PAINE in Andes, Chile",
      image: Dusri,
      height: "1898m",
    },

    {
      id: 3,
      category: "mountain",
      name: "Mount Elbrus in Russia,",
      image: Everest,
    },
   
    
    {
      id: 6,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "technology",
      name: "IOT",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg",
      details: "Iot Explained.What it is, How it works, Why it matters",
      content:
        "The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.A thing in the internet of things can be a person with a heart monitor implant, a farm animal with a biochip transponder, an automobile that has built-in sensors to alert the driver when tire pressure is low or any other natural or man-made object that can be assigned an Internet Protocol (IP) address and is able to transfer data over a network.Increasingly, organizations in a variety of industries are using IoT to operate more efficiently, better understand customers to deliver enhanced customer service, improve decision-making and increase the value of the business.",
    },
    {
      id: 7,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "technology",
      name: "Data Science",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
      details: "Data Science vs Big Data vs Data Analytics",
      content:
        "Data science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills. In order to uncover useful intelligence for their organizations, data scientists must master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process.The term “data scientist” was coined as recently as 2008 when companies realized the need for data professionals who are skilled in organizing and analyzing massive amounts of data.1 In a 2009 McKinsey&Company article, Hal Varian, Google’s chief economist and UC Berkeley professor of information sciences, business, and economics, predicted the importance of adapting to technology’s influence and reconfiguration of different industries.",
    },
    {
      id: 8,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "technology",
      name: "Full Stack",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
      details: "The Rise of Full Stack Freelancing",
      content:
        "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.",
    },

    {
      id: 9,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "bollywood",
      desc: "After dominating the Asian underworld, Don sets his eyes on the European criminal market. Caught between the Berlin mafia and law enforcement, Don tries to escape treachery and betrayal.",
      name: "DON 2",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzNiYWYxNWYtZDYzMC00MzA0LTkzY2UtNDAwNDhiYmVjNmEwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      imdb: "7.2/10",
      release: "23th December,2011",
      content:
        "After eluding police in India for many years, Don extends his tentacles in Asia, and is all set to spread them in Europe - much to the chagrin of established gangsters. He then rather dramatically surrenders himself to Vishal Malik and his soon-to-be-successor, Roma, in Kuala Lumpur, and is held in a penitentiary, waiting for the death sentence to be carried out. With the help of a one-time rival, Vardhaan, the duo dramatically escape and head for Zurich and then Berlin. Roma and Vishal find out and follow them closely - little knowing the challenges they will soon be confronted with - after Don himself becomes a victim of treachery and betrayal at the hands of not one but several of his associates.",
    },
    {
      id: 10,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "bollywood",
      name: "Shershaah",
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg",
      release: "12th August,2021",
      imdb: "8.9/10",
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },
    {
      id: 11,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "bollywood",
      name: "Kal Ho Na Ho",
      desc: "Naina, a girl living a dreary life, finds a new meaning to her life when she meets Aman. Even though she loves him, Aman claims to be a married man and convinces Rohit, her friend, to woo her.",
      image: "https://i.ytimg.com/vi/tVMAQAsjsOU/maxresdefault.jpg",
      release: "28th November,2003",
      content:
        "Naina Kapur is the eldest of three and currently doing an MBA course in New York City. Her coursemate Rohit is a playboy wannabe who fails more than he succeeds, and the two befriend each other since she's one of the few women he doesn't plan to court. Naina lives with her mother and her paternal grandmother who, in essence, is your stereotypical mother-in-law. Not everything is going smoothly for the family. Their restaurant business is constantly in the red and family squabbles between the two in-laws are constant. However, the Kapur family still maintains their status quo, even if the children are unhappy about it. Enter Naina's new neighbour, Aman Mathur - a charismatic busybody who gets into everyone's face and then gets away with it. He brings a new life to the neighbourhood and slowly but surely begins to change the lives of everyone around him. He pushes people to become the best that they can be, and even gets Rohit spurred on enough to court Naina seriously. That is, until he realises that he's falling hard for Naina as well. And to complicate matters, Naina has also fallen for him.",
      imdb: "8/10",
    },

    {
      id: 12,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "bollywood",
      name: "Kahani",
      desc: "Vidya Bagchi, a pregnant woman, travels to Kolkata from London to search for her missing husband. When all clues lead to a dead end, she realises that there is more than what meets the eye.",
      image:
        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/84/12/0_i5ijlaj1_1557497777105_l_medium.jpg",
      content:
        "A poison-gas attack on a Kolkata Metro Rail compartment kills the passengers on board. Two years later Vidya Bagchi, a pregnant British-Indian software engineer, arrives in Kolkata from London during the Durga Puja festivities in search of her missing husband, Arnab Bagchi. A police officer, Satyaki Rana Sinha, offers to help. Although Vidya claims that Arnab went to Kolkata on an assignment for the National Data Center (NDC), initial investigations suggest that no such person was employed by the NDC.Agnes D'Mello, the NDC's head of human resources, suggests to Vidya that her husband resembled former employee Milan Damji, whose file is probably kept in the old NDC office. Before Agnes can provide any further help she is killed by Bob Biswas, an assassin working undercover as a life insurance agent. Agnes is shot at the entrance of her house before which she is seen enjoying some music. Vidya and Rana break into the NDC office and find Damji's file, barely escaping an encounter with Bob, who is searching for the same information. Meanwhile, the attempts to obtain Damji's records have attracted the attention of two Intelligence Bureau officials in Delhi—the chief Bhaskaran K. and his deputy Khan. Khan arrives in Kolkata and reveals that Damji was a rogue IB agent responsible for the poison-gas attack. In spite of Khan's warnings, Vidya continues her search, fearing that Arnab's resemblance to Damji may have led him into trouble.",
      imdb: "8.1/10",
      release: "9th March,2012",
    },
    {
      id: 13,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      details: "Twenty five pushups a day keep a doctor away",
      name: "Pushups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWDiHgeNF6Lr64s_ptmD0XkP6_HhJRGl54A&usqp=CAU",
      content:
        "A push-up (sometimes called a press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines.According to the study published in Journal of Strength and Conditioning Research, the test subjects supported with their hands, on average, 69.16% of their body mass in the up position, and 75.04% in the down position during the traditional push-ups. In modified push-ups, where knees are used as the pivot point, subjects supported 53.56% and 61.80% of their body mass in up and down positions, respectively.",
    },
    {
      id: 14,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      details: "Reduce your belly in one week and become confident",
      name: "Squats",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqs6FBIBch2dvaNgq-CbXoYpAtLQEm-mLag&usqp=CAU",
      content:
        "The movement begins from a standing position. Weight is often added; typically in the form of a loaded barbell, but dumbbells and kettlebells may also be used. When a barbell is used, it may be braced across the upper trapezius muscle, which is termed a high bar squat, or held lower across the rear deltoids, termed a low bar squat.[3] The movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position.As the body descends, the hips and knees undergo flexion, the ankle extends (dorsiflexes) and muscles around the joint contract eccentrically, reaching maximal contraction at the bottom of the movement while slowing and reversing descent. The muscles around the hips provide the power out of the bottom. If the knees slide forward or cave in then tension is taken from the hamstrings, hindering power on the ascent. Returning to vertical contracts the muscles concentrically, and the hips and knees undergo extension while the ankle plantarflexes.Common errors of squat form include descending too rapidly and flexing the torso too far forward. Rapid descent risks being unable to complete the lift or causing injury. This occurs when the descent causes the squatting muscles to relax and tightness at the bottom is lost as a result. Over-flexing the torso greatly increases the forces exerted on the lower back, risking a spinal disc herniation.[3] Another error is when the knee is not aligned with the direction of the toes, entering a valgus position, which can adversely stress the knee joint. An additional common error is the raising of heels off the floor, which reduces the contribution of the gluteus muscles.",
    },
    {
      id: 15,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      details: "Increase your muscle mass to build up strength",
      name: "Lunges",
      image:
        "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg",
      content:
        "The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.",
    },
    {
      id: 16,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      details: "Tips to improve your body balance and posture",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqWi5YAdCX_ANVCG8vfq55Rg_kGfK9eqk8A&usqp=CAU",
      name: "Plank",
      content:
        "The plank is an excellent abdominal and core exercise. To ensure you keep your core strong and stable, add the plank to your ab workout program.Strengthening the core is an important aspect of any workout regimen. A strong and solid core looks and feels good. But more importantly, it helps to stabilize, balance, and power the body during just about every other activity.Core strength is the basis for all coordinated and powerful athletic movements. A strong core can reduce stress on the joints and allow you to achieve better posture.",
    },

    {
      id: 17,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      details: "Have a quick bite today & refresh your mood",
      category: "food",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7civQwlYK8f8dsnmiOJA97HkXzM-6rAu6Q&usqp=CAU",
      name: "Pizza Hut",
      content:
        "Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.",
    },
    {
      id: 18,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "food",
      details: "Feeling hungry,Grab a bite today",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/18/32/77/f0/photo0jpg.jpg",
      name: "Burger King",
      content:
        "The predecessor to Burger King was founded in 1953 in Jacksonville, Florida, as Insta-Burger King.[8] After visiting the McDonald brothers' original store location in San Bernardino, California, the founders and owners (Keith J. Kramer and his wife's uncle Matthew Burns), who had purchased the rights to two pieces of equipment called Insta-machines, opened their first restaurants. Their production model was based on one of the machines they had acquired, an oven called the Insta-Broiler. This strategy proved to be so successful that they later required all of their franchises to use the device.[9][10] After the company faltered in 1959, it was purchased by its Miami, Florida, franchisees, James McLamore and David R. Edgerton. They initiated a corporate restructuring of the chain, first renaming the company Burger King. They ran the company as an independent entity for eight years (eventually expanding to over 250 locations in the United States), before selling it to the Pillsbury Company in 1967.",
    },
    {
      id: 19,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      details: "Remove your hunger in just 2 mins",
      category: "food",
      image:
        "https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg",
      name: "Maggi",
      content:
        "The company originated in Switzerland in 1884, when Julius Maggi took over his father's mill. He quickly became a pioneer of industrial food production, aiming to improve the nutritional intake of worker families. Maggi was the first to bring protein-rich legume meals to the market, and followed up with a ready-made soup based on legume meals in 1886. After that Julius Maggi introduced bouillon concentrates, first in capsules, then in cubes. In 1897, Julius Maggi founded the company Maggi GmbH in Singen, Germany.In 1947, following several changes in ownership and corporate structure, Maggis holding company merged with the Nestlé company to form Nestlé-Alimentana S.A., currently known in its francophone home base as Nestlé S.A.",
    },
    {
      id: 20,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "food",
      details: "Mouth watering food to lift your mood",
      image: "https://i.ytimg.com/vi/jLUuaFpEQkM/maxresdefault.jpg",
      name: "Idli",
      content:
        "A precursor of the modern idli is mentioned in several ancient Indian works. Vaddaradhane, a 920 CE Kannada language work by Shivakotiacharya mentions iddalige, prepared only from a black gram batter. Chavundaraya II, the author of the earliest available Kannada encyclopedia, Lokopakara (c.1025 CE), describes the preparation of this food by soaking black gram in buttermilk, ground to a fine paste, and mixed with the clear water of curd and spices.[1] The Western Chalukya king and scholar Someshwara III, reigning in the area now called Karnataka, included an idli recipe in his encyclopedia, Manasollasa (1130 CE). This Sanskrit-language work describes the food as iḍḍarikā. In Karnataka, the Idli in 1235 CE is described as being light, like coins of high value, which is not suggestive of a rice base.[2] The food prepared using this recipe is now called uddina idli in Karnataka.The recipe mentioned in these ancient Indian works leaves out three key aspects of the modern idli recipe: the use of rice (not just black gram), the long fermentation of the mix, and the steaming for fluffiness. The references to the modern recipe appear in the Indian works only after 1250 CE. Food historian K. T. Achaya speculates that the modern idli recipe might have originated in present-day Indonesia, which has a long tradition of fermented food. According to him, the cooks employed by the Hindu kings of the Indianised kingdoms might have invented the steamed idli there, and brought the recipe back to India during 800–1200 CE",
    },
    {
      id: 21,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      imdb: "5.8/10",
      category: "hollywood",
      release: "12th November,2009",
      image:
        "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg",
      name: "2012",
      content:
        "In 2009, American geologist Adrian Helmsley visits astrophysicist Satnam Tsurutani in India and learns that an exotic new type of neutrinos from a huge solar flare are heating the Earth's core. In Washington, D.C., Helmsley presents his information to White House Chief of Staff Carl Anheuser, who brings him to meet U.S. President Thomas Wilson.In 2010, Wilson and other world leaders begin a secret project to ensure humanity's survival. China and the G8 nations begin building nine arks, each capable of carrying 100,000 people, in the Himalayas near Cho Ming, Tibet. Nima, a Buddhist monk, is evacuated and his brother Tenzin joins the ark project. Funding is raised by secretly selling tickets to the rich and famous for €1 billion per person. By 2011, valuable art is moved to the arks but art expert and First Daughter Laura Wilson is told it is being sent to the Alps for preservation.",
    },

    {
      id: 22,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      imdb: "7.6/10",
      release: "12th April,2002",

      category: "hollywood",
      image:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg",
      name: "Harry Potter",
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },

    {
      id: 23,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      release: "31th March,1999",
      imdb: "8.7/10",
      category: "hollywood",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg",
      name: "Matrix",
      content:
        "The Matrix is a 1999 science fiction action film[5][6] written and directed by the Wachowskis.[a] It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.[7] When computer programmer Thomas Anderson, under the hacker alias Neo, uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.The Matrix is an example of the cyberpunk subgenre of science fiction.[8] The Wachowskis' approach to action scenes was influenced by Japanese animation[9] and martial arts films, and the film's use of fight choreographers and wire fu techniques from Hong Kong action cinema influenced subsequent Hollywood action film productions. ",
    },

    {
      id: 24,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      release: "15th April,1994",
      imdb: "7.6/10",
      category: "hollywood",
      image: "data:image/jpeg;base64,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",
      name: "The Jurassic Park",
      content:
        "Jurassic Park is a 1993 American science fiction action film[3] directed by Steven Spielberg and produced by Kathleen Kennedy and Gerald R. Molen. It is the first installment in the Jurassic Park franchise, and the first film in the Jurassic Park original trilogy, and is based on the 1990 novel of the same name by Michael Crichton and a screenplay written by Crichton and David Koepp. The film is set on the fictional island of Isla Nublar, located off Central America's Pacific Coast near Costa Rica. There, wealthy businessman John Hammond and a team of genetic scientists have created a wildlife park of de-extinct dinosaurs. When industrial sabotage leads to a catastrophic shutdown of the park's power facilities and security precautions, a small group of visitors and Hammond's grandchildren struggle to survive and escape the perilous island.Before Crichton's novel was published, four studios put in bids for its film rights. With the backing of Universal Studios, Spielberg acquired the rights for $1.5 million before its publication in 1990; Crichton was hired for an additional $500,000 to adapt the novel for the screen. Koepp wrote the final draft, which left out much of the novel's exposition and violence and made numerous changes to the characters.",
    },
  ]);

  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  );
};