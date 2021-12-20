const questions = [
    {
        question: "What name is given to a year with 366 days",
        answers: [
            { text:"Stride year", correct: false},
            { text:"Leap year", correct: true},
            { text:"Skip year", correct: false},
            { text:"Vault year", correct: false}
        ]
    },
    {
        question: "What kind of powder would be used to make cakes rise",
        answers: [
            { text:"Baking powder", correct: true},
            { text:"Talcum powder", correct: false},
            { text:"Face powder", correct: false},
            { text:"Gun powder", correct: false}
        ]
    },
    {
        question: "Proverbially, what is rubbed into the wound to make things worse",
        answers: [
            { text:"Salt", correct: true},
            { text:"Vinegar", correct: false},
            { text:"Chocolate", correct: false},
            { text:"Mayonnaise", correct: false}
        ]
    },
    {
        question: "Which of these is a type of hyena",
        answers: [
            { text:"Chuckling", correct: false},
            { text:"Hooting", correct: false},
            { text:"Laughing", correct: true},
            { text:"Guffawing", correct: false}
        ]
    },
    {
        question: "Which of these sports originated as a pub game",
        answers: [
            { text:"Alpine skiing", correct: false},
            { text:"Baseball", correct: false},
            { text:"Canoeing", correct: false},
            { text:"Darts", correct: true}
        ]
    },
    {
        question: "Which part of the eye shares its name with a school student",
        answers: [
            { text:"Pupil", correct: true},
            { text:"Iris", correct: false},
            { text:"Cornea", correct: false},
            { text:"Retina", correct: false}
        ]
    },
    {
        question: "Which of these feature on a cricket pitch",
        answers: [
            { text:"Fold", correct: false},
            { text:"Crimp", correct: false},
            { text:"Pleat", correct: false},
            { text:"Crease", correct: true}
        ]
    },
    {
        question: "Which ancient civilisation was ruled by the Pharaohs",
        answers: [
            { text:"Roman", correct: false},
            { text:"Japanese", correct: false},
            { text:"Carthaginian", correct: false},
            { text:"Egyptian", correct: true}
        ]
    },
    {
        question: "Which of these countries lies to the north of Germany",
        answers: [
            { text:"Denmark", correct: true},
            { text:"Italy", correct: false},
            { text:"Spain", correct: false},
            { text:"Turkey", correct: false}
        ]
    },
    {
        question: "Which of these is a type of ice cream",
        answers: [
            { text:"Cosmopolitan", correct: false},
            { text:"Neapolitan", correct: true},
            { text:"Metropolitan", correct: false},
            { text:"Duopolitan", correct: false}
        ]
    },
    {
        question: "Which rock and roll performer was often referred to as 'The King'",
        answers: [
            { text:"Jerry Lee Lewis", correct: false},
            { text:"Buddy Holly", correct: false},
            { text:"Richie Valens", correct: false},
            { text:"Elvis Presley", correct: true}
        ]
    },
    {
        question: "What is the capital of the Netherlands",
        answers: [
            { text:"Hamburg", correct: false},
            { text:"Amsterdam", correct: true},
            { text:"Vienna", correct: false},
            { text:"Strasbourg", correct: false}
        ]
    },
    {
        question: "Which work by Shakespeare is set in Scotland",
        answers: [
            { text:"Othello", correct: false},
            { text:"Macbeth", correct: true},
            { text:"Hamlet", correct: false},
            { text:"The Tempest", correct: false}
        ]
    },
    {
        question: "Which English king was married six times",
        answers: [
            { text:"Richard III", correct: false},
            { text:"Henry VIII", correct: true},
            { text:"Edward VI", correct: false},
            { text:"George III", correct: false}
        ]
    },
    {
        question: "What type of animal is a 'tern'",
        answers: [
            { text:"Horse", correct: false},
            { text:"Sheep", correct: false},
            { text:"Fish", correct: false},
            { text:"Bird", correct: true}
        ]
    },
    {
        question: "What is the name of the white target ball in the ame of bowls",
        answers: [
            { text:"John", correct: false},
            { text:"Jamie", correct: false},
            { text:"Jack", correct: true},
            { text:"Jim", correct: false},
        ]
    },
    {
        question: "An ingot is an oblong block of what",
        answers: [
            { text:"Cheese", correct: false},
            { text:"Wood", correct: false},
            { text:"Metal", correct: true},
            { text:"Lard", correct: false}
        ]
    },
    {
        question: "Which of these scientists had the first name Isaac",
        answers: [
            { text:"Einstein", correct: false},
            { text:"Newton", correct: true},
            { text:"Faraday", correct: false},
            { text:"Pascal", correct: false}
        ]
    },
    {
        question: "The United States Of America has a border with which of these countries",
        answers: [
            { text:"Brazil", correct: false},
            { text:"Ecuador", correct: false},
            { text:"Mexico", correct: true},
            { text:"Chile", correct: false}
        ]
    },
    {
        question: "Graham Hill and his son Damon are past world champions in which sport",
        answers: [
            { text:"Boxing", correct: false},
            { text:"Motor racing", correct: true},
            { text:"Sailing", correct: false},
            { text:"Rowing", correct: false}
        ]
    },
    {
        question: "What is the capital of Northern Ireland",
        answers: [
            { text:"Derry", correct: false},
            { text:"Belfast", correct: true},
            { text:"Cork", correct: false},
            { text:"Dublin", correct: false}
        ]
    },
    {
        question: "What is a bream",
        answers: [
            { text:"Wild mushroom", correct: false},
            { text:"Paper quantity", correct: false},
            { text:"Freshwater fish", correct: true},
            { text:"Musical instrument", correct: false},
        ]
    },
    {
        question: "In which country did the budgerigar originate",
        answers: [
            { text:"Australia", correct: true},
            { text:"Belgium", correct: false},
            { text:"Chad", correct: false},
            { text:"Denmark", correct: false}
        ]
    },
    {
        question: "Which of these was an open-air venue for chariot racing in ancient Rome",
        answers: [
            { text:"Velodrome", correct: false},
            { text:"Aerodrome", correct: false},
            { text:"Palindrome", correct: false},
            { text:"Hippodrome", correct: true}
        ]
    },
    {
        question: "Which of these ingredients would you traditionlly find in a paella",
        answers: [
            { text:"Pasta", correct: false},
            { text:"Potato", correct: false},
            { text:"Rice", correct: true},
            { text:"Couscous", correct: false}
        ]
    },
    {
        question: "The island of Sardinia is part of which European country",
        answers: [
            { text:"Greece", correct: false},
            { text:"France", correct: false},
            { text:"Spain",correct: false},
            { text:"Italy", correct: true}
        ]
    },
    {
        question: "Nostradamus was famous for making what",
        answers: [
            { text:"Cakes", correct: false},
            { text:"Predictions", correct: true},
            { text:"Friends", correct: false},
            { text:"Jokes", correct: false}
        ]
    },
    {
        question: "What is the name for the part of the bone that fits into a socket to form hip and shoulder joints",
        answers: [
            { text:"Ball", correct: true},
            { text:"Plug", correct: false},
            { text:"Knuckle", correct: false},
            { text:"Pivot", correct: false}
        ]
    },
    {
        question: "What is the colour of the maple leaf on the Canadian national flag",
        answers: [
            { text:"Green", correct: false},
            { text:"White", correct: false},
            { text:"Red", correct: true},
            { text:"Gold", correct: false}
        ]
    },
    {
        question: "Louis Pasteur developed a vaccine for which of these conditions",
        answers: [
            { text:"Polio", correct: false},
            { text:"German measles", correct: false},
            { text:"Rabies", correct: true},
            { text:"Whooping cough", correct: false}
        ]
    },
    {
        question: "Which of these is an extra in cricket",
        answers: [
            { text:"Wide", correct: true},
            { text:"Broad", correct: false},
            { text:"Large", correct: false},
            { text:"Vast", correct: false}
        ]
    },
    {
        question: "Which word describes two lines which are always the same distance apart",
        answers: [
            { text:"Equilateral", correct: false},
            { text:"Parallel", correct: true},
            { text:"Quadratic", correct: false},
            { text:"Tangential", correct: false}
        ]
    },
    {
        question: "Insulin is commonly used to treat which condition",
        answers: [
            { text:"Diabetes", correct: true},
            { text:"Haemophilia", correct: false},
            { text:"Gout", correct: false},
            { text:"Asthma", correct: false}
        ]
    },
    {
        question: "What shape is the head of an Allen key",
        answers: [
            { text:"Triangular", correct: false},
            { text:"Square", correct: false},
            { text:"Pentagonal", correct: false},
            { text:"Hexagonal", correct: true}
        ]
    },
    {
        question: "With which singer is the line 'Ground control to Major Tom' associated",
        answers: [
            { text:"Elvis Costello", correct: false},
            { text:"David Bowie", correct: true},
            { text:"Tom Jones", correct: false},
            { text:"David Essex", correct: false}
        ]
    },
    {
        question: "What kind of bird is a macaw",
        answers: [
            { text:"Parrot", correct: true},
            { text:"Penguin", correct: false},
            { text:"Puffin", correct: false},
            { text:"Pigeon", correct: false}
        ]
    },
    {
        question: "What are seraphim and cherubim",
        answers: [
            { text:"Religious incense", correct: false},
            { text:"Medieval alchemists", correct: false},
            { text:"Ranks of angels",correct: true},
            { text:"Roman emperors", correct: false},
        ]
    },
    {
        question: "Which of these is a climbing plant with sweet-smelling flowers, popular in the garden",
        answers: [
            { text:"Sweet celery", correct: false},
            { text:"Sweet pea", correct: true},
            { text:"Sweet cabbage", correct: false},
            { text:"Sweet bean", correct: false}
        ]
    },
    {
        question: "Leonardo DiCaprio starred in which of these films",
        answers: [
            { text:"The cruel sea", correct: false},
            { text:"The beach", correct: true},
            { text:"The swimmer", correct: false},
            { text:"The sea of sand", correct: false}
        ]
    },
    {
        question: "Which car manufacturer produces a model called the 'Laguna'",
        answers: [
            { text:"Renault", correct: true},
            { text:"Ford", correct: false},
            { text:"Seat", correct: false},
            { text:"Nissan", correct: false}
        ]
    },
];



