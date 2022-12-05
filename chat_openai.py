import argparse
import random

import torch
import openai

from src.data_loader import DataLoader
from src.model import GPT2LMHeadModel


def main(args):
    if args.mode == 'train':
        # Set OpenAI API key
        openai.api_key = args.openai_api_key

        # Load data
        data_loader = DataLoader()
        data = data_loader.load_data()

        # Build and train model
        model = GPT2LMHeadModel()
        model.train(data)

        # Save trained model
        model.save()
    elif args.mode == 'chat':
        # Set OpenAI API key
        openai.api_key = args.openai_api_key

        # Load trained model
        model = GPT2LMHeadModel.load()

        # Start chat loop
        print("Type 'exit' to quit.")
        while True:
            # Get input from user
            input_text = input("You: ")

            # Check if user wants to exit
            if input_text.lower() == "exit":
                break

            # Generate response from model
            response = model.generate(input_text)

            # Print response
            print("Bot: ", response)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--mode', type=str, choices=['train', 'chat'], required=True)
    parser.add_argument('--openai_api_key', type=str, required=True)
    args = parser.parse_args()

    main(args)
