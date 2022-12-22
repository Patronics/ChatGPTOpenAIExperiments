ChatGPTOpenAIExperiments

This is a repository of experiments on the GPT model from OpenAI. The main goal is to use the model to generate responses to user input, simulating a chatbot.

The repository is organized as follows:

- data: contains the data used to train the models
- models: contains the trained models
- notebooks: contains the Jupyter notebooks used to train and evaluate the models

## How to use

To use the models, clone the repository and install the dependencies:

git clone https://github.com/Patronics/ChatGPTOpenAIExperiments.git
cd ChatGPTOpenAIExperiments
pip install -r requirements.txt


Then, you can use the models by running the `infer.py` script. For example:

python infer.py --model_name gpt2 --prompt "Hello, how are you?"


This will generate a response using the `gpt2` model and the prompt "Hello, how are you?".

## Model details

The repository currently contains the following models:

- gpt2: a GPT-2 model trained on a dataset of conversations
- gpt2-small: a smaller GPT-2 model trained on the same dataset

## Credits

The models were trained by [Patrick Coady](https://github.com/Patronics).

## License

The code in this repository is released under the MIT License. See the [LICENSE](LICENSE) file for more details.
