const questions = [
    {
        question: "What name is given to a year with 366 days",
        answers: {
            A: "Stride year",
            B: "Leap year",
            C: "Skip year",
            D: "Vault year"
        },
        correctAnswer: "B"
    },
    {
        question: "What kind of powder would be used to make cakes rise",
        answers: {
            A: "Baking powder",
            B: "Talcum powder",
            C: "Face powder",
            D: "Gun powder"
        },
        correctAnswer: "A"
    },
    {
        question: "Proverbially, what is rubbed into the wound to make things worse",
        answers: {
            A: "Salt",
            B: "Vinegar",
            C: "Chocolate",
            D: "Mayonnaise",
        },
        correctAnswer: "A"
    },
    {
        question: "Which of these is a type of hyena",
        answers: {
            A: "Chuckling",
            B: "Hooting",
            C: "Laughing",
            D: "Guffawing",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of these sports originated as a pub game",
        answers: {
            A: "Alpine skiing",
            B: "Baseball",
            C: "Canoeing",
            D: "Darts",
        },
        correctAnswer: "D"
    },
    {
        question: "Which part of the eye shares its name with a school student",
        answers: {
            A: "Pupil",
            B: "Iris",
            C: "Cornea",
            D: "Retina",
        },
        correctAnswer: "A"
    },
    {
        question: "Which of these feature on a cricket pitch",
        answers: {
            A: "Fold",
            B: "Crimp",
            C: "Pleat",
            D: "Crease",
        },
        correctAnswer: "D"
    },
    {
        question: "Which ancient civilisation was ruled by the Pharaohs",
        answers: {
            A: "Roman",
            B: "Japanese",
            C: "Carthaginian",
            D: "Egyptian",
        },
        correctAnswer: "D"
    },
    {
        question: "Which of these countries lies to the north of Germany",
        answers: {
            A: "Denmark",
            B: "Italy",
            C: "Spain",
            D: "Turkey",
        },
        correctAnswer: "A"
    },
    {
        question: "Which of these is a type of ice cream",
        answers: {
            A: "Cosmopolitan",
            B: "Neapolitan",
            C: "Metropolitan",
            D: "Duopolitan",
        },
        correctAnswer: "B"
    },
    {
        question: "Which rock and roll performer was often referred to as 'The King'",
        answers: {
            A: "Jerry Lee Lewis",
            B: "Buddy Holly",
            C: "Richie Valens",
            D: "Elvis Presley",
        },
        correctAnswer: "D"
    },
    {
        question: "What is the capital of the Netherlands",
        answers: {
            A: "Hamburg",
            B: "Amsterdam",
            C: "Vienna",
            D: "Strasbourg",
        },
        correctAnswer: "B"
    },
    {
        question: "Which work by Shakespeare is set in Scotland",
        answers: {
            A: "Othello",
            B: "Macbeth",
            C: "Hamlet",
            D: "The Tempest",
        },
        correctAnswer: "B"
    },
    {
        question: "Which English king was married six times",
        answers: {
            A: "Richard III",
            B: "Henry VIII",
            C: "Edward VI",
            D: "George III",
        },
        correctAnswer: "B"
    },
    {
        question: "What type of animal is a 'tern'",
        answers: {
            A: "Horse",
            B: "Sheep",
            C: "Fish",
            D: "Bird",
        },
        correctAnswer: "D"
    },
    {
        question: "What is the name of the white target ball in the ame of bowls",
        answers: {
            A: "John",
            B: "Jamie",
            C: "Jack",
            D: "Jim",
        },
        correctAnswer: "C"
    },
    {
        question: "An ingot is an oblong block of what",
        answers: {
            A: "Cheese",
            B: "Wood",
            C: "Metal",
            D: "Lard",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of these scientists had the first name Isaac",
        answers: {
            A: "Einstein",
            B: "Newton",
            C: "Faraday",
            D: "Pascal",
        },
        correctAnswer: "B"
    },
    {
        question: "The United States Of America has a border with which of these countries",
        answers: {
            A: "Brazil",
            B: "Ecuador",
            C: "Mexico",
            D: "Chile",
        },
        correctAnswer: "C"
    },
    {
        question: "Graham Hill and his son Damon are past world champions in which sport",
        answers: {
            A: "Boxing",
            B: "Motor racing",
            C: "Sailing",
            D: "Rowing",
        },
        correctAnswer: "B"
    },
    {
        question: "What is the capital of Northern Ireland",
        answers: {
            A: "Derry",
            B: "Belfast",
            C: "Cork",
            D: "Dublin",
        },
        correctAnswer: "B"
    },
    {
        question: "What is a bream",
        answers: {
            A: "Wild mushroom",
            B: "Paper quantity",
            C: "Freshwater fish",
            D: "Musical instrument",
        },
        correctAnswer: "C"
    },
    {
        question: "In which country did the budgerigar originate",
        answers: {
            A: "Australia",
            B: "Belgium",
            C: "Chad",
            D: "Denmark",
        },
        correctAnswer: "A"
    },
    {
        question: "Which of these was an open-air venue for chariot racing in ancient Rome",
        answers: {
            A: "Velodrome",
            B: "Aerodrome",
            C: "Palindrome",
            D: "Hippodrome",
        },
        correctAnswer: "D"
    },
    {
        question: "Which of these ingredients would you traditionlly find in a paella",
        answers: {
            A: "Pasta",
            B: "Potato",
            C: "Rice",
            D: "Couscous",
        },
        correctAnswer: "C"
    },
    {
        question: "The island of Sardinia is part of which European country",
        answers: {
            A: "Greece",
            B: "France",
            C: "Spain",
            D: "Italy",
        },
        correctAnswer: "D"
    },
    {
        question: "Nostradamus was famous for making what",
        answers: {
            A: "Cakes",
            B: "Predictions",
            C: "Friends",
            D: "Jokes",
        },
        correctAnswer: "B"
    },
    {
        question: "What is the name for the part of the bone that fits into a socket to form hip and shoulder joints",
        answers: {
            A: "Ball",
            B: "Plug",
            C: "Knuckle",
            D: "Pivot",
        },
        correctAnswer: "A"
    },
    {
        question: "What is the colour of the maple leaf on the Canadian national flag",
        answers: {
            A: "Green",
            B: "White",
            C: "Red",
            D: "Gold",
        },
        correctAnswer: "C"
    },
    {
        question: "Louis Pasteur developed a vaccine for which of these conditions",
        answers: {
            A: "Polio",
            B: "German measles",
            C: "Rabies",
            D: "Whooping cough",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of these is an extra in cricket",
        answers: {
            A: "Wide",
            B: "Broad",
            C: "Large",
            D: "Vast",
        },
        correctAnswer: "A"
    },
    {
        question: "Which word describes two lines which are always the same distance apart",
        answers: {
            A: "Equilateral",
            B: "Parallel",
            C: "Quadratic",
            D: "Tangential",
        },
        correctAnswer: "B"
    },
    {
        question: "Insulin is commonly used to treat which condition",
        answers: {
            A: "Diabetes",
            B: "Haemophilia",
            C: "Gout",
            D: "Asthma",
        },
        correctAnswer: "A"
    },
    {
        question: "What shape is the head of an Allen key",
        answers: {
            A: "Triangular",
            B: "Square",
            C: "Pentagonal",
            D: "Hexagonal",
        },
        correctAnswer: "D"
    },
    {
        question: "With which singer is the line 'Ground control to Major Tom' associated",
        answers: {
            A: "Elvis Costello",
            B: "David Bowie",
            C: "Tom Jones",
            D: "David Essex",
        },
        correctAnswer: "B"
    },
    {
        question: "What kind of bird is a macaw",
        answers: {
            A: "Parrot",
            B: "Penguin",
            C: "Puffin",
            D: "Pigeon",
        },
        correctAnswer: "A"
    },
    {
        question: "What are seraphim and cherubim",
        answers: {
            A: "Religious incense",
            B: "Medieval alchemists",
            C: "Ranks of angels",
            D: "Roman emperors",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of these is a climbing plant with sweet-smelling flowers, popular in the garden",
        answers: {
            A: "Sweet celery",
            B: "Sweet pea",
            C: "Sweet cabbage",
            D: "Sweet bean",
        },
        correctAnswer: "B"
    },
    {
        question: "Leonardo DiCaprio starred in which of these films",
        answers: {
            A: "The cruel sea",
            B: "The beach",
            C: "The swimmer",
            D: "The sea of sand",
        },
        correctAnswer: "B"
    },
    {
        question: "Which car manufacturer produces a model called the 'Laguna'",
        answers: {
            A: "Renault",
            B: "Ford",
            C: "Seat",
            D: "Nissan",
        },
        correctAnswer: "A"
    },
];

