# ChatOpenAIExperiments

This repository contains code for training a large language model (GPT-3) on various chat datasets and using the trained model to build a chatbot.

## Prerequisites

* Python 3.6 or higher
* PyTorch 1.5 or higher
* OpenAI API key

## Training the Model

To train the model, run the following command:
python chat_openai.py train


This will train the model on the data in the `data` directory. The trained model will be saved in the `checkpoints` directory.

## Using the Model to Chat

To use the trained model to chat, run the following command:

python chat_openai.py chat

This will start the chatbot, which you can interact with by typing messages in the command line. To exit the chatbot, type `exit`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

