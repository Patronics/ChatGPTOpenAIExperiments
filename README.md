# ChatGPTOpenAIExperiments

This is a repository to hold experiments with the OpenAI GPT-3 API. The goal is to create a chatbot that can hold a conversation with a human.

## Data

The data used for training is a collection of movie scripts from the Cornell Movie Dialogs Corpus. The scripts have been cleaned and formatted for easier use.

## Training

The model was trained using the OpenAI API with the following settings:

- Engine: davinci
- Temperature: 0.7

## Results

The chatbot is able to hold a coherent conversation with a human. However, it does struggle with understanding context and following the conversation if it goes off track. It also tends to repeat itself and generate generic responses.

## Future Work

There is still room for improvement in the chatbot's performance. Some ideas for future work include:

- Fine-tuning the model with more data and adjusting the training parameters
- Implementing a context tracker to better understand the conversation
- Adding a response selection mechanism to prevent repetition and generate more diverse responses

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
