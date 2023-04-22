# Web3 Carrot School Move contracts built by Funnyybuns

An on-chain representations of students progress in the Carrot School. At the end of each chapter, students will complete a quiz. When they complete the quiz, Carrot School will award them with a non-transferrable "achievement token" which will store their % score on-chain for that particular chapter. Then, students will have the option to merge this achievement token with their "profile certificate". This certificate will also be non-transferrable and will include the % score for each achievement token which they have merged.

The achievement token details should only be queryable for the student who owns it. The profile certificate should be queryable for anyone. This way, if a user gets a score they do not like, they can choose not to display it in their profile certificate.

The contract allows the owner to provide some input: chapter name, chapter number, 50+ questions and respective answers for each.

Each quiz will likely have around 10 randomly chosen questions from the set of 50 questions for that chapter. This way, people do not get the same questions every time they "retry" the quiz. When they complete the quiz, they will be able to submit a TX which will include all the answers for their questions, and the contract should send them the achievement token with their respective score based on their answers.

The contract also has functionality for deleting questions, adding new questions, adding new chapters, deleting chapters, etc...
